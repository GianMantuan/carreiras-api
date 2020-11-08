import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";

import routes from "./routes";

// Create express app
const app = express();

// Call middlewares
app.use(
  cors({
    origin: [
      "http://localhost:8080",
      "https://localhost:8080",
      "http://localhost",
    ],
    credentials: false,
  })
);
app.use(helmet());
app.use(bodyParser.json());

// Setup all routes from routes folder
app.use(routes);

export default app;
