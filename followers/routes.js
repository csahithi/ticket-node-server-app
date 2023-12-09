import * as dao from './dao.js';
function FollowerRoutes(app) {
// const createFollower = async (req, res) => {
//     const follower = req.body;
//     const insertedFollower = await followersDao.createFollower(follower)
//     res.json(insertedFollower)
// }

// const findAllFollowers = async (req, res) => {
//     const followers = await followersDao.findAllFollowers()
//     res.json(followers)
// }

// const findFollowerById = async (req, res) => {
//     const followerId = req.params['followerId']
//     const follower = await followersDao.findFollowerById(followerId)
//     res.json(follower)
// }

// const findAllFollowersByUserId = async (req, res) => {
//     const UserId = req.params['UserId']
//     const followers = await followersDao.findAllFollowersByUserId(UserId)
//     res.json(followers)
// }

// const findAllFollowingByUserId = async (req, res) => {
//     const UserId = req.params['UserId']
//     console.log(UserId)
//     const following = await followersDao.findAllFollowingByUserId(UserId)
   
//     res.json(following)
// }

// const updateFollower = async (req, res) => {
//     const followerId = req.params['followerId']
//     const follower = req.body
//     const status = await followersDao.updateFollower(followerId, follower)
//     if (status.modifiedCount === 1) {
//         res.sendStatus(200);
//     } else {
//         res.sendStatus(502);
//     }
// }

// const deleteFollower = async (req, res) => {
//     const followerId = req.params['followerId']
//     const status = await followersDao.deleteFollower(followerId)
//     if (status.deletedCount === 1) {
//         res.sendStatus(200);
//     } else {
//         res.sendStatus(502);
//     }
// }


    // app.post('/api/followers', createFollower)
    // app.get('/api/followers', findAllFollowers)
    // app.get('/api/followers/:followerId', findFollowerById)
    // app.get('/api/followers/follower/:UserId', findAllFollowersByUserId)
    // app.get('/api/followers/following/:UserId', findAllFollowingByUserId)
    // app.put('/api/followers/:followerId', updateFollower)
    // app.delete('/api/followers/:followerId', deleteFollower)

    const userFollowsUser = async (req, res) => {
        const follower = req.session["currentUser"]._id;
        const followed = req.params["followed"];
        const follows = await dao.userFollowsUser(follower, followed);
        res.json(follows);
      };
      const userUnfollowsUser = async (req, res) => {
        const follower = req.session["currentUser"]._id;
        const followed = req.params["followed"];
        const status = await dao.userUnfollowsUser(follower, followed);
        res.json(status);
      };
      const findFollowersOfUser = async (req, res) => {
        const followed = req.params["followed"];
        const followers = await dao.findFollowersOfUser(followed);
        res.json(followers);
      };
      const findFollowedUsersByUser = async (req, res) => {
        const follower = req.params["follower"];
        const followed = await dao.findFollowedUsersByUser(follower);
        res.json(followed);
      };

    app.post("/api/users/:followed/follows", userFollowsUser);
    app.delete("/api/users/:followed/follows", userUnfollowsUser);
    app.get("/api/users/:followed/followers", findFollowersOfUser);
    app.get("/api/users/:follower/following", findFollowedUsersByUser);
}
export default FollowerRoutes;