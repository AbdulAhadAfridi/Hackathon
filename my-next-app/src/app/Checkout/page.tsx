"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCartItems } from "@/app/actions/action";
import Link from "next/link";
import { CgChevronRight } from "react-icons/cg";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";
import { Product } from "@/types/product";
import Feature from "../components/feature";
import PaymentStripe from "../components/paymentStripe";
import { useRouter } from "next/navigation";


export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    address: "",
    city: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    country: false,
    address: false,
    city: false,
    province: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.stockLevel,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      country: !formValues.country,
      address: !formValues.address,
      city: !formValues.city,
      province: !formValues.province,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };
  const router = useRouter();

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      Swal.fire("Error!", "Please fill in all the required fields.", "error");

      return;
    }

    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const orderData = {
          _type: "order",
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          companyName: formValues.companyName,
          country: formValues.country,
          address: formValues.address,
          city: formValues.city,
          province: formValues.province,
          zipCode: formValues.zipCode,
          phone: formValues.phone,
          email: formValues.email,
          cartItems: cartItems.map((item) => ({
            _type: "reference",
            _ref: item._id,
          })),
          subtotal: subtotal,
          discount: discount,
          total: total,
          orderDate: new Date().toISOString(),
        };

        try {
          await client.create(orderData);
          localStorage.removeItem("cartItems");
          localStorage.removeItem("appliedDiscount");

        
         Swal.fire({
          title: "Success!",
          text: "Your order has been successfully processed!",
          icon: "success",
          confirmButtonText: "Go to Shop",
        }).then(() => {
          router.push("/Shop"); // Redirect to the Shop page
        });        }
         catch (error) {
          console.error("Error creating order:", error);
          Swal.fire("Error!", "There was an error processing your order.", "error");
        }
      }
    });
  };

  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <>
    <section className="relative max-w-screen-2xl mx-auto">
        {/* Background Image */}
        <Image
          src="/shopimg1.png"
          alt="Background"
          width={1440}
          height={316}
          className="w-full h-[340px] object-cover"
        />

        {/* Slightly Left-Aligned Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {/* Icon */}
          <div>
            <Image
              src="/logo.png"
              alt="Icon"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>

          {/* Section Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-6">
            Checkout
          </h2>

          {/* Breadcrumb */}
          <div className="text-black text-sm flex items-center gap-x-2 mb-20">
             <Link
              href="/"
              className="text-black text-lg font-semibold"
            >
              Home
            </Link>
            <CgChevronRight className="text-black font-bold text-lg" />
            <span className="text-lg">checkout</span>
          </div>
        </div>
      </section>

      <div className="max-w-screen-2xl mx-auto bg-white">
        <div className="container mx-auto p-4 md:p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Billing Details Section */}
            <div className="mt-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[Poppins]">
                Billing details
              </h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-6">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block font-medium text-gray-900 text-lg mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First Name Here ..."
                      value={formValues.firstName}
                      onChange={handleInputChange}
                      className="block w-[211px] h-[75] border border-gray-300 rounded-[10px] shadow-sm px-4 py-2"
                    />
                    {formErrors.firstName && (
                      <p className="text-red-500 text-sm">
                        First name is required
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block font-medium text-gray-900 text-lg mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last Name Here ..."
                      value={formValues.lastName}
                      onChange={handleInputChange}
                      className="block w-[211px] h-[75] border border-gray-300 rounded-[10px] shadow-sm px-4 py-2"
                    />
                    {formErrors.firstName && (
                      <p className="text-red-500 text-sm">
                        {" "}
                        Last name is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="company-name"
                    className="block font-medium text-gray-900 text-lg mb-2"
                  >
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    placeholder="Company Name Here ..."
                    value={formValues.companyName}
                    onChange={handleInputChange}
                    className="block w-[453px] h-[75] border border-gray-300 rounded-[10px] shadow-sm px-4 py-2"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="country"
                    className="block font-medium text-gray-900 text-lg mb-2"
                  >
                    Country / Region
                  </label>
                  <input
                    type="text"
                    id="country"
                    value={formValues.country}
                    placeholder="Country Here ..."
                    onChange={handleInputChange}
                    className="block w-[453px] h-[75] border border-gray-300 rounded-[10px] shadow-sm px-4 py-2"
                  ></input>
                  {formErrors.country && (
                    <p className="text-red-500 text-sm">Country is required</p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="street-address"
                    className="block font-medium text-gray-900 text-lg mb-2"
                  >
                    Street address
                  </label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Address Here ..."
                    value={formValues.address}
                    onChange={handleInputChange}
                    className="block w-[453px] h-[75] border border-gray-300 rounded-[10px] shadow-sm px-4 py-2"
                  />
                  {formErrors.address && (
                    <p className="text-red-500 text-sm">Address is required</p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="city"
                    className="block font-medium text-gray-900 text-lg mb-2"
                  >
                    Town / City
                  </label>
                  <input
                    type="text"
                    id="city"
                    placeholder="City Here ..."
                    value={formValues.city}
                    onChange={handleInputChange}
                    className="block w-[453px] h-[75] border border-gray-300 rounded-[10px] shadow-sm px-4 py-2"
                  />
                  {formErrors.city && (
                    <p className="text-red-500 text-sm">City is required</p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="province"
                    className="block font-medium text-gray-900 text-lg mb-2"
                  >
                    Province
                  </label>
                  <input
                    type="text"
                    id="province"
                    placeholder="Province Here ..."
                    value={formValues.province}
                    onChange={handleInputChange}
                    className="block w-[453px] h-[75] border border-gray-300 rounded-[10px] shadow-sm px-4 py-2"
                  />
                  {formErrors.province && (
                    <p className="text-red-500 text-sm">Province is required</p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="zip-code"
                    className="block font-medium text-gray-900 text-lg mb-2"
                  >
                    ZIP code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    placeholder="ZIP Code Here ..."
                    value={formValues.zipCode}
                    onChange={handleInputChange}
                    className="block w-[453px] h-[75] border border-gray-300 rounded-[10px] shadow-sm px-4 py-2"
                  />
                  {formErrors.zipCode && (
                    <p className="text-red-500 text-sm">ZIP code is required</p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="Phone"
                    className="block font-medium text-gray-900 text-lg mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Phone Number Here ..."
                    value={formValues.phone}
                    onChange={handleInputChange}
                    className="block w-[453px] h-[75] border border-gray-300 rounded-[10px] shadow-sm px-4 py-2"
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm">Phone is required</p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="Email"
                    className="block font-medium text-gray-900 text-lg mb-2"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Email Address Here ..."
                    value={formValues.email}
                    onChange={handleInputChange}
                    className="block w-[453px] h-[75] border border-gray-300 rounded-[10px] shadow-sm px-4 py-2"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm">Email is required</p>
                  )}
                </div>
              </form>
            </div>

            {/* Order Summary Section */}
            <div className="w-full lg:w-[608px] mt-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Order Summary
              </h2>

              {/* Product List */}
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center gap-4 py-3 border-b"
                  >
                    <div className="w-16 h-16 rounded overflow-hidden">
                      {item.imagePath && (
                        <Image
                          src={item.imagePath}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        Quantity: {item.stockLevel}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-800">
                      ${item.price * item.stockLevel}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">Your cart is empty.</p>
              )}

              {/* Summary Details */}
              <div className="text-right pt-6 space-y-2">
                <p className="text-md">
                  Subtotal: <span className="font-medium"> ${subtotal}</span>
                </p>
                <p className="text-sm">
                  Discount:{" "}
                  <span className="font-medium text-red-600">${discount}</span>
                </p>
                <p className="text-xl md:text-2xl font-semibold text-yellow-800">
                  Total: ${total.toFixed(2)}
                </p>
              </div>
              <hr className="my-10" />

           <div>
                <div className="mb-6">
                <div>
      
      {/* Online Transfer Option */}
      <input
        type="radio"
        id="bank-transfer"
        name="payment-method"
        value="bank-transfer"
        className="mr-2 mb-10"
        onChange={(e) => setPaymentMethod(e.target.value)}
      />
      <label htmlFor="bank-transfer">Online Transfer</label>

      {/* Show PaymentStripe component only if "Online Transfer" is selected */}
      {paymentMethod === "bank-transfer" && <PaymentStripe />}
      </div>

      {/* Cash on Delivery Option */}
      <input
        type="radio"
        id="cash-on-delivery"
        name="payment-method"
        value="cash-on-delivery"
        className="mr-2 mt-10"
        onChange={(e) => setPaymentMethod(e.target.value)}
      />
      <label htmlFor="cash-on-delivery">Cash on Delivery</label>

    
                <div className="text-center">
                  <button
                    onClick={handlePlaceOrder}
                    className="font-semibold w-[318px] h-[64px] bg-black text-yellow-300 hover:bg-gray-900 border-[3px] shadow-lg  border-yellow-300  py-2 px-4 rounded-[10px] mt-10 "
                  >
                    Place order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        
      

      <Feature />
      </>
  );

  }





