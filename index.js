import dotenv from "dotenv";
import { app } from "./src/app.js";
import console_logger from "./middlewares/console_logger.js";

dotenv.config();
const { DOTENV_MSG, PORT } = process.env;
const NEW_PORT = PORT || 3001;

if (DOTENV_MSG) console_logger("Info", DOTENV_MSG, false);
else console_logger("Warning", "failed to load dotenv file", true);

app.listen(NEW_PORT || 3001, () => {
  console_logger(
    "Server",
    `server is working now : http://localhost:${NEW_PORT}`
  );
});
