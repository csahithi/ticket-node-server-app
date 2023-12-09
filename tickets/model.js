import mongoose from "mongoose";
import ticketSchema from "./schema.js";
const TicketModel = mongoose.model("tickets", ticketSchema);
export default TicketModel;