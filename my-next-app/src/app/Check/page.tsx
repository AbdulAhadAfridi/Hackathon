"use client"

import React , {useState, useEffect} from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { createPaymentIntent } from './action';
import Swal from 'sweetalert2';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

    export default function CheckoutPage() {
        const [clientSecret, setClientSecret] = 
        useState<string | null>(null);

        useEffect(() => {
            createPaymentIntent()
            .then((res: { clientSecret: React.SetStateAction<string | null>; }) => {
                    setClientSecret(res.clientSecret);
            })
        }, []);
        console.log(clientSecret);

        if (!clientSecret) {
            return <div>Loading...</div>;
        }    

        return (
            <div style={{ width: 400, margin: "0 auto" }}>
                <h1>Checkout</h1>
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                <PaymentForm />
                </Elements>
            </div>
        );

        function PaymentForm() {
            const stripe = useStripe();
            const elements = useElements();
            const [isProcessing, setIsProcessing] = useState(false);
            const [errorMessage, setErrorMessage] = useState<string | null>(null);

            const handleSubmit = async (e: React.FormEvent) => {
              e.preventDefault();
          
              if (!stripe || !elements) return;
          
              setIsProcessing(true);
          
              const { error } = await stripe.confirmPayment({
                  elements,
                  redirect: "if_required",
              });
          
              if (error) {
                  setErrorMessage(error.message || "Something went wrong!");
                  Swal.fire({
                      icon: 'error',
                      title: 'Payment Failed',
                      text: error.message || 'Something went wrong!',
                      confirmButtonColor: '#d33',
                  });
              } else {
                  setErrorMessage(null);
                  Swal.fire({
                      icon: 'success',
                      title: 'Payment Successful!',
                      text: 'Thank you for your payment.',
                      confirmButtonColor: '#4CAF50',
                  });
              }
          
              setIsProcessing(false);
          };
          
          return (
              <form onSubmit={handleSubmit}>
                  <PaymentElement />
                  <button
                      type="submit"
                      disabled={!stripe || isProcessing}
                      className="px-40 py-3 mt-8 rounded-xl text-white font-semibold  bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400"
                  >
                      {isProcessing ? "Processing..." : "Pay Now"}
                  </button>
                  {errorMessage && <div style={{ color: "red", marginTop: 8 }}>{errorMessage}</div>}
              </form>
          );
        }
      }


  //   <button
  //   type="submit"
  //   disabled={!stripe || isProcessing}
  //   onClick={handleClick}
  //   className={`px-40 py-3 mt-8 rounded-xl text-white font-semibold transition duration-300 ease-in-out ${
  //     isProcessing
  //       ? 'bg-gray-400 cursor-not-allowed'
  //       : 'bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300'
  //   }`}
  // >
  //   {isProcessing ? "Processing..." : "Pay Now"}
  // </button>
