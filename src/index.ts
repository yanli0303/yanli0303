import { join } from "node:path";
import type { Config } from "./Config";
import { downloadShields } from "./downloadShields";
import { ShieldFormat } from "./ShieldFormat";
import { ShieldStyle } from "./ShieldStyle";
import { updateReadme } from "./updateReadme";

const config: Config = {
  profiles: [
    {
      label: "GitHub",
      username: "yanli0303",
      urlTemplate: "https://github.com/{{username}}/",
      iconName: "github",
      iconColor: "ffffff",
      textColor: "ffffff",
      leftBackgroundColor: "181717",
      rightBackgroundColor: "676767",
    },
    {
      label: "LinkedIn",
      username: "yanli0303",
      urlTemplate: "https://www.linkedin.com/in/{{username}}/",
      iconName: "linkedin",
      iconColor: "ffffff",
      textColor: "ffffff",
      leftBackgroundColor: "0077b5",
      rightBackgroundColor: "676767",
    },
    {
      label: "CodeSandbox",
      username: "yanli0303",
      urlTemplate: "https://codesandbox.io/u/{{username}}/",
      iconName: "codesandbox",
      iconColor: "ffffff",
      textColor: "ffffff",
      leftBackgroundColor: "000000",
      rightBackgroundColor: "blue",
    },
    {
      label: "StackOverflow",
      username: "typing",
      urlTemplate: "https://stackoverflow.com/users/11735165/{{username}}",
      iconName: "stackoverflow",
      iconColor: "ffffff",
      textColor: "ffffff",
      leftBackgroundColor: "000000",
      rightBackgroundColor: "fe7a16",
    },
    {
      label: "Email",
      username: "yanli0303@outlook.com",
      urlTemplate: "mailto:{{username}}",
      iconName: "gmail",
      iconColor: "ffffff",
      textColor: "ffffff",
      leftBackgroundColor: "0078d4",
      rightBackgroundColor: "676767",
    },
  ],
  style: ShieldStyle.flat,
  shieldFormat: ShieldFormat.iconOnly,
};

const CWD = process.cwd();
const DIR_SHIELDS = join(CWD, "assets");
downloadShields(config, DIR_SHIELDS)
  .then(() => updateReadme(join(CWD, "README.md"), config))
  .catch(console.error);
