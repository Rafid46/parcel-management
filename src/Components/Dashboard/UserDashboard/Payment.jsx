import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./Checkoutform";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
  return (
    <div className="max-w-screen-md mb-10 mt-10 mx-auto h-screen">
      <p className="text-center font-bold text-4xl">Payment</p>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
