const nodeMajorVersion = process.versions.node.split('.').map(x => parseInt(x, 10))[0]
const code = nodeMajorVersion < 20 ? 0 : 1
if (!code) {
  console.info(`Skipped templates test suites on node ${nodeMajorVersion}`)
}
process.exit(code)
