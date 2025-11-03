const fs = require("fs");

function setOutput(name, value) {
    const outputPath = process.env["GITHUB_OUTPUT"];
    fs.appendFileSync(outputPath, `${name}=${value}\n`);
}

try {
    const name = process.env["INPUT_NAME"] || "world";
    const message = `👋 Hello, ${name}!`;
    console.log(message);
    setOutput("greeting", message);
} catch (error) {
    console.error("Action failed:", error);
    process.exit(1);
}
