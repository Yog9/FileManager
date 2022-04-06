import React from "react";

const SideBar = ({  hideSidePanel , showModal, file, setIdCheck, openModal }) => {
  const handleModalSubmit = (id) => {
    showModal();
    setIdCheck(id);
    if(openModal){
      hideSidePanel();
    }
  };

  const isFolder = file.hasOwnProperty("files");

  return isFolder ? (
    <div className="sidebar-container">
      <div className="sidebar-item" onClick={() => handleModalSubmit(5)}>
        Edit A folder
      </div>
      <div className="sidebar-item" onClick={() => handleModalSubmit(2)}>
        Create a folder
      </div>
      <div className="sidebar-item" onClick={() => handleModalSubmit(3)}>
        Create a file
      </div>
      <div className="sidebar-item" onClick={() => handleModalSubmit(4)}>
        Delete a folder
      </div>
      <button onClick={hideSidePanel}>x</button>
    </div>
  ) : (
    <div className="sidebar-container">
      <div className="sidebar-item"  onClick={() => handleModalSubmit(5)}> Edit the file </div>
      <div className="sidebar-item"  onClick={() => handleModalSubmit(4)}> Delete the file </div>
      <button onClick={hideSidePanel}>x</button>
    </div>
  );
};

export default SideBar;
