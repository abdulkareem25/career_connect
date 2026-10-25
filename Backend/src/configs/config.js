import { config as c } from "dotenv";

const envFile = `.env.${process.env.NODE_ENV}`;

c({ path: envFile });

const envs = [
  "PORT",
  "MONGODB_URI",
];

envs.forEach((env) => {
  if (!process.env[env]) throw new Error(`${env} is not defined in the env.`);
});

const config = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI
};

export default config;