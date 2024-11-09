import { useState } from "react";
import "./App.css";
import Modal from "./Modal/Modal";
import Navigation from "./Navigation/Navigation";
import Summary from "./Summary/Summary";
import { createPortal } from "react-dom";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="element">
        <Navigation />
        <Summary onClick={() => setModalOpen(true)} />
      </div>
      {modalOpen &&
        createPortal(
          <Modal onClose={handleClick} onComplete={null} onDelete={null} />,
          document.body
        )}
    </>
  );
}

export default App;
