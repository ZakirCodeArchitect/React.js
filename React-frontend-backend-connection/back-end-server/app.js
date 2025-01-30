import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();
app.use(cors());
app.use(express.json())

const uri =
  "mongodb+srv://rashidstanikzai:bookbook@cluster0.yy0rg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

let studentsCollection;

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db("test");
    studentsCollection = db.collection("students");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

app.get("/", (req, res) => {
  res.end("There is nothing in this endpoint.");
});

app.get("/students", async (req, res) => {
  try {
    const students = await studentsCollection.find({}).toArray();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred in the server.");
  }
});

// New Endpoint for Adding Records to the Database
app.post("/students", async (req, res) => {
  try {
    const newData = req.body;
    console.log(newData)

    const result = await studentsCollection.insertOne(newData);

    res.status(201).json({
      success: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "An error occurred while saving the data." });
  }
});

connectToDatabase()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch((e) => {
    console.log("Error connecting db", e);
  });