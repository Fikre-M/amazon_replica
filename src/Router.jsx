import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Auth from './Pages/Auth/Auth'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import './index.css'



const stripePromise = loadStripe("pk_test_51QucPvFYx4rny2LOsSZ6uBJJDZXJEj82nGWumRCSP1vxXqDbGuZPeOrah709mNfZJGdTbjd3yagQDmYJrDvzj9Ej00VoOgE4do");

function Routere() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          
          <Route
            path="/payments"
            element={
              <ProtectedRoute
                msg={"You need to login to make a payment"}
                redirect={"/payments"}
              >
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute
                msg={"You need to login to view your orders"} 
                redirect={"/orders"}
              >
                <Orders />

              </ProtectedRoute>
            }
          />
          
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    );
}

export default Routere
