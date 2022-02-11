import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import studentRoutes from "./routes/student.js";

const app = express();

app.use("/students", studentRoutes);

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());

const mongoUrl = "mongodb+srv://haudhi:10Milyar@cluster0.iatpu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log("running")))
  .catch((err) => console.log(err.message));

// mongoose.set("useFindAndModify", false);
