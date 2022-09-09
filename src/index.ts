import express from "express";
import cors from "cors";
import userRoute from "./routes/user";
import notFound from "./middleware/404";
import handleError from "./middleware/error";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// route
app.use("/api/v1", userRoute);

// middleware
app.use(notFound, handleError);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
