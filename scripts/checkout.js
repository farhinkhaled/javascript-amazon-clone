import { displayOrderSummary } from "./checkout/order-summary.js";
import { displayPaymentSummary } from "./checkout/payment-summary.js";
import { loadProducts } from "../data/products.js";
// import "../data/cart-class.js";
// import '../data/backend-practice.js'

loadProducts(() => {
    displayOrderSummary();
    displayPaymentSummary();
});