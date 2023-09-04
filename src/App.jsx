import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const faq = [
    {
      id: 1,
      question: "What is the fidelity green rewards program",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsum minus tempore quos similique aperiam doloremque nostrum autem non ducimus, reiciendis consequuntur ullam quaerat recusandae dolorum architecto cupiditate. Recusandae, quos!",
      completed: true,
    },

    {
      id: 2,
      question:
        "is there anycost of participating in fidelity green rewards programme",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsum minus tempore quos similique aperiam doloremque nostrum autem non ducimus, reiciendis consequuntur ullam quaerat recusandae dolorum architecto cupiditate. Recusandae, quos!",
      completed: true,
    },
    {
      id: 3,
      question: "We hope you're happy with our services",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate dolor optio quidem ducimus provident deleniti harum, delectus ab quas dicta laudantium et quasi, at eaque quis voluptates consequuntur dolore.",
      completed: true,
    },

    {
      id: 4,
      question: "Our products and services",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsum minus tempore quos similique aperiam doloremque nostrum autem non ducimus, reiciendis consequuntur ullam quaerat recusandae dolorum architecto cupiditate. Recusandae, quos!",
      completed: true,
    },
  ];

  const [count, setCount] = useState(faq);
  const [showAnswers, setShowAnswers] = useState(faq);

  function toggleAnswer(taskId) {
    const updatedFAQ = count.map((item) =>
      item.id === taskId ? { ...item, completed: !item.completed } : item
    );
    setCount(updatedFAQ);
  }

  return (
    <div style={{ backgroundColor: "white" }}>
      {count.map((item, index) => (
        <article key={item.id}>
          <p
            onClick={() => toggleAnswer(item.id)}
            style={{ color: "green", cursor: "pointer" }}
          >
            {item.question}
          </p>
          {item.completed && <p style={{ color: "black" }}>{item.answer}</p>}
        </article>
      ))}
    </div>
  );
}

export default App;
