import mongoose from "mongoose";
import logger from "./logger";

export default async function connect() {
  await new Promise<void>((res, rej) => {
    mongoose
      .connect(
        `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_IP}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        }
      )
      .then((_c) => {
        mongoose.set("useCreateIndex", true);
        logger.info("Successfully connected to Mongo Database");
        res();
      })
      .catch((err) => rej(err));
  });
}
