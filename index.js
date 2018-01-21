const express = require("express");

const app = express();

const server = app.listen(3000, () => {
    console.log("node is listening to PORT:" + server.address().port);
});

const values = [
    {id: "001", name: "name001", value: "hoge"},
    {id: "002", name: "name002", value: "hogehoge"},
    {id: "003", name: "name003", value: "fuga"}
];

app.get("/values", (req, res) => {
    res.json(values);
});

app.get("/values/:id", (req, res) => {
    res.json(values.find((value) => value.id == req.params.id));
});

