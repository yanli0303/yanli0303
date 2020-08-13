import { download, fs } from 'node-build-tools';
import path from 'path';

import { Profile } from './Profile';
import { ShieldFormat } from './ShieldFormat';
import { ShieldStyle } from './ShieldStyle';

export const getShieldImageFileName = (
  profile: Profile,
  style: string,
  format: ShieldFormat
) => `${profile.label}-${profile.username}-${format}-${style}.svg`;

export const downloadShields = async (profiles: Profile[], dir: string) => {
  const styles = Object.values(ShieldStyle);
  fs.ensureDir(dir);
  for (const style of styles) {
    for (const profile of profiles) {
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
        const url =
          format === ShieldFormat.iconOnly
            ? `https://simpleicons.org/icons/${profile.iconName}.svg`
            : `https://img.shields.io/badge/${leftText}-${rightText}-${rightBackgroundColor}.svg?style=${style}&logo=${profile.iconName}&logoColor=${profile.iconColor}&labelColor=${profile.leftBackgroundColor}`;

        console.log(`${format}: ${url}`);
        await download(url, saveAs);
      }

      console.groupEnd();
    }
  }
};
