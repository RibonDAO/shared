/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve, join, basename } = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { readFileSync, writeFile, copy } = require("fs-extra");

const packagePath = process.cwd();
const distPath = join(packagePath, "./dist");

const writeJson = (targetPath, obj) =>
  writeFile(targetPath, JSON.stringify(obj, null, 2), "utf8");

async function createPackageFile() {
  const path = resolve(packagePath, "./package.json");
  const packageData = readFileSync(path, "utf8");
  // eslint-disable-next-line no-unused-vars
  const { scripts, devDependencies, ...packageOthers } = JSON.parse(packageData);
  const newPackageData = {
    ...packageOthers,
    private: false,
    typings: "./index.d.ts",
    main: "./cjs/index.js",
    module: "./index.js",
  };

  const targetPath = resolve(distPath, "./package.json");

  await writeJson(targetPath, newPackageData);
  console.log(`Created package.json in ${targetPath}`);
}

async function includeFileInBuild(file) {
  const sourcePath = resolve(packagePath, file);
  const targetPath = resolve(distPath, basename(file));
  await copy(sourcePath, targetPath);
  console.log(`Copied ${sourcePath} to ${targetPath}`);
}

async function run() {
  try {
    await createPackageFile();
    await includeFileInBuild("./README.md");
    // await includeFileInBuild('../../LICENSE');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
