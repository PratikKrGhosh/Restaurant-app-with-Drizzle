import db from "../config/db.js";
import { User } from "../drizzle/schema.js";

export const createDish = async (req, res) => {
  try {
  } catch (err) {
    return res.status(400).send("Something Went Wrong");
  }
};

export const getDish = async (req, res) => {
  try {
    res.send("dish");
  } catch (err) {
    return res.status(400).send("Something Went Wrong");
  }
};

export const updateDish = async (req, res) => {
  try {
  } catch (err) {
    return res.status(400).send("Something Went Wrong");
  }
};

export const deleteDish = async (req, res) => {
  try {
  } catch (err) {
    return res.status(400).send("Something Went Wrong");
  }
};
