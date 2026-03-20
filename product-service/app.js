const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/product', (req, res) => {
    res.json({
        id: 101,
        name: "Laptop",
        price: 1200
    });
});

app.listen(3020, () => {
    console.log("Product Service running on port 3020");
});
