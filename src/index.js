const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose.connect(procces.env.MONGO_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(require("./routes"));

app.listen(process.env.PORT || 3001);