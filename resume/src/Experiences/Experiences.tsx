import './Experiences.css';

import React from 'react';

import { SectionHeader } from '../SectionHeader';
import EmmaLogo from './emma-logo.jpg';
import HyperLogo from './hyper-logo.jpg';
import UsherLogo from './usher-logo.jpg';
import WorkstationLogo from './workstation-logo.jpg';

export const Experiences = () => (
  <section>
    <SectionHeader title="Experiences" />
    <div className="columns is-2">
      <div className="column is-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.microstrategy.com/"
        >
          MicroStrategy Inc.
        </a>
      </div>
      <div className="column is-5 has-text-centered">
        Software Engineer, Principal
      </div>
      <div className="column is-3 has-text-right">01/2016 - present</div>
    </div>
    <div className="content">
      <ul>
        <li>
          <div className="heading">Hackathons</div>
          <p>I won the most recent three MicroStrategy Hackathons in a row.</p>
        </li>
        <li>
          <div className="heading">
            <img className="icon is-small" src={HyperLogo} alt="" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.microstrategy.com/us/product/hyperintelligence"
            >
              Hyper Intelligence
            </a>
          </div>
          <p>
            I took on the Engineering Manager role in the Hyper division. I led
            the designs of HypeIntelligence for Office, Web, and Desktop, built
            development infrastructures including CI pipelines, i18n workflows,
            NPM package publishing and UI/Integration/Acceptance/Unit Testing
            frameworks, and Pull Request validators. I initiated software design
            discussions and proposed a loosely coupled application architecture
            named&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://gist.github.com/yanli0303/53379426aab525e313ee67e7eaee70d9#file-micro-module-services-md"
            >
              Micro Module Services
            </a>
            , it was recognized by the Chief Architect at MicroStrategy.
          </p>
        </li>
        <li>
          <div className="heading">
            <img className="icon is-small" src={WorkstationLogo} alt="" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/About_MicroStrategy.htm"
            >
              Workstation
            </a>
          </div>
          <p>
            As technical lead, I participated in the design and development of
            Workstation macOS application, the unified tools for MicroStrategy
            Products. Solely implemented R and Python integration,
            authentication, and dossier sharing. With Jenkins I built the
            development infrastructure, including the CI, i18n workflows, UI and
            Unit Testing frameworks, and Pull Request validators that saved 40%
            of time for developers. In my spare time I created a web application
            named &quot;Lost In Translation&quot; that made localization much
            easier, it was adopted by DevOps and applied to most projects in
            MicroStrategy. I also interviewed and mentored associate engineers.
          </p>
        </li>
      </ul>
    </div>
    <div className="columns is-2">
      <div className="column is-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.microstrategy.com/cn"
        >
          MicroStrategy China Technology Center Ltd.
        </a>
      </div>
      <div className="column is-5 has-text-centered">
        Principal Software Engineer II
      </div>
      <div className="column is-3 has-text-right">07/2008 - 01/2016</div>
    </div>
    <div className="content">
      <ul>
        <li>
          <div className="heading">
            <img className="icon is-small" src={EmmaLogo} alt="" />
            <span>Emma, and </span>
            <img className="icon is-small" src={UsherLogo} alt="" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.microstrategy.com/us/product/identity-and-telemetry"
            >
              Usher
            </a>
          </div>
          <p>
            Emma is a friendly marketplace like Facebook Marketplace, as a
            Python developer I integrated both Facebook and PayPal APIs for
            Emma. Usher is a secure enterprise identity management system, with
            PHP and YII framework I led three engineers designed the
            Usher&apos;s administration website - Network Manager, solely
            implemented the logging module that supports keyword filtering,
            created a client script minifier and a file uploading plugin for YII
            in spare time that made the developers&apos; life much easier.
          </p>
        </li>
        <li>
          <div className="heading">
            Quote System 2.0, Purchase Order, and Expense System
          </div>
          <p>
            As an developer, I replaced traditional ASP.NET form with AJAX in
            the Quote System 2.0 and saved 50% of page navigation; implemented
            the Purchase Order website, the email module I added 10 years ago
            supports templates and interceptions, it&apos;s so flexible thus
            still actively used today; I also added Web Services for the Expense
            System with WCF for mobile applications within a week.
          </p>
        </li>
      </ul>
    </div>
    <div className="columns is-2">
      <div className="column is-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://beyondsoft.com"
        >
          Beyondsoft Consulting Inc.
        </a>
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
