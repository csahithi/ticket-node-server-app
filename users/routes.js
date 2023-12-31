import * as dao from "./dao.js";
// let currentUser = null;
function UserRoutes(app) {
    const createUser = async (req, res) => { 
        const user = await dao.createUser(req.body);
        res.json(user);
    };
    const deleteUser = async (req, res) => { 
        const status = await dao.deleteUser(req.params.userId);
        res.json(status);
    };
    const findAllUsers = async (req, res) => { 
        const users = await dao.findAllUsers();
        res.json(users);
    };
    const findUserById = async (req, res) => { 
        const user = await dao.findUserById(req.params.userId);
        res.json(user);
    };
    const updateUser = async (req, res) => {
        const { userId } = req.params;
        const status = await dao.updateUser(userId, req.body);
        const currentUser = await dao.findUserById(userId);
        req.session["currentUser"] = currentUser;
        res.json(status);
    };
    const register = async (req, res) => { 
        const user = await dao.findUserByUsername(req.body.username);
            if (user) {
                res.status(400).json({ message: "Username already taken" });
            }
        const currentUser = await dao.createUser(req.body);
        req.session["currentUser"] = currentUser;
        res.json(currentUser);
    };
    const login = async (req, res) => { 
        const { username, password } = req.body;
        const currentUser = await dao.findUserByCredentials(username, password);
        req.session["currentUser"] = currentUser;
        res.json(currentUser);
    };
    const logout = (req, res) => {
        // currentUser = null;
        req.session.destroy();
        res.json(200);
    };
    const profile = async (req, res) => {
        res.json(req.session["currentUser"]);
    };
    const updateOtherUser = async (req, res) => {
        const { userId } = req.params;
        const status = await dao.updateUser(userId, req.body);
        res.json(status);
    };
    app.post("/api/users", createUser);
    app.get("/api/users", findAllUsers);
    app.get("/api/users/:userId", findUserById);
    app.put("/api/users/:userId", updateUser);
    app.put("/api/users/other/:userId", updateOtherUser);
    app.delete("/api/users/:userId", deleteUser);
    app.post("/api/users/register", register);
    app.post("/api/users/login", login);
    app.post("/api/users/logout", logout);
    app.post("/api/users/profile", profile);
}
export default UserRoutes;