import * as Prismic from "@prismicio/client";
import dotenv from "dotenv";
dotenv.config();

const repositoryName = process.env.PRISMIC_REPOSITORY_NAME || "";
const accessToken = process.env.PRISMIC_ACCESS_TOKEN || "";

export const client = Prismic.createClient(repositoryName, {
  accessToken,
});
