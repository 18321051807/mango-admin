import type { Plugin } from "vite";
import dayjs, { type Dayjs } from "dayjs";
import duration from "dayjs/plugin/duration";
// import gradientString from "gradient-string";
// import boxen, { type Options as BoxenOptions } from "boxen";
dayjs.extend(duration);

// const boxenOptions: BoxenOptions = {
//   padding: 0.5,
//   borderColor: "cyan",
//   borderStyle: "round"
// };

export function viteBuildInfo(): Plugin {
  let config: { command: string };
  let startTime: Dayjs;
  let endTime: Dayjs;
  let outDir: string;
  return {
    name: "vite:buildInfo",
    configResolved(resolvedConfig) {
      config = resolvedConfig;
      outDir = resolvedConfig.build?.outDir ?? "dist";
    },
    buildStart() {
      // console.log(boxen(welcomeMessage, boxenOptions));
      if (config.command === "build") {
        startTime = dayjs(new Date());
      }
    },
    closeBundle() {
      if (config.command === "build") {
        endTime = dayjs(new Date());
      }
    }
  };
}
