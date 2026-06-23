import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Orders from './pages/Orders/Orders';
import OrderDetails from './pages/OrderDetails/OrderDetails';
import CreateOrder from './pages/CreateOrder/CreateOrder';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/orders" replace />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/create" element={<CreateOrder />} />
        <Route path="orders/:id" element={<OrderDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
