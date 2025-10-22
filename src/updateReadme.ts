import { readFileSync, writeFileSync } from "node:fs";
import type { Config } from "./Config";
import { getShieldImageFileName } from "./downloadShields";
import { placeholder } from "./placeholder";

const makeShields = ({ profiles, style, shieldFormat }: Config) =>
  profiles.map((profile) => {
    const shieldName = getShieldImageFileName(profile, style, shieldFormat);
    const src = `https://raw.githubusercontent.com/yanli0303/yanli0303/master/assets/${shieldName}`;
    const img = `<img alt="Yan Li - ${profile.label}" src="${src}" width="24" height="24" />`;
    const homepage = placeholder(profile.urlTemplate, profile);
    return `[${img}](${homepage})`;
  });

const updateSection = (lines: string[], begin: string, end: string, replaceWith: string[]) => {
  let first = 0;
  let numberOfLines = -1;
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (line === begin) {
      first = i + 1;
      numberOfLines = 0;
    } else if (line === end) {
      break;
    } else if (first > 0) {
      numberOfLines += 1;
    }
  }

  if (first < 1) {
    throw new Error(`"${begin}" wasn't found in README.`);
  }

  if (numberOfLines < 0) {
    throw new Error(`"${end}" wasn't found in README.`);
  }

  const copy = [...lines];
  copy.splice(first, numberOfLines, ...replaceWith);
  return copy;
};

const updateShields = (lines: string[], config: Config) =>
  updateSection(lines, "<!--SHIELDS_BEGIN-->", "<!--SHIELDS_END-->", makeShields(config));

const updateGetInTouch = (lines: string[], config: Config) =>
  updateSection(
    lines,
    "<!--GET_IN_TOUCH_BEGIN-->",
    "<!--GET_IN_TOUCH_END-->",
    config.profiles.map((p) => {
      const homepage = placeholder(p.urlTemplate, p);
      const linkText = p.label === "Email" ? p.username : homepage;
      return `- ${p.label}: [${linkText}](${homepage})`;
    }),
  );

const updateLastUpdated = (lines: string[]) => {
  const lastUpdatedPrefix = "Updated on: ";
  return lines.map((line) => {
    if (line.startsWith(lastUpdatedPrefix)) {
      const lastUpdated = new Date().toString();
      return `${lastUpdatedPrefix}${lastUpdated}`;
    }
    return line;
  });
};

export const updateReadme = (readme: string, config: Config) => {
  let contents = readFileSync(readme, { encoding: "utf-8" }).split(/\r?\n/);
  contents = updateShields(contents, config);
  contents = updateGetInTouch(contents, config);
  contents = updateLastUpdated(contents);
  writeFileSync(readme, contents.join("\n"), { encoding: "utf-8" });
};
