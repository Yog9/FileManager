import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import FileList from "./components/FileList";
import file_manager from "./data";
import _ from "lodash";

const App = () => {
  const [fileManager, setfileManager] = useState(file_manager);
  const [idCheck, setIdCheck] = useState();

  const handleSubmit = (data, path) => {
    if (idCheck === 2) {
      const newFolder = {
        id: uuidv4(),
        name: data,
        files: [],
      };
      addFolderOrFile(newFolder, path);
    } else if (idCheck === 3) {
      const newFile = {
        id: uuidv4(),
        name: data,
      };
      addFolderOrFile(newFile, path);
    } else if (idCheck === 4) {
      deleteFolderOrFile(path);
    } else if (idCheck === 5) {
      editAFolderOrFile(data, path);
    }
  };

  const editAFolderOrFile = (data, path) => {
    let newfileManager = _.cloneDeep(fileManager);
    if (path.length == 1) {
      let searchSpace = newfileManager.map((fileData) => {
        return fileData.id == path[0]
          ? { id: fileData.id, name: data, files: fileData.files }
          : fileData;
      });
      setfileManager(searchSpace);
    } else {
      let searchSpace = newfileManager.filter((fileData) => {
        return fileData.id == path[0];
      });
      for (let i = 1; i < path.length; i++) {
        searchSpace = searchSpace[0].files.filter((file) => {
          return file.id == path[i];
        });
      }
      searchSpace[0].name = data;
      setfileManager(newfileManager);
    }
  };

  const deleteFolderOrFile = (path) => {
    let newfileManager = _.cloneDeep(fileManager);
    if (path.length == 1) {
      newfileManager = newfileManager.filter((fileData) => {
        return fileData.id !== path[0];
      });
    } else {
      let searchSpace = newfileManager.filter((fileData) => {
        return fileData.id == path[0];
      });
      for (let i = 1; i < path.length - 1; i++) {
        searchSpace = searchSpace[0].files.filter(
          (file) => file.id === path[i]
        );
      }
      searchSpace[0].files = searchSpace[0].files.filter((file) => {
        return file.id != path[path.length - 1];
      });
    }
    setfileManager(newfileManager);
  };

  const addFolderOrFile = (newFolder, path) => {
    let newfileManager = _.cloneDeep(fileManager);
    if (path.length) {
      let searchSpace = newfileManager.filter((fileData) => {
        return fileData.id == path[0];
      });
      for (let i = 1; i < path.length; i++) {
        searchSpace = searchSpace[0].files.filter((file) => {
          return file.id == path[i];
        });
      }
      searchSpace[0].files = [...searchSpace[0].files, newFolder];
      setfileManager(newfileManager);
    } else {
      let searchSpace = newfileManager.filter((fileData) => {
        return fileData.id == path.id;
      });
      searchSpace[0].files = [...searchSpace[0].files, newFolder];
      setfileManager(newfileManager);
    }
  };

  const file_data = fileManager.map((file) => (
    <FileList
      file={file}
      key={file.id}
      level={0}
      handleSubmit={handleSubmit}
      idCheck={idCheck}
      setIdCheck={setIdCheck}
      path={[]}
    />
  ));

  return <>{file_data}</>;
};

export default App;
