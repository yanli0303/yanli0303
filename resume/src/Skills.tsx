import { SectionHeader } from './SectionHeader';

export const Skills = () => (
  <section>
    <SectionHeader title="Skills" />
    <div className="columns is-2">
      <div className="column is-2 has-text-weight-bold">Highly Proficient</div>
      <div className="column">
        Front-end web development in JS/TS with React and Redux.
      </div>
    </div>
    <div className="columns is-2">
      <div className="column is-2 has-text-weight-bold">Proficient</div>
      <div className="column">
        HTTP and REST protocols, design principles, caching mechanisms, and databases.
      </div>
    </div>
    <div className="columns is-2">
      <div className="column is-2 has-text-weight-bold">
        Approaching Proficient
      </div>
      <div className="column">
        Distributed system design, project management, mobile/desktop app
        development with Swift and Electron, and web server operations.
      </div>
    </div>
  </section>
);
