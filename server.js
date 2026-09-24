const express = require("express");
const connectDB = require("./db/connection.js");

const app = express();

connectDB();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Sever is running on port: http://localhost:${PORT}`);
    
})
