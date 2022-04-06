import React, { useState } from "react";
import Modal from "./Modal";
import SideBar from "./SideBar";

const Node = ({
  file,
  level,
  fileExist,
  handleExpand,
  selected,
  handleSubmit,
  idCheck,
  path,
  setIdCheck,
}) => {
  const [openSidePanel, setopenSidePanel] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const showSidePanel = () => {
    setopenSidePanel(true);
    setOpenModal(false);
  };

  const hideSidePanel = () => {
    setopenSidePanel(false);
  };

  const showModal = () => {
    setOpenModal(true);
    setopenSidePanel(false);
  };

  const hideModal = () => {
    setOpenModal(false);
  };

  const buttonContent = selected ? "-" : "+";

  return (
    <>
      <div className="container">
        <div style={{ paddingLeft: `${level * 13}px` }}>
          {fileExist && (
            <button className="buttn" onClick={handleExpand}>
              {buttonContent}
            </button>
          )}
          <span className="fileName" onClick={showSidePanel}>
            {file.name}
          </span>
        </div>

        {openSidePanel ? (
          <SideBar
            hideSidePanel={hideSidePanel}
            showModal={showModal}
            file={file}
            openModal={openModal}
            setIdCheck={setIdCheck}
          />
        ) : null}

        {openModal ? (
          <Modal
            file={file}
            openModal={openModal}
            showModal={showModal}
            hideModal={hideModal}
            showSidePanel={showSidePanel}
            hideSidePanel={hideSidePanel}
            handleSubmit={handleSubmit}
            idCheck={idCheck}
            path={path}
          />
        ) : null}
      </div>
    </>
  );
};

export default Node;
