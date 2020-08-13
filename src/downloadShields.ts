import { download, fs } from 'node-build-tools';
import path from 'path';

import { Config } from './Config';
import { Profile } from './Profile';
import { ShieldFormat } from './ShieldFormat';
import { ShieldStyle } from './ShieldStyle';

export const getShieldImageFileName = (
  profile: Profile,
  style: string,
  format: ShieldFormat
) => {
  if (format === ShieldFormat.iconOnly) {
    return `${profile.label.toLowerCase()}@2x.png`;
  }

  return `${profile.label}-${profile.username}-${format}-${style}.svg`;
};

export const downloadShields = async (config: Config, dir: string) => {
  if (config.shieldFormat === ShieldFormat.iconOnly) {
    return;
  }

  const styles = Object.values(ShieldStyle);
  fs.ensureDir(dir);
  for (const style of styles) {
    for (const profile of config.profiles) {
      console.group(profile.label);

      for (const format of Object.values(ShieldFormat)) {
        const leftText = format === ShieldFormat.labelled ? profile.label : '';
        const rightText =
          format === ShieldFormat.iconOnly ? '' : profile.username;
        const rightBackgroundColor =
          format === ShieldFormat.labelled
            ? profile.rightBackgroundColor
            : profile.leftBackgroundColor;
        const fileName = getShieldImageFileName(profile, style, format);
        const saveAs = path.join(dir, fileName);
        const url = `https://img.shields.io/badge/${leftText}-${rightText}-${rightBackgroundColor}.svg?style=${style}&logo=${profile.iconName}&logoColor=${profile.iconColor}&labelColor=${profile.leftBackgroundColor}`;

        console.log(`${format}: ${url}`);
        await download(url, saveAs);
      }

      console.groupEnd();
    }
  }
};
