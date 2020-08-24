import './SectionHeader.css';

import React from 'react';

export const SectionHeader = ({ title }: { title: string }) => (
  <header>
    <h2 className="title is-4 section-header">{title}</h2>
  </header>
);
