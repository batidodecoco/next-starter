import dotenv from "dotenv";

dotenv.config();

import express, { Request, Response } from "express";
import next from "next";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import bodyParser from "body-parser";
import logger from "./utils/logger";
import api from "./routes/api";
import mongoConnection from "./utils/mongoConnection";

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  try {
    await mongoConnection();

    const server = express();

    server.set("trust proxy", true);
    server.use(cors());
    server.use(
      helmet({
        contentSecurityPolicy: false,
      })
    );
    server.use(compression());
    server.use(bodyParser.json());

    server.use("/api/", api);

    server.get("*", (req: Request, res: Response) => {
      return handle(req, res);
    });

    server.listen(port, () => {
      logger.info(`Server successfully started at port: ${port}`);
    });
  } catch (err) {
    logger.error(err.message);
    process.exit();
  }
});
