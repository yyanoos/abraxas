import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { getPostBySlug } from "../lib/markdown";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <section className="page">
        <h1>Post not found</h1>
        <Link to="/blog">Back to Blog</Link>
      </section>
    );
  }

  return (
    <article className="page blog-post">
      <header className="blog-post-header">
        <h1>{post.meta.title}</h1>
        <time>{post.meta.date}</time>
        <div className="blog-post-tags">
          {post.meta.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </header>
      <div className="blog-post-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
          {post.content}
        </ReactMarkdown>
      </div>
      <Link to="/blog" className="back-link">
        Back to Blog
      </Link>
    </article>
  );
}
