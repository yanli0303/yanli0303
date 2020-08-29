import './Experiences.css';

import React from 'react';

import { SectionHeader } from '../SectionHeader';

export const Experiences = () => (
  <section>
    <SectionHeader title="Experiences" />
    <div className="columns is-2">
      <div className="column is-4 has-text-weight-bold">MicroStrategy Inc.</div>
      <div className="column is-5 has-text-centered">
        Software Engineer, Principal
      </div>
      <div className="column is-3 has-text-right">01/2016 - present</div>
    </div>

    <div className="columns is-2">
      <div className="column is-4 has-text-weight-bold">
        MicroStrategy China Technology Center Ltd.
      </div>
      <div className="column is-5 has-text-centered">
        Principal Software Engineer II
      </div>
      <div className="column is-3 has-text-right">07/2008 - 01/2016</div>
    </div>
    <div className="columns is-2">
      <div className="column is-4 has-text-weight-bold">
        BeyondSoft Tech Co, Ltd.
      </div>
      <div className="column is-5 has-text-centered">Microsoft Vendor SDET</div>
      <div className="column is-3 has-text-right">05/2007 - 08/2008</div>
    </div>
    <div className="content">
      As SDET, designed and implemented test cases for automated functional
      testing of Visual Studio IDE and both C# and VB.net programming languages.
      I wrote a number of SQL scripts for MadDog database, the scripts
      aggregated the real-time status of test runs and generated well formatted
      reports. The scripts saved 20% of my time and was recognized and shared in
      the team.
    </div>
  </section>
);
