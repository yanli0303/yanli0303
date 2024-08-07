import { BasicInfo } from '../BasicInfo';
import { Education } from '../Education';
import { Experiences } from '../Experiences';
import { Skills } from '../Skills';
import './index.css';
import './print.css';

export default () => (
  <div className="hero">
    <div className="container box resume">
      <BasicInfo />
      <Skills />
      <Experiences />
      <Education />
    </div>
  </div>
);
