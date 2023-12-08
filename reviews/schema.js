import mongoose from "mongoose";

const Schema = new mongoose.Schema(
    {
        eventId: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        review: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        }
       
    }, {collection: 'reviews'});

export default Schema;