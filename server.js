require("dotenv").config();
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const connectDB = require("./db/connection");

connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

// app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const booksRouter = require("./routes/bookRoutes.js");
app.use("/api/books", booksRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
    
})



