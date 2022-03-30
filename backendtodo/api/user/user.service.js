const UserModel = require('./user.model');

const getAllUsers = async () => {
    const users = await UserModel.find();
    return users;
}

const getUserById = async (id) => {
    const user = await UserModel.findById(id);
    return user;
}

const createUser = async (user) => {
    const newUser = await UserModel.create(user);
    return newUser;
}

const deleteUser = async (id) => {
    const deletedUser = await UserModel.findByIdAndDelete(id);
    return deletedUser;
}

const patchUser = async (id, user) => {
    const updatedUser = await UserModel.findByIdAndUpdate(id, user);
    return updatedUser;
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    patchUser
}
