import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import noteRoutes from "./app/routes/noteRoutes.js";
import categoryRoutes from "./app/routes/categoryRoutes.js";

//load .env file to process.env
dotenv.config();

// connect to mongodb
connectDb();

// create express app
const app = express();

// json parse
app.use(express.json());

app.use("/api/notes", noteRoutes);

app.use("/api/categories", categoryRoutes);

//404 Error, if the url not found
app.use(notFound);

//Error Handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// start server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`);
});
