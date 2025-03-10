import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server is listening on http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch("error", () => {
    console.log("DataBase Connection failed: ", error);
  });
