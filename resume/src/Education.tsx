import { SectionHeader } from "./SectionHeader";

export const Education = () => (
  <section>
    <SectionHeader title="Education" />
    <div className="columns is-2">
      <div className="column is-4">
        <a href="https://en.wikipedia.org/wiki/North_Minzu_University" target="_blank" rel="noreferrer noopener">
          North Minzu University
        </a>
      </div>
      <div className="column is-5 has-text-centered">Bachelor, Computer Science and Technology</div>
      <div className="column is-3 has-text-right">09/2002 - 07/2006</div>
    </div>
  </section>
);
