import mongoose from "mongoose";
const schema = mongoose.Schema({
    followerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    followingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    }
}, {collection: "followers"});

export default schema;
