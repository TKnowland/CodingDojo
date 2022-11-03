const express = require("express");
const app = express();
const PORT = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];


app.get("/api", (req, res) => {
  res.json({message: "AAAAAAAAAAAAAAAAA"});
});

app.get("/api/users", (req, res) => {
  res.json(users);
})

app.get("/api/users/:idx", (req, res) => {
  res.json(users[req.params.idx]);
})

app.put("/api/users/:idx", (req, res) => {
  const idx = req.params.idx
  users[idx] = req.body;
  res.json({status: "ok"});
})

app.delete("/api/users/:idx", (req, res) => {
  const idx = req.params.idx
  users.splice(id, 1)
  res.json({status: "ok"});
})

app.post("/api/users", (req, res) => {
  users.push(req.body)
  res.json({status: "ok"})
})

const server = app.listen(PORT, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
