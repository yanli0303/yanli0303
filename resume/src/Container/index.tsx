import './index.css';

import React from 'react';

import { BasicInfo } from '../BasicInfo';
import { TechSkills } from '../TechSkills';

export default () => (
  <section className="hero is-fullheight">
    <section className="container box resume">
      <BasicInfo />
      <TechSkills />
    </section>
  </section>
);
