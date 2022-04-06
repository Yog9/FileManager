import React, { useState } from "react";
import Node from "./Node";

const FileList = ({
  file,
  level,
  handleSidePanel,
  handleSubmit,
  idCheck,
  path,
  setIdCheck,
}) => {
  const [selected, setSelected] = useState(false);
  const fileExist = file.files;
  const fileData = () => {
    if (fileExist) {
      let newLevel = level + 1;
      return file.files.map((currFile) => {
        return (
          <FileList
            file={currFile}
            key={currFile.id}
            level={newLevel}
            handleSidePanel={handleSidePanel}
            handleSubmit={handleSubmit}
            idCheck={idCheck}
            setIdCheck={setIdCheck}
            path={[...path, file.id]}
          />
        );
      });
    }
  };

  const handleExpand = () => {
    setSelected(!selected);
  };

  return (
    <>
      <Node
        file={file}
        handleExpand={handleExpand}
        level={level}
        fileExist={fileExist}
        selected={selected}
        handleSubmit={handleSubmit}
        idCheck={idCheck}
        setIdCheck={setIdCheck}
        path={[...path, file.id]}
      />
      {selected && fileData()}
    </>
  );
};

export default FileList;
