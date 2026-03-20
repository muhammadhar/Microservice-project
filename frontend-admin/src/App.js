import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3010/user').then(res => setUsers([res.data]));
    axios.get('http://localhost:3020/product').then(res => setProducts([res.data]));
    axios.get('http://localhost:3030/order').then(res => setOrders([res.data]));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-primary text-center">Admin Dashboard</h1>

      {/* Users Table */}
      <h3 className="text-success">Users</h3>
      <table className="table table-bordered table-hover mb-4">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <span className="badge bg-info text-dark">{user.role}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Products Table */}
      <h3 className="text-warning">Products</h3>
      <table className="table table-bordered table-hover mb-4">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td className="text-success">${p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Orders Table */}
      <h3 className="text-danger">Orders</h3>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Product</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(o => (
            <tr key={o.orderId}>
              <td>{o.orderId}</td>
              <td>{o.user.name}</td>
              <td>{o.product.name}</td>
              <td>
                <span className={`badge ${o.status === 'confirmed' ? 'bg-success' : 'bg-secondary'}`}>
                  {o.status.toUpperCase()}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
