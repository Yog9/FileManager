import React, { useState } from "react";

const Modal = ({
  hideModal,
  handleSubmit,
  idCheck,
  path,
  openModal,
  hideSidePanel,
}) => {
  const [fileName, setFileName] = useState("");
  const handleOnSubmit = () => {
    if (idCheck === 2 || idCheck === 3 || idCheck === 4 || idCheck == 5 || idCheck == 1 || idCheck) {
      handleSubmit(fileName, path);
      hideSidePanel();
    }
    if (openModal) {
      hideSidePanel();
    }
    hideModal();
  };

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={hideModal}>
          &times;
        </span>
        {(idCheck == 2 || idCheck === 3||idCheck == 6 ||idCheck == 5 )? <input value={fileName} onChange={(e) => setFileName(e.target.value)} />:null}
        <button onClick={handleOnSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Modal;
