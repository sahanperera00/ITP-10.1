import User from "../model/User.js";

export const createUserService = async (userData) => {
  try {
    const user = User.create(userData);
    return user;
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

export const getUsersService = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error("Error fetching users: " + error.message);
  }
};

export const getUserByIdService = async (id) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error("Error fetching user: " + error.message);
  }
};

export const updateUserService = async (id, userData) => {
  try {
    const user = await User.findByIdAndUpdate(id, userData, { new: true });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error("Error updating user: " + error.message);
  }
};

export const deleteUserService = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error("Error deleting user: " + error.message);
  }
};
