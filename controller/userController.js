import db from "../config/db.js";
import { User } from "../drizzle/schema.js";

export const createUser = async (req, res) => {
  try {
  } catch (err) {
    return res.status(400).send("Something Went Wrong");
  }
};

export const getUser = async (req, res) => {
  try {
    res.send("user");
  } catch (err) {
    return res.status(400).send("Something Went Wrong");
  }
};

export const updateUser = async (req, res) => {
  try {
  } catch (err) {
    return res.status(400).send("Something Went Wrong");
  }
};

export const deleteUser = async (req, res) => {
  try {
  } catch (err) {
    return res.status(400).send("Something Went Wrong");
  }
};
