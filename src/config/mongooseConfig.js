import mongoose from "mongoose";
import dotenv from "dotenv";
import { categorySchema } from "../features/product/category.schema.js";

dotenv.config();

const url = process.env.DB_URL;

export const connectUsingMongoose = async () => {
  try {
    console.log("DB URL:", url);

    await mongoose.connect(url);

    console.log("Mongodb connected using mongoose");
    await addCategories();
  } catch (err) {
    console.log("Error while connecting to db");
    console.log(err.message);
  }
};

async function addCategories() {
  const CategoryModel =
    mongoose.models.Category || mongoose.model("Category", categorySchema);

  const categories = await CategoryModel.find();

  if (categories.length === 0) {
    await CategoryModel.insertMany([
      { name: "Books" },
      { name: "Clothing" },
      { name: "Electronics" },
    ]);
  }
  console.log("Categories added");
}
