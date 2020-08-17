import { createConnections } from "typeorm";

createConnections()
  .then(async (connection) => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.log(error);
    console.log("Unable to connect to the database");
  });
