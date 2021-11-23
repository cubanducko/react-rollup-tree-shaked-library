import pkg from "./package.json";
import tsConfig from "./tsconfig.json";
import swc from "rollup-plugin-swc";
import resolve from "@rollup/plugin-node-resolve";
import clear from "rollup-plugin-clear";
import sourceMaps from "rollup-plugin-sourcemaps";
import progress from "rollup-plugin-progress";
import { typescriptPaths } from "rollup-plugin-typescript-paths";

import dts from "rollup-plugin-dts";

const env = process.env.NODE_ENV;

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
];

const plugins = [
  clear({
    targets: ["dist"],
  }),
  typescriptPaths({
    preserveExtensions: true,
  }),
  resolve({
    extensions: [".ts", ".tsx"],
  }),
  swc(),
  sourceMaps(),
  progress(),
];

const baseConfig = {
  input: "./src/index.ts",
  external: makeExternalPredicate(external),
};

function makeExternalPredicate(externalArr) {
  if (externalArr.length === 0) {
    return () => false;
  }

  const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
  return (id) => pattern.test(id);
}

const config = [
  {
    ...baseConfig,
    output: [
      {
        dir: "dist/esm",
        format: "esm",
        preserveModulesRoot: "src",
        sourcemap: true,
        preserveModules: true,
      },
      {
        dir: "dist/lib",
        format: "cjs",
        preserveModulesRoot: "src",
        sourcemap: true,
        preserveModules: true,
      },
    ],
    plugins,
  },
  {
    ...baseConfig,
    output: [
      { dir: "dist/esm", format: "esm", preserveModules: true },
      { dir: "dist/lib", format: "cjs", preserveModules: true },
    ],
    plugins: [
      dts({
        compilerOptions: {
          paths: tsConfig.compilerOptions.paths,
        },
      }),
    ],
  },
];

export default config;
