import express from "express";
import config from "../lib/config.js";
import { defaultRoutes } from "./defaults.js";

const router = express.Router();


export default () => {

  if (config.routes.default) {
    defaultRoutes(router);
  }


  return router;
};
