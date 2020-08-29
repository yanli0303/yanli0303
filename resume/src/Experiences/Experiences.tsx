import './Experiences.css';

import React from 'react';

import { SectionHeader } from '../SectionHeader';

export const Experiences = () => (
  <section>
    <SectionHeader title="Experiences" />
    <div className="columns is-2">
      <div className="column is-4">MicroStrategy Inc.</div>
      <div className="column is-5 has-text-centered">
        Software Engineer, Principal
      </div>
      <div className="column is-3 has-text-right">01/2016 - present</div>
    </div>

    <div className="columns is-2">
      <div className="column is-4">
        MicroStrategy China Technology Center Ltd.
      </div>
      <div className="column is-5 has-text-centered">
        Principal Software Engineer II
      </div>
      <div className="column is-3 has-text-right">07/2008 - 01/2016</div>
    </div>
    <div className="columns is-2">
      <div className="column is-4">BeyondSoft Tech Co, Ltd.</div>
      <div className="column is-5 has-text-centered">Microsoft Vendor SDET</div>
      <div className="column is-3 has-text-right">05/2007 - 08/2008</div>
    </div>
  </section>
);
