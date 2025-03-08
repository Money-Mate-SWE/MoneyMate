const User = require("../model/User");

class UserService {
    static async createUser(userData) {
        const newUser = new User(userData);
        return newUser.save();
    }

    static async findUserByUserName(userName) {
        return await User.findOne({ username: userName }).exec();
    }

    static async findUserById(userId) {
        return await
            User.findById(userId).exec();
    }

    static async findUserByEmail(email) {
        return await
            User.findOne({ email: email }).exec();
    }

    static async updateUser(userId, data) {
        return User.findByIdAndUpdate(userId, updatedData).exec();
    }

    static async deleteUser(userId) {
        return User.deleteOne({ _id: userId }).exec();
    }
}

module.exports = UserService;