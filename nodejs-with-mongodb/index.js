const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const traineesRoutes = require('./routes/traineeRoutes');
app.use("/api/v1/trainees", traineesRoutes); // http://localhost:4000/api/v1/trainees/

app.listen(4000, () => console.log("Server has started in port 4000"));