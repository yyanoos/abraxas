import { useState } from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "../lib/markdown";

export default function Blog() {
  const posts = getAllPosts();
  const allTags = [...new Set(posts.flatMap((p) => p.meta.tags))];
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? posts.filter((p) => p.meta.tags.includes(activeTag))
    : posts;

  return (
    <section className="page blog">
      <h1>Blog</h1>
      <div className="blog-tags">
        <button
          className={activeTag === null ? "tag active" : "tag"}
          onClick={() => setActiveTag(null)}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={activeTag === tag ? "tag active" : "tag"}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <ul className="blog-list">
        {filtered.map((post) => (
          <li key={post.meta.slug} className="blog-item">
            <Link to={`/blog/${post.meta.slug}`}>
              <h2>{post.meta.title}</h2>
              <p className="blog-summary">{post.meta.summary}</p>
              <time>{post.meta.date}</time>
            </Link>
          </li>
        ))}
        {filtered.length === 0 && <p className="empty">No posts yet.</p>}
      </ul>
    </section>
  );
}
