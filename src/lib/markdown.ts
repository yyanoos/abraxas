export interface BlogMeta {
  title: string;
  date: string;
  tags: string[];
  summary: string;
  slug: string;
}

export interface BlogPost {
  meta: BlogMeta;
  content: string;
}

const blogModules = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function slugFromPath(path: string): string {
  const filename = path.split("/").pop() ?? "";
  return filename.replace(/\.md$/, "");
}

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const frontmatter = match[1];
  const content = match[2];
  const data: Record<string, unknown> = {};

  for (const line of frontmatter.split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let value: unknown = line.slice(colonIdx + 1).trim();

    // Remove surrounding quotes
    if (typeof value === "string" && value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }

    // Parse JSON arrays
    if (typeof value === "string" && value.startsWith("[")) {
      try {
        value = JSON.parse(value);
      } catch {
        // keep as string
      }
    }

    data[key] = value;
  }

  return { data, content };
}

export function getAllPosts(): BlogPost[] {
  return Object.entries(blogModules)
    .map(([path, raw]) => {
      const { data, content } = parseFrontmatter(raw);
      return {
        meta: {
          title: (data.title as string) ?? "Untitled",
          date: (data.date as string) ?? "",
          tags: (data.tags as string[]) ?? [],
          summary: (data.summary as string) ?? "",
          slug: slugFromPath(path),
        },
        content,
      };
    })
    .sort((a, b) => (a.meta.date > b.meta.date ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.meta.slug === slug);
}
