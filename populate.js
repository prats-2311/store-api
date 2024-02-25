const products = require("./products.json");
require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("db connected");
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
