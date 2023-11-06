import express from "express";
import bodyParser from "body-parser";
import userController from "./controllers/user";

//rHXnzinw6LqBBknU - abbadiam
// mongodb+srv://abbadiam:rHXnzinw6LqBBknU@cluster0.gimrkhp.mongodb.net/?retryWrites=true&w=majority

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/user", userController);

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});
