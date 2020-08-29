import './index.css';

import React from 'react';

import { BasicInfo } from '../BasicInfo';
import { Skills } from '../Skills';

export default () => (
  <section className="hero is-fullheight">
    <section className="container box resume">
      <BasicInfo />
      <Skills />
    </section>
  </section>
);
