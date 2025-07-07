import { displayOrderSummary } from "./checkout/order-summary.js";
import { displayPaymentSummary } from "./checkout/payment-summary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import "../data/cart-class.js";
// import '../data/backend-practice.js'

Promise.all([
    new Promise((resolve) => {
        loadProducts(() => {
            resolve();
        });
    }),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        })
    })
]).then(() => {
    displayOrderSummary();
    displayPaymentSummary();
})

// new Promise((resolve) => {
//     loadProducts(() => {
//         resolve();
//     });
// }).then(() => {
//     return new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         })
//     })
// }).then(() => {
//     displayOrderSummary();
//     displayPaymentSummary();
// });
    
// callback
// loadProducts(() => {
//     loadCart(() => {
//         displayOrderSummary();
//         displayPaymentSummary();
//     })
// });