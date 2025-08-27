import { Command } from "commander";
import { config } from "dotenv";
config();

import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "langchain/core/messages";
import fs from "node:fs";
import path from "node:path";

const program = new Command();

program
  .name("langchain-demo-ts")
  .description("Generate an article using LangChain.js + OpenAI")
  .requiredOption("-t, --title <title>", "Blog title")
  .option("-a, --audience <audience>", "Audience", "Technical Software Engineers")
  .option("-o, --tone <tone>", "Tone of voice", "Informative and detailed");

async function run() {
  const opts = program.parse(process.argv).opts<{
    title: string;
    audience: string;
    tone: string;
  }>();

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not set. Add it to a .env file.");
  }

  const model = new ChatOpenAI({ temperature: 0.9, apiKey });

  const system = new SystemMessage(
    "You are an assistant that writes full, well-structured technical articles based on inputs."
  );
  const human = new HumanMessage(
    `This program will generate a full article using the blog post title, audience, and tone of voice.\n\nTitle: ${opts.title}\nAudience: ${opts.audience}\nTone: ${opts.tone}\n\nInclude sections: Introduction, Prerequisites, Choosing Your App Idea, Creating the App, Testing & Debugging, Finishing Touches, Conclusion.`
  );

  const response = await model.call([system, human]);
  const content = response.content?.toString() ?? "";

  const slug = opts.title.replace(/[^a-z0-9]+/gi, "_").replace(/^_+|_+$/g, "");
  const filename = `${slug}.txt`;
  const outDir = path.resolve(process.cwd(), "outputs");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, filename);
  fs.writeFileSync(outPath, content, "utf8");
  console.log(`Article saved to ${outPath}`);
}

run().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});


