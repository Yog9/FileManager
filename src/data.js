import { v4 as uuidv4 } from "uuid";
const file_manager = [
  {
    id: uuidv4(),
    name: "public",
    files: [
      {
        id: uuidv4(),
        name: "index.html",
      },
      {
        id: uuidv4(),
        name: "manifest.json",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "src",
    files: [
      {
        id: uuidv4(),
        name: "components",
        files: [
          {
            id: uuidv4(),
            name: "App.js",
          },
        ],
      },
      {
        id: uuidv4(),
        name: "index.css",
      },
      {
        id: uuidv4(),
        name: "index.js",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "package.json",
  },
];

export default file_manager;
