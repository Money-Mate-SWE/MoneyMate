import express from 'express';
import UserService from '../../../services/UserService.js';

const router = express.Router();

router.post('/newUser', async (req, res) => {
    const username = req.body.username.trim();
    const email = req.body.email.trim();

    if (!username || !email) {
        return res.status(400).json({
            message: "Please enter username and email!"
        });
        // req.session.messages.push({
        //     type: "warning",
        //     text: "Please enter username and email!",
        // });
        // return res.redirect("/admin/user");
    }

    if (await UserService.findUserByUserName(username) || await UserService.findUserByEmail(email)) {
        return res.status(409).json({
            message: "Username or email you entered already exists!"
        });
    }

    try {
        await UserService.createUser({ username, email });

        // req.session.messages.push({
        //     type: "warning",
        //     text: "User already exists!",
        // });
        // return res.redirect("/admin/user");

        return res.status(201).json({
            message: "User created",
            username,
            email
        });
        // req.session.messages.push({
        //     type: "success",
        //     text: "User created"
        // });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while saving the User!"
        });
        // req.session.messages.push({
        //     type: "danger",
        //     text: "There was an error while saving the User!",
        // });
        // return res.redirect("/admin/user");
    }
});

router.get('/getUser/:username', async (req, res) => {
    const username = req.params.username.trim();

    if (!username) {
        return res.status(400).json({
            message: "Please enter username!"
        });
    }

    try {
        const user = await UserService.findUserByUserName(username);
        if (!user) {
            return res.status(404).json({
                message: "User not found!"
            });
        }
        return res.status(200).json(user);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while fetching the User!"
        });
    }
});

router.get('/getUserById/:userId', async (req, res) => {
    const userId = req.params.userId.trim();

    if (!userId) {
        return res.status(400).json({
            message: "Please enter userId!"
        });
    }

    try {
        const user = await UserService.findUserById(userId);
        if (!user) {
            return res.status(404).json({
                message: "User not found!"
            });
        }
        return res.status(200).json(user);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while fetching the User!"
        });
    }
}
);

router.get('/getUserByEmail/:email', async (req, res) => {
    const email = req.params.email.trim();

    if (!email) {
        return res.status(400).json({
            message: "Please enter email!"
        });
    }

    try {
        const user = await UserService.findUserByEmail(email);
        if (!user) {
            return res.status(404).json({
                message: "User not found!"
            });
        }
        return res.status(200).json(user);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while fetching the User!"
        });
    }
}
);

router.put('/updateUser/:userId', async (req, res) => {
    const userId = req.params.userId.trim();
    const username = req.body.username.trim();
    const email = req.body.email.trim();

    if (!username || !email) {
        return res.status(400).json({
            message: "Please enter username and email!"
        });
    }

    if (!await UserService.findUserById(userId)) {
        return res.status(404).json({
            message: "User not found!"
        });
    }

    try {
        await UserService.updateUser(userId, { username, email });
        return res.status(200).json({
            message: "User updated"
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while updating the User!"
        });
    }
});

export default router;