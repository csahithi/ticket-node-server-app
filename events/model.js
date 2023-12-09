import mongoose from "mongoose";
import EventSchema from "./schema.js";
const EventModel = mongoose.model("EventModel", EventSchema);
export default EventModel;