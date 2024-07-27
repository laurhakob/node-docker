import express from "express";
import config from "./config.js";

export const startServer = () => {
  const httpServer = express();
  const port = config.port;
  //   console.log(`Port from .env file: ${process.env.PORT}`);
    

  try {

    httpServer.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    throw new Error(err);
  }
};
