const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());

app.get('/order', async (req, res) => {
    try {
        // Correct routes for Docker network
        const userResp = await axios.get('http://user-service:3010/user');
        const productResp = await axios.get('http://product-service:3020/product');

        const order = {
            orderId: 5001,
            user: userResp.data,
            product: productResp.data,
            status: "confirmed"
        };

        res.json(order);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong!", details: err.message });
    }
});

app.listen(3030, () => {
    console.log("Order Service running on port 3030");
});
