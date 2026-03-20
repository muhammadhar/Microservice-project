import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [product, setProduct] = useState({});
  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3020/product')
      .then(res => setProduct(res.data))
      .catch(err => console.error("Error fetching product:", err));
  }, []);

  const placeOrder = () => {
    axios.get('http://localhost:3030/order')
      .then(res => setOrder(res.data))
      .catch(err => console.error("Error placing order:", err));
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">Customer Dashboard</h1>

      {/* Product Card */}
      <h3 className="text-success">Available Product</h3>
      <div className="card mb-3 shadow-sm" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Price: <span className="text-success">${product.price}</span></p>
          <button className="btn btn-primary" onClick={placeOrder}>Place Order</button>
        </div>
      </div>

      {/* Order Confirmation */}
      {order && (
        <div className="card mt-4 shadow-sm border-success">
          <div className="card-body">
            <h5 className="card-title text-danger">Order Confirmed!</h5>
            <p><strong>Order ID:</strong> {order.orderId}</p>
            <p><strong>User:</strong> {order.user.name}</p>
            <p><strong>Product:</strong> {order.product.name}</p>
            <p><strong>Status:</strong> <span className="badge bg-success">{order.status.toUpperCase()}</span></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
