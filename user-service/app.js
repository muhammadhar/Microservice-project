// ~/microservices-project/user-service/app.js

const express = require('express');
const cors = require('cors'); // ✅ Add this for CORS
const app = express();

// ✅ Enable CORS for all origins
app.use(cors());

app.get('/user', (req, res) => {
    res.json({
        id: 1,
        name: "Haris",
        role: "DevOps Engineer"
    });
});

app.listen(3010, () => {
    console.log("User Service running on port 3010");
});
