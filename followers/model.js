import mongoose from "mongoose";
import followersSchema from "./schema.js";

const FollowersModel = mongoose.model("followers", followersSchema);

export default FollowersModel;