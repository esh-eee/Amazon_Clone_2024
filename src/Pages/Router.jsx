import React from "react";
// import { Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Auth from "./Auth/Auth";
import Payment from "./Payment/Payment";
import Orders from "./Order/Orders";
import Cart from "./Cart/Cart";
import Result from "./Results/Result"
import ProductDetail from './ProductDetail/ProductDetail'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";
const stripePromise = loadStripe("pk_test_51Ok4xkDky2zImvJJTA0hULqPzHBNs5lfNkJkEPczbIVNKVYL8LJEsaOowNgJF1s9Y3XBq4qEac8Cb6ZpB8VlSRnP00m1Vgj6K8");
// function Routing() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/auth" element={<Auth />} />
//         <Route path="/payment" element={
          
        
//         <ProtectedRoute
//               msg={"you must log in to pay"}
//               redirect={"/orders"}
//             >
//               <Elements stripe={stripePromise} >
//      <Payment />
//          </Elements>
//             </ProtectedRoute>
          
        
//         } />
//         <Route path="/orders" element={<Orders />} />
//         <Route
//           path="/orders"
//           element={
//             <ProtectedRoute
//               msg={"you must log in to access your orders"}
//               redirect={"/orders"}
//             >
//               <Orders />
//             </ProtectedRoute>
//           }
//         />

//         <Route path="/category/:categoryName" element={<Result />} />
//         <Route path="/products/:productId" element={<ProductDetail />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </Router>
//   );
// }

// export default Routing;










function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"you must log in to pay"}
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
              msg={"you must log in to access your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;