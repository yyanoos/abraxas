import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="page home">
      <div className="home-symbol">&#x2721;</div>
      <h1 className="home-title">abraxas</h1>
      <p className="home-subtitle">
        The one who contains both light and shadow.
      </p>
      <p className="home-quote">
        "The bird fights its way out of the egg. The egg is the world. Who would
        be born must first destroy a world."
      </p>
      <nav className="home-nav">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/links">Links</Link>
      </nav>
    </section>
  );
}
