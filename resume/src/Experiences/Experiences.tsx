import { SectionHeader } from "../SectionHeader";
import EmmaLogo from "./emma-logo.jpg";
import HyperLogo from "./hyper-logo.jpg";
import LightingLogo from "./lightning-logo.png";
import OrangeLogo from "./orange-logo.png";
import UsherLogo from "./usher-logo.jpg";
import WorkstationLogo from "./workstation-logo.jpg";

export const Experiences = () => (
  <section>
    <SectionHeader title="Experiences" />
    <div className="columns is-2">
      <div className="column is-4">
        <a target="_blank" rel="noopener noreferrer" href="https://www.microstrategy.com/">
          MicroStrategy Inc.
        </a>
      </div>
      <div className="column is-5 has-text-centered">Software Engineer, Principal</div>
      <div className="column is-3 has-text-right">01/2016 - present</div>
    </div>
    <div className="content">
      <ul>
        <li>
          <div className="heading"><img className="icon is-small" src={OrangeLogo} alt="" /><span>Orange</span></div>
          <p>
            Developed the MicroStrategy Orange Outlook add-in, providing secure email communication through digital
            signatures and verification. Built the Orange admin portal to manage user DIDs (decentralized identifiers).
            As a hackathon project, I created a website and a browser extension for signing and verifying arbitrary
            files and text messages. Demonstrated expertise in full-stack web development and a strong ability to
            deliver innovative solutions.
          </p>
        </li>
        <li>
          <div className="heading"><img className="icon is-small" src={LightingLogo} alt="" /><span>Lighting Wallet</span></div>
          <p>
            Spearheaded the front-end development of the MicroStrategy Lightning Wallet, a digital wallet solution on
            the Bitcoin{" "}
            <a target="_blank" rel="noopener noreferrer" href="https://lightning.network/">
              Lightning Network
            </a>
            . Designed and implemented cross-platform user interfaces, including a browser extension, web and mobile SDKs, web wallet, 
            and mobile applications.  Created robust administrative and provisioning tools to support the Lightning Network
            ecosystem.
          </p>
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
            <span> - inject analytics and intelligence into every user&apos;s experience.</span>
          </div>
          <p>
            I led the designs of HypeIntelligence for&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://demo.microstrategy.com/MicroStrategyLibrary/static/hyper/office/index.html"
            >
              Office
            </a>
            ,&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://chrome.google.com/webstore/detail/microstrategy-hyperintell/ikaoafechdeidffgniffdhdckeclcdhf?hl=en"
            >
              Web
            </a>
            , and&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://apps.apple.com/us/app/microstrategy/id1517716679"
            >
              Desktop
            </a>
            , built development infrastructures including CI/CD pipelines, i18n workflows, and testing frameworks. I
            initiated discussions on software design and introduced a flexible application architecture called&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://gist.github.com/yanli0303/53379426aab525e313ee67e7eaee70d9"
            >
              Micro Module Services
            </a>
            , which was praised by then Chief Architect.
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
            <span> - the unified tools for MicroStrategy Products</span>
          </div>
          <p>
            As a Workstation macOS app developer, I independently developed key features like authentication and the R
            and Python integration. I created the CI/CD pipelines on Jenkins, and designed the i18n workflows that saved
            40% of the time for developers. Outside of regular work, I built a website called "Lost In Translation" to
            simplify translating the app into different languages, many MicroStrategy projects used this tool. I also
            hired and trained new engineers.
          </p>
        </li>
      </ul>
    </div>
    <div className="columns is-2">
      <div className="column is-4">
        <a target="_blank" rel="noopener noreferrer" href="https://www.microstrategy.com/cn">
          MicroStrategy China Technology Center Ltd.
        </a>
      </div>
      <div className="column is-5 has-text-centered">Principal Software Engineer II</div>
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
            I integrated Facebook and PayPal APIs into Emma, a marketplace similar to Facebook Marketplace. Leading a
            team of three engineers, I designed Usher's Network Manager, a secure enterprise identity management system
            built with PHP and Yii. I independently developed the logging module with keyword filtering capabilities,
            created a client script minifier and a file uploading plugin for Yii to enhance developer efficiency.
          </p>
        </li>
      </ul>
    </div>
    <div className="columns is-2">
      <div className="column is-4">
        <a target="_blank" rel="noopener noreferrer" href="https://beyondsoft.com">
          Beyondsoft Consulting Inc.
        </a>
      </div>
      <div className="column is-5 has-text-centered">Microsoft Vendor SDET</div>
      <div className="column is-3 has-text-right">05/2007 - 08/2008</div>
    </div>
    <div className="content">
      Created automated tests to ensure Visual Studio IDE and C#/.NET programming languages function correctly. I wrote
      SQL scripts to combine real-time test results into clear reports, saving me 20% of time. These scripts were
      well-received and shared by the team.
    </div>
  </section>
);
