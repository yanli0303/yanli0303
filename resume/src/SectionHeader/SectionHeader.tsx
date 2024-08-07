import './SectionHeader.css';

export const SectionHeader = ({ title }: { title: string }) => (
  <header className="section-header arrow-right">
    <h6 className="title is-6 arrow-item">{title}</h6>
    <hr />
  </header>
);
