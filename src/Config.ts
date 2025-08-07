import type { Profile } from "./Profile";
import type { ShieldFormat } from "./ShieldFormat";
import type { ShieldStyle } from "./ShieldStyle";

export interface Config {
  profiles: Profile[];
  style: ShieldStyle;
  shieldFormat: ShieldFormat;
}
