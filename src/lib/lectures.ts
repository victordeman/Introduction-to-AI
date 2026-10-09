import fs from "fs";
import path from "path";

export interface LectureMetadata {
  slug: string;
  title: string;
  description: string;
  week: number;
  date?: string;
}

const LECTURES_DIR = path.join(process.cwd(), "src/content/lectures");

export function parseMetadata(fileContent: string): Record<string, string> {
  const metadata: Record<string, string> = {};

  // 1. Try matching YAML frontmatter: --- ... ---
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
  const frontmatterMatch = frontmatterRegex.exec(fileContent);

  if (frontmatterMatch) {
    const lines = frontmatterMatch[1].split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;

      const colonIndex = trimmed.indexOf(":");
      if (colonIndex !== -1) {
        const key = trimmed.slice(0, colonIndex).trim();
        let value = trimmed.slice(colonIndex + 1).trim();

        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1);
        }

        metadata[key] = value;
      }
    }
    return metadata;
  }

  // 2. Try matching JS export metadata: export const metadata = { ... } (semicolon optional)
  const jsExportRegex = /export\s+const\s+metadata\s*=\s*\{([\s\S]*?)\}\s*;?/;
  const jsExportMatch = jsExportRegex.exec(fileContent);

  if (jsExportMatch) {
    const body = jsExportMatch[1];
    const propertyRegex = /(?:["']?(\w+)["']?)\s*:\s*(?:"([^"]*)"|'([^']*)'|(\d+)|([^,\n}]+))/g;
    let match;
    while ((match = propertyRegex.exec(body)) !== null) {
      const key = match[1];
      const val = match[2] ?? match[3] ?? match[4] ?? match[5];
      if (key && val !== undefined) {
        metadata[key] = val.trim();
      }
    }
  }

  return metadata;
}

export function getLectures(): LectureMetadata[] {
  if (!fs.existsSync(LECTURES_DIR)) {
    return [];
  }

  const files = fs.readdirSync(LECTURES_DIR);
  const mdxFiles = files.filter(
    (file) => file.endsWith(".mdx") && !file.startsWith(".")
  );

  const lectures: LectureMetadata[] = mdxFiles.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(LECTURES_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const frontmatter = parseMetadata(fileContent);

    // Fallback title generation if not provided in metadata
    const title =
      frontmatter.title ||
      slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    const weekNum = frontmatter.week ? parseInt(frontmatter.week, 10) : 0;

    return {
      slug,
      title,
      description: frontmatter.description || "",
      week: isNaN(weekNum) ? 0 : weekNum,
      date: frontmatter.date,
    };
  });

  // Sort lectures by week ascending, then by slug
  return lectures.sort((a, b) => {
    if (a.week !== b.week) {
      return a.week - b.week;
    }
    return a.slug.localeCompare(b.slug);
  });
}

export function getLectureBySlug(slug: string): LectureMetadata | null {
  const lectures = getLectures();
  return lectures.find((lecture) => lecture.slug === slug) || null;
}
