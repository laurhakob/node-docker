import express from "express";
import config from "./config.js";
import { initializeApp } from "./initializers/index.js";

export const startServer = async () => {
  const app = express();
  const port = config.port;


  await initializeApp(app, config);

  try {
    app.listen(port, () => {
      console.log(`\n 🚀 Server running on port ${port}`);
    });
  } catch (err) {
    throw new Error(err);
  }
};
