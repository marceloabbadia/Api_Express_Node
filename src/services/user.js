import databaseConnecttions from "../utils/database";
import User from "../models/user";

export const listUsers = async () => {
  await databaseConnecttions();
  const users = await User.find();
  return users;
};

export const createUser = async (user) => {
  await databaseConnecttions();
  const createdUser = await User.create(user);
  return createdUser;
};

export const deleteUser = async (id) => {
  await databaseConnecttions();
  await User.findByIdAndDelete(id);
};

export const updateUser = async (id, newBody) => {
  await databaseConnecttions();
  await User.findByIdAndUpdate(id, newBody);
};
