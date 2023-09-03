import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user";
import createError from "../utils/createError";

export const register = async (req, res, next) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return next(
      createError({
        status: 400,
        message: "name, email and password are required",
      })
    );
  }

  try {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password, salt);

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    await newUser.save();
    return res.status(201).json("New user created");
  } catch (err) {
    console.log(err);
    next(err);
  }
};
