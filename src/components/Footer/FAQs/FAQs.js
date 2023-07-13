import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQs.css";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
      <div className="faq-question" onClick={toggle}>
        <h3>{question}</h3>
        <button className="toggle-button">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQContainer = () => {
  return (
    <div className="faq-container">
      <FaqItem
        question="What are the dog park bar's hours?"
        answer="We are open from 12pm to 10pm, Monday to Friday, and from 11am to 10pm on Saturdays. On Sundays, we open at 11am and close at 9pm."
      />
      <FaqItem
        question="Can I bring my own food?"
        answer="Yes, you can bring your own food to the dog park bar. However, outside drinks are not allowed. We provide water for dogs and humans."
      />
      <FaqItem
        question="Are there any breed restrictions?"
        answer="No, all dog breeds are welcome at the dog park bar."
      />
    </div>
  );
};

const FAQs = () => {
  return (
    <div className="faq-wrapper">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <FAQContainer />
    </div>
  );
};

export default FAQs;
