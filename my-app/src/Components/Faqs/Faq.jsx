

import React, { useState } from 'react';
import './Faq.css'; // Import your CSS file
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'; // Import icons from react-icons

const Faq = () => {
  // Define FAQ items with questions and answers
  const faqItems = [
    {
      question: 'How do I book a trip?',
      answer:
        'You can book a trip by visiting our website and selecting your desired destination. Follow the booking instructions, choose your dates, and complete the payment process.'
    },
    {
      question: 'Is travel insurance included?',
      answer:
        'Yes, travel insurance is included in all our travel packages. It provides coverage for unexpected events during your trip.'
    },
    {
      question: 'What are the cancellation policies?',
      answer:
        'Our cancellation policies vary depending on the type of trip and package you choose. Please refer to our terms and conditions for detailed information.'
    },
    {
      question: 'How do I choose the right travel destination for me?',
      answer: 
      'Consider your budget interest, desired experiences and the type of environment you enjoy. Research destinations that align with your preference and offer attractions or activities you find appealing'
    }
  ];

  // State to track which FAQ items are open or closed
  const [openItems, setOpenItems] = useState(Array(faqItems.length).fill(false));

  // Function to toggle the visibility of an FAQ item
  const toggleItem = (index) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqItems.map((item, index) => (
          <li className="faq-item" key={index}>
            <button className="faq-question" onClick={() => toggleItem(index)}>
              {item.question} {openItems[index] ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
            </button>
            {openItems[index] && <p className="faq-answer">{item.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Faq;
