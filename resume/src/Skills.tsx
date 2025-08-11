import { SectionHeader } from "./SectionHeader";

export const Skills = () => (
  <section>
    <SectionHeader title="Skills" />
    <div className="columns is-1">
      <div className="column is-2 has-text-weight-bold">Highly Proficient</div>
      <div className="column">
        Serverless/cloud architectures, distributed system design, microservices, SaaS, containerization, web security,
        HTTP and OAuth 2.0 protocols, caching mechanisms, and databases.
      </div>
    </div>
    <div className="columns is-1">
      <div className="column is-2 has-text-weight-bold">Proficient</div>
      <div className="column">
        LLMs, supervised fine-tuning and RAG. Project management, CI/CD pipelines, i18n, and DevOps. SPA, PWA,
        Full-stack and cross-platform development (web, browser extension, desktop, mobile).
      </div>
    </div>
  </section>
);
