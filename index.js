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

/* 상호 작용은 어떻게 돌아가는지 봅시다 ㅎㅎㅎ*/

/**이건 어떻게 될까요? */