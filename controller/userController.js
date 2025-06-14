import { eq } from "drizzle-orm";
import db from "../config/db.js";
import { User } from "../drizzle/schema.js";

export const createUser = async (req, res) => {
  try {
    const newUser = await db.insert(User).values(req.body);
    return res.status(201).send(newUser);
  } catch (err) {
    return res.status(400).send("Something Went Wrong");
  }
};

export const getUser = async (req, res) => {
  try {
    const { name, designation } = req.query;
    if (name) {
      const userData = await db.select().from(User).where(eq(User.name, name));
      return res.status(200).json(userData);
    }

    if (designation) {
      const userData = await db
        .select()
        .from(User)
        .where(eq(User.designation, designation));
      return res.status(200).json(userData);
    }

    const userData = await db.select().from(User);
    return res.status(200).json(userData);
  } catch (err) {
    return res.status(400).send("Something Went Wrong");
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await db
      .update(User)
      .set(req.body)
      .where(eq(User.id, req.params.id));
    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(400).send("Something Went Wrong");
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await db.delete(User).where(eq(User.id, req.params.id));
    return res.status(200).json(deletedUser);
  } catch (err) {
    return res.status(400).send("Something Went Wrong");
  }
};
