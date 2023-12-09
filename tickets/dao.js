import mongoose from "mongoose";
import TicketModel from "./model.js";


// export const createTicket = async (eventId, userId, noOfTickets) => {
//     const newTicket = {
//         eventId,
//         userId,
//         noOfTickets
//     };
//     return await TicketModel.create(newTicket);
// };
export const createTicket = async (eventId,userId,noOfTickets) => {
    const nTicket = {
                eventId,
                userId,
                noOfTickets
            };
    console.log("Node dao",nTicket);
    return await TicketModel.create(nTicket);
};

export const findAllTickets = async () => await TicketModel.find();

export const findTicketById = async (ticketId) => await TicketModel.findById(ticketId);

export const findTicketsByEventId = async (eventId) => await TicketModel.find({eventId: eventId});

export const findTicketsByUserId = async (userId) => await TicketModel.find({userId: userId});

export const updateTicket = async (ticketId, ticket) => await TicketModel.updateOne({_id: ticketId}, {$set: ticket});

export const deleteTicket = async (ticketId) => await TicketModel.deleteOne({_id: ticketId});