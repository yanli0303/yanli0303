import { Profile } from './Profile';
import { ShieldFormat } from './ShieldFormat';
import { ShieldStyle } from './ShieldStyle';

export interface Config {
  profiles: Profile[];
  style: ShieldStyle;
  shieldFormat: ShieldFormat;
}
