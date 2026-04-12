import { useTitle } from "../lib/useTitle";

const links = [
  {
    icon: "GH",
    label: "GitHub",
    url: "https://github.com",
    description: "오픈소스 프로젝트와 코드",
  },
  {
    icon: "LI",
    label: "LinkedIn",
    url: "https://linkedin.com",
    description: "경력 및 네트워크",
  },
  {
    icon: "@",
    label: "Email",
    url: "mailto:hello@example.com",
    description: "문의 및 연락",
  },
];

export default function Links() {
  useTitle("Links");
  return (
    <section className="page links">
      <h1>Links</h1>
      <p className="links-description">
        작업물을 확인하거나, 연락하고 싶을 때.
      </p>
      <ul className="link-list">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.url}
              className="link-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="link-icon">{link.icon}</span>
              <div className="link-content">
                <span className="link-label">{link.label}</span>
                <span className="link-desc">{link.description}</span>
              </div>
              <span className="link-arrow">&rarr;</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
