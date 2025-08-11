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
      <div className="column is-5 has-text-centered">Software Architect</div>
      <div className="column is-3 has-text-right">01/2016 - present</div>
    </div>
    <div className="content">
      <ul>
        <li>
          <div className="heading">
            <img className="icon is-small" src={OrangeLogo} alt="Orange logo" />
            <span>Orange</span>
          </div>
          <p>
            Developed the Orange Outlook add-in to enable secure email communication using digital signatures and
            verification on top of blockchain. Built the Orange admin portal for managing user DIDs (decentralized
            identifiers). Created a website and browser extension for signing and verifying files and messages.
            Demonstrated full-stack development expertise and delivered innovative solutions.
          </p>
        </li>
        <li>
          <div className="heading">
            <img className="icon is-small" src={LightingLogo} alt="Lightning Wallet logo" />
            <span>Lighting Wallet</span>
          </div>
          <p>
            Spearheaded front-end development of the Lightning Wallet, a digital wallet for the Bitcoin{" "}
            <a target="_blank" rel="noopener noreferrer" href="https://lightning.network/">
              Lightning Network
            </a>
            . Designed and built cross-platform user interfaces—including browser extension, web and mobile SDKs, web
            wallet, and mobile apps—and developed robust administrative and provisioning tools to support the ecosystem.
          </p>
        </li>
        <li>
          <div className="heading">
            <img className="icon is-small" src={HyperLogo} alt="Hyper Intelligence logo" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.strategysoftware.com/strategyone/hyperintelligence"
            >
              Hyper Intelligence
            </a>
            <span> - inject analytics and intelligence into every user&apos;s experience.</span>
          </div>
          <p>
            Led the design of Hyper Intelligence SDK and apps of{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://demo.microstrategy.com/MicroStrategyLibrary/static/hyper/office/index.html"
            >
              Office
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://chrome.google.com/webstore/detail/microstrategy-hyperintell/ikaoafechdeidffgniffdhdckeclcdhf?hl=en"
            >
              Browser
            </a>
            , and Desktop platforms. Built development infrastructure, including CI/CD pipelines, internationalization
            workflows, and testing frameworks. Initiated software design discussions and introduced the flexible{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://gist.github.com/yanli0303/53379426aab525e313ee67e7eaee70d9"
            >
              Micro Module Services
            </a>{" "}
            architecture.
          </p>
        </li>
        <li>
          <div className="heading">
            <img className="icon is-small" src={WorkstationLogo} alt="Workstation logo" />
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
            As the Workstation macOS app developer, I independently built core features such as authentication and
            R/Python integration, implemented CI/CD pipelines with Jenkins, and designed i18n workflows that reduced
            developer time by 40%. In my spare time, I created a "Lost In Translation" website to streamline app
            localization, which was widely adopted across MicroStrategy projects. I also recruited and mentored new
            engineers.
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
            <img className="icon is-small" src={EmmaLogo} alt="Emma logo" />
            <span>Emma, and </span>
            <img className="icon is-small" src={UsherLogo} alt="Usher logo" />
            Usher
          </div>
          <p>
            Integrated Facebook and PayPal APIs into Emma, a Facebook Marketplace-style platform. Led a team of three
            engineers to design Usher's Network Manager, a secure enterprise identity management system using PHP and
            Yii. Developed a logging module with keyword filtering, a client script minifier, and a file upload plugin
            to improve developer productivity.
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
      Developed comprehensive automated test suites to validate Visual Studio IDE functionality and C#/.NET language
      features. Created actionable dashboards from real-time test results, reducing analysis time by 20%. These valuable
      dashboards were adopted and shared across the team for broader use.
    </div>
  </section>
);
