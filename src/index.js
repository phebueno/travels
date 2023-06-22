import express from "express";
import router from "./routes/index.routes.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(router)

app.listen(port, () => {
  console.log(`Server is up and running or port: ${port}`);
})