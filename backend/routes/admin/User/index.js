import express from 'express';
import UserService from '../../../services/UserService.js';

const router = express.Router();

router.post('/newUser', async (req, res) => {
    const username = req.body.username.trim();
    const email = req.body.email.trim();

    if (!username || !email) {
        // req.session.messages.push({
        //     type: "warning",
        //     text: "Please enter username and email!",
        // });
        // return res.redirect("/admin/user");
    }

    try {
        await UserService.createUser({ username, email });
        // req.session.messages.push({
        //     type: "success",
        //     text: "User created"
        // });
    } catch (err) {
        // req.session.messages.push({
        //     type: "danger",
        //     text: "There was an error while saving the User!",
        // });
        console.error(err);
        return res.redirect("/admin/user");
    }
});

export default router;