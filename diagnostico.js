const nodeVersion = process.version;
const nodePlatform = process.platform;
const nodeArgv = process.argv;
const nodeEnv = process.env;

console.log(`Node Version: ${nodeVersion}`);
console.log(`Node Platform: ${nodePlatform}`);
console.log(`Node ARGV: ${nodeArgv}`);
console.log("Node ENV: ", nodeEnv);
