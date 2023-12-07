import model from "./model.js";

export const findAllLikes = () => model.find();
export const createUserLikesEvent = (userId, eventId) =>
  model.create({ user: userId, eventId: eventId });
export const deleteUserLikesEvent = (userId, eventId) =>
  model.deleteOne({ user: userId, eventId: eventId });
export const findUsersThatLikeEvent = (eventId) =>
  model.find({ eventId: eventId }).populate("user");
export const findEventsThatUserLikes = (userId) => model.find({ user: userId });
