import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import faqsData from "../../Data/faqsData";
import "./Faqs.css";

function Faqs() {
  const [showanswer, setShowanswer] = useState(faqsData);

  const [icon, setIcon] = useState(true);

  const toggleShowAnswer = (index) => {
    setShowanswer(
      showanswer.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
          setIcon(!icon);
        } else {
          faq.open = false;
          setIcon(true);
        }

        return faq;
      })
    );
  };

  return (
    <div className="faqs">
      <h2>Frequently asked question</h2>
      <div className="container faqs__container">
        {faqsData.map((faq, i) => {
          const open = faq.open ? "show" : "";
          return (
            <div
              key={i}
              className={`faq ${open}`}
              onClick={() => {
                toggleShowAnswer(i);
              }}
            >
              {icon ? (
                <div className="faq__icon">{faq.icon}</div>
              ) : (
                <div className="faq__icon">
                  <RemoveIcon />
                </div>
              )}
              <div className="question__answer">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faqs;
