const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 3000;

app.use(cors());

app.get("/api/joke", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "1st joke",
      content: "This is my first joke",
    },
    {
      id: 2,
      title: "2nd joke",
      content: "This is my second joke",
    },
    {
      id: 3,
      title: "3rd joke",
      content: "This is my third joke",
    },
    {
      id: 4,
      title: "4th joke",
      content: "This is my fourth joke",
    },
  ];
  res.send(jokes);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
