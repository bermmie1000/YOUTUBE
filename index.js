import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from hone");

const handleProfile = (req, res) => res.send("this is profile");

app.get("/", handleHome);

app.get("/profile", handleProfile)

app.listen(PORT, handleListening);


/* 변경이 되어지는지 봅시다. */