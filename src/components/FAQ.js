import React, { useState } from 'react';
import './FAQ.css'; // Import the new CSS

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What is React.js and explain the concept of components in React?",
      answer: "React.js is a JavaScript library for building user interfaces. Components are the building blocks of any React application, and a single app usually consists of multiple components. These components can be thought of as individual, reusable pieces of UI that are isolated from each other."
    },
    {
      question: "What is JSX in React, and how does it work?",
      answer: "JSX is a syntax extension to JavaScript and stands for JavaScript XML. It allows us to write HTML directly within React (inside JavaScript) and makes the code more readable. JSX ultimately gets compiled into JavaScript."
    },
    {
      question: "What is the Virtual DOM, and how does React use it to optimize performance?",
      answer: "The Virtual DOM is an in-memory representation of the actual DOM. React updates the Virtual DOM first and then compares it with the real DOM. Only the differences (deltas) are applied to the real DOM, which makes updates efficient and improves performance."
    },
    {
      question: "Explain the concept of props in React and how they are used.",
      answer: "Props (short for 'properties') are arguments passed into React components. They are used to pass data from parent components to child components. Props are immutable, meaning they cannot be changed by the child component that receives them."
    },
    {
      question: "What is state in React, and how does it differ from props?",
      answer: "State is an internal data store (built into React components) that is used to manage changing data within a component. Unlike props, which are passed down from parent to child, state is local and managed by the component itself."
    },
    {
      question: "Explain the useState hook and provide an example of how it is used.",
      answer: "The useState hook allows you to add state to functional components. Example: const [count, setCount] = useState(0); Here, 'count' is the state variable and 'setCount' is the function to update it."
    },
    {
      question: "What is the purpose of the useEffect hook in React, and when would you use it?",
      answer: "The useEffect hook is used for managing side effects in functional components. It is commonly used to perform actions such as data fetching, directly manipulating the DOM, and setting up subscriptions."
    }
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqItems.map((item, index) => (
          <li key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              {index + 1}. {item.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
