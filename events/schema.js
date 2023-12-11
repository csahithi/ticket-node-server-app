import mongoose from 'mongoose';
const Schema = mongoose.Schema({
    EventName: {type: String, required: true, text: true},
    Date: {type: String, required: true},
    Time: {type: String, required: true},
    Venue: {type: String, required: true},
    Category: {type: String, required: true},
    SellerId:{type: mongoose.Schema.Types.ObjectId, required: true},
}, {collection: 'events'})

export default Schema;