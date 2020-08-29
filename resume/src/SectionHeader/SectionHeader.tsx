import './SectionHeader.css';

import React from 'react';

export const SectionHeader = ({ title }: { title: string }) => (
  <header>
    <h5 className="title is-5 section-header">{title}</h5>
  </header>
);
