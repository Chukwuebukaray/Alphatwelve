import { useState } from "react";
import "./App.css";
import Modal from "./Modal/Modal";
import Navigation from "./Navigation/Navigation";
import Summary from "./Summary/Summary";

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
      {modalOpen && (
        <Modal
          onClose={handleClick}
          onComplete={null}
          onDelete={null}
          onEdit={null}
        />
      )}
    </>
  );
}

export default App;
