"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "What is this app intended for?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        This app is designed to help reduce anxiety by guiding you through calming breathing exercises. It is an easy-to-use tool for managing stress and promoting mindfulness.
      </div>
    ),
  },
  {
    question: "How do the breathing exercises work?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        The app cycles through phases such as Inhale, Hold, and Exhale. Each phase has a set duration to help regulate your breathing, calm your mind, and reduce stress.
      </div>
    ),
  },
  {
    question: "Can I customize my breathing sessions?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Currently, the breathing sessions follow a fixed cycle for optimal results. Future updates may include customizable options to suit your personal relaxation needs.
      </div>
    ),
  },
  {
    question: "Is the app suitable for all ages?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Yes, the app is designed with gentle exercises that are beneficial for users of all ages. However, if you have specific health concerns, please consult with your healthcare provider.
      </div>
    ),
  },
  {
    question: "Do I need an internet connection?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        No, once the app is installed, you can use it offline. This ensures you can practice your breathing exercises anytime, anywhere.
      </div>
    ),
  },
  {
    question: "I have another question",
    answer: (
      <div className="space-y-2 leading-relaxed">
        If you have any additional questions or need further support, feel free to contact our team by email.
      </div>
    ),
  },
];


const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
