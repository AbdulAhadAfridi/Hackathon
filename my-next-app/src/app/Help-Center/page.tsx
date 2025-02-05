"use client";

import { FaPhone } from "react-icons/fa";
import Chatbot from "../components/chat-bot";
import FAQ from "../components/faq";
import { useState } from "react";
import Link from "next/link"; // Import Link

const HelpCenter = () => {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState<{
    [key: string]: boolean;
  }>({});

  const categorizedFaqs: {
    [key: string]: { question: string; answer: string }[]; 
  } = {
    Products: [
      {
        question: "What types of furniture do you offer?",
        answer:
          "We specialize in chairs, tables, beds, and sofas designed to suit every style and need.",
      },
      {
        question: "Are the products customizable?",
        answer:
          "Yes, many of our furniture pieces are customizable. You can choose sizes, colors, and materials.",
      },
      {
        question: "Do you sell outdoor furniture?",
        answer:
          "Currently, our collection focuses on indoor furniture such as chairs, tables, beds, and sofas.",
      },
    ],
    Payments: [
      {
        question: "What payment methods are accepted?",
        answer: "We accept major credit cards, debit cards, and digital wallets like PayPal and Stripe.",
      },
      {
        question: "Is financing available?",
        answer:
          "Yes, we offer financing options through our partners. Please check the payment section during checkout.",
      },
    ],
    Shipping: [
      {
        question: "What are the delivery options?",
        answer:
          "We offer standard and express delivery options. Delivery times vary by location and product availability.",
      },
      {
        question: "Do you provide assembly services?",
        answer:
          "Yes, professional assembly services are available for an additional fee during checkout.",
      },
    ],
    Policies: [
      {
        question: "What is your return policy?",
        answer:
          "You can return furniture within 30 days of delivery. The item must be in its original condition.",
      },
      {
        question: "Do you offer a warranty?",
        answer:
          "Yes, all our furniture comes with a limited warranty. The duration varies by product category.",
      },
    ],
  };

  const handleFeedback = (isPositive: unknown) => {
    alert(
      isPositive ? "Thank you for your feedback!" : "We're sorry to hear that."
    );
  };

  const filteredFaqs: {
    [key: string]: (typeof categorizedFaqs)[keyof typeof categorizedFaqs];
  } = Object.entries(categorizedFaqs).reduce(
    (
      acc: {
        [key: string]: (typeof categorizedFaqs)[keyof typeof categorizedFaqs];
      },
      [category, faqs]
    ) => {
      const filtered = faqs.filter((faq) =>
        faq.question.toLowerCase().includes(search.toLowerCase())
      );
      if (filtered.length > 0) acc[category] = filtered;
      return acc;
    },
    {}
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-500 text-white" : "bg-gray-200 text-black"} p-6`}
    >
      <div className="max-w-4xl mx-auto bg-white dark:bg-black rounded-lg shadow-lg p-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <span className="text-gray-700 dark:text-gray-200">
              Help Center
            </span>
          </nav>
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-[#FBEBB5] text-black dark:bg-white dark:text-black px-4 py-2 rounded-lg shadow-md focus:outline-none"
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>

        <h1 className="text-4xl font-bold text-black dark:text-white mb-6">
          Help Center
        </h1>
        <input
          type="text"
          placeholder="Search for a question..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-6 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBEBB5]"
        />
        {Object.keys(filteredFaqs).length > 0 ? (
          Object.entries(filteredFaqs).map(([category, faqs]) => (
            <div key={category} className="mb-6">
              <h2
                onClick={() =>
                  setVisibleCategories((prev) => ({
                    ...prev,
                    [category]: !prev[category],
                  }))
                }
                className="cursor-pointer text-xl font-semibold text-black dark:text-white"
              >
                {category}
                {visibleCategories[category] ? (
                  <span className="ml-2">▼</span>
                ) : (
                  <span className="ml-2">▶</span>
                )}
              </h2>
              {visibleCategories[category] &&
                faqs.map((faq, index) => (
                  <FAQ
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    onFeedback={handleFeedback}
                  />
                ))}
            </div>
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-400">
            No FAQs match your search query.
          </p>
        )}

        {/* Call to Action */}
        <div className="mt-10 bg-[#FBEBB5] dark:bg-gray-700 p-6 rounded-lg shadow-inner text-center">
          <p className="text-lg font-medium text-black dark:text-white mb-4">
            Still have questions?
          </p>
          <div className="flex justify-center items-center space-x-4">
            <a
              href="tel:+123456789"
              className="flex items-center text-black dark:text-white hover:underline"
            >
              <FaPhone className="text-[30px]" />
              Call Support
            </a>
            <Link
              href="/Contact"
              className="bg-black text-white dark:bg-[#FBEBB5] dark:text-black py-2 px-4 rounded-lg shadow hover:shadow-lg transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Chatbot Integration */}
        <div className="mt-10">
          <Chatbot />
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-[#FBEBB5] to-white animate-pulse opacity-20" />
      </div>
    </div>
  );
};

export default HelpCenter;
