const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.end("First API");
    }
    if (req.url === "/about" && req.method === "GET") {
        res.end("about API");
    }
    if (req.url === "/profile" && req.method === "POST") {
        res.end("profile API");
    }
})

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`);
})

const express = require("express");
const app = express();

app.get("/profile", (req, res) => {
    res.send("profile API");
})

const PORT2 = process.env.PORT || 3002;
app.listen(PORT2, () => {
    console.log(`Server is started on ${PORT2}`);
})