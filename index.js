import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/database.js";
import userRouter from "./routes/UserRoutes.js";
import itemRouter from "./routes/ItemRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "ITP-10.1 API",
    timestamp: new Date().toISOString(),
  });
});

app.use("/user", userRouter);
app.use("/item", itemRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
