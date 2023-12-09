import mongoose from "mongoose";
const Schema = mongoose.Schema(
    {
        eventId: {type: mongoose.Schema.Types.ObjectId, required: true,},
        userId: {type: mongoose.Schema.Types.ObjectId, required: true,},
        noOfTickets: {type: Number, required: true,}
    }, {collection: 'tickets'}
);


export default Schema;