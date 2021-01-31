const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();



mongoose.connect("mongodb+srv://admin:admin-games@cluster0.tj3qe.mongodb.net/dbgames?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(require("./routes"));

app.listen(3001);