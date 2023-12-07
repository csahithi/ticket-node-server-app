import * as dao from "./dao.js";

function LikesRoutes(app) {
  const findAllLikes = async (req, res) => {};
  const createUserLikesEvent = async (req, res) => {
    const userId = req.params.userId;
    const eventId = req.params.eventId;
    const likes = await dao.createUserLikesEvent(userId, eventId);
    res.json(likes);
  };
  const deleteUserLikesEvent = async (req, res) => {};
  const findUsersThatLikeEvent = async (req, res) => {
    const eventId = req.params.eventId;

    const likes = await dao.findUsersThatLikeEvent(eventId);
    res.json(likes);
  };
  const findEventsThatUserLikes = async (req, res) => {
    const userId = req.params.userId;
    const likes = await dao.findEventsThatUserLikes(userId);
    res.json(likes);
  };
  app.get("/api/likes", findAllLikes);
  app.post("/api/users/:userId/likes/:eventId", createUserLikesEvent);
  app.delete("/api/users/:userId/likes/:eventId", deleteUserLikesEvent);
  app.get("/api/likes/:eventId/users", findUsersThatLikeEvent);
  app.get("/api/users/:userId/likes", findEventsThatUserLikes);
}

export default LikesRoutes;
