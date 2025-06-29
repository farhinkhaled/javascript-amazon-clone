import {cart} from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import {getDeliveryOption} from '../../data/deliveryOption.js'
import { formatCurrency } from '../utils/money.js';

export function displayPaymentSummary(){
    let productPriceCents = 0;
    let shippingPriceCents = 0;
    let totalItems = 0;

    cart.forEach((cartItem) => {
        let product = getProduct(cartItem.productId);
        productPriceCents += product.priceCents * cartItem.quantity;
        totalItems += cartItem.quantity;
        
        let deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        
        shippingPriceCents += deliveryOption.priceCents;
        
    })

    let totalBeforeTaXCents = productPriceCents + shippingPriceCents;
    let taxCents = totalBeforeTaXCents * 0.1;
    let totalAmountCents = totalBeforeTaXCents + taxCents;

    let paymentSummaryHTML = 
    `
        <div class="payment-summary-title">
            Order Summary
        </div>

        <div class="payment-summary-row">
            <div>Items (${totalItems}):</div>
            <div class="payment-summary-money">
                $${formatCurrency(productPriceCents)}
            </div>
        </div>

        <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">
                $${formatCurrency(shippingPriceCents)}
            </div>
        </div>

        <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">
                $${formatCurrency(totalBeforeTaXCents)}
            </div>
        </div>

        <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">
                $${formatCurrency(taxCents)}
            </div>
        </div>

        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">
                $${formatCurrency(totalAmountCents)}
            </div>
        </div>

        <button class="place-order-button button-primary">
            Place your order
        </button>
    `;

    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}