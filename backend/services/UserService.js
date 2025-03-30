import User from "../model/User.js";
import auth0 from "../utils/authUtils.js";

class UserService {
    static async createUser(userData) {
        const newUser = new User(userData);
        return newUser.save();
    }

    static async findUserByUserName(userName) {
        return await User.findOne({ username: userName }).exec();
    }

    static async findUserById(userId) {
        return await User.findById(userId).exec();
    }

    static async findUserByEmail(email) {
        return await User.findOne({ email: email }).exec();
    }

    static async updateUser(userId, updatedData) {
        return User.findByIdAndUpdate(userId, updatedData).exec();
    }

    static async deleteUser(userId) {
        return User.deleteOne({ _id: userId }).exec();
    }

    static async findUserInAuth0ByUsername(username) {
        try {
            const users = await auth0.getUsers({
                q: `username:"${username}"`,
                search_engine: "v3",
            });
            return users.length > 0 ? users[0] : null;
        } catch (err) {
            console.error("Error querying Auth0:", err);
            throw new Error("Failed to query Auth0 for user");
        }
    }

}

export default UserService;