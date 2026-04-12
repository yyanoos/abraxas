import { Link } from "react-router-dom";
import { useTitle } from "../lib/useTitle";
import { projects } from "../lib/projects";
import { getAllPosts } from "../lib/markdown";

const featured = projects.slice(0, 3);

export default function Home() {
  useTitle();
  const recentPosts = getAllPosts().slice(0, 2);

  return (
    <section className="page home">
      <div className="home-hero">
        <div className="home-symbol">&#x2721;</div>
        <h1 className="home-title">abraxas</h1>
        <p className="home-subtitle">
          I build systems that observe, connect, and deliver.
        </p>
        <p className="home-intro">
          이벤트 기반 아키텍처부터 ML 파이프라인까지,
          <br />
          문제를 끝까지 추적하는 시스템을 만듭니다.
        </p>
      </div>

      <div className="home-featured">
        <h2>Featured Projects</h2>
        <div className="home-project-grid">
          {featured.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className="home-project-card"
            >
              <div className="home-project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="home-project-info">
                <h3>{project.title}</h3>
                <p>{project.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/projects" className="home-more-link">
          모든 프로젝트 보기 &rarr;
        </Link>
      </div>

      {recentPosts.length > 0 && (
        <div className="home-recent">
          <h2>Recent Writing</h2>
          <ul className="home-post-list">
            {recentPosts.map((post) => (
              <li key={post.meta.slug}>
                <Link to={`/blog/${post.meta.slug}`}>
                  <span className="home-post-title">{post.meta.title}</span>
                  <time>{post.meta.date}</time>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/blog" className="home-more-link">
            블로그 더 보기 &rarr;
          </Link>
        </div>
      )}

      <blockquote className="home-quote">
        <p>
          "The bird fights its way out of the egg. The egg is the world. Who
          would be born must first destroy a world."
        </p>
        <cite>Hermann Hesse, Demian</cite>
      </blockquote>

      <nav className="home-nav">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/links">Links</Link>
      </nav>
    </section>
  );
}
