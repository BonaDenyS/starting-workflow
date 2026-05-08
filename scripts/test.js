/**
 * Basic smoke tests for the knowledge base site.
 * Verifies that key source files exist and are well-formed.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
let passed = 0;
let failed = 0;

function assert(label, condition) {
  if (condition) {
    console.log(`  ✓  ${label}`);
    passed++;
  } else {
    console.error(`  ✗  ${label}`);
    failed++;
  }
}

console.log("\nRunning knowledge base tests…\n");

// Required files must exist
const requiredFiles = [
  ".eleventy.js",
  "package.json",
  "src/index.njk",
];

requiredFiles.forEach((file) => {
  assert(
    `File exists: ${file}`,
    fs.existsSync(path.join(ROOT, file))
  );
});

// package.json must declare a build script
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf8"));
assert("package.json has a 'build' script", typeof pkg.scripts?.build === "string");
assert("package.json has a 'lint' script", typeof pkg.scripts?.lint === "string");

// .eleventy.js must reference PATH_PREFIX env var
const eleventyConfig = fs.readFileSync(path.join(ROOT, ".eleventy.js"), "utf8");
assert(".eleventy.js uses PATH_PREFIX env variable", eleventyConfig.includes("PATH_PREFIX"));

console.log(`\nResults: ${passed} passed, ${failed} failed\n`);

if (failed > 0) {
  process.exit(1);
}
