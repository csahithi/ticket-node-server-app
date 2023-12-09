import * as ticketsDao from './dao.js';
import * as eventsDao from '../events/dao.js';

function TicketRoutes(app) {
// const createTicket = async (req, res) => {
//     const newTicket = await ticketsDao.createTicket(req.body);
//     res.json(newTicket);
// }

// const createTicket = async (req, res) => {
//     const { eventId, userId, noOfTickets } = req.body;
//     const newTickets = await ticketsDao.createTicket(eventId, userId, noOfTickets);
//     console.log("Node",newTickets);
//     res.json(newTickets);
// }
// const createTicket = async (req, res) => {
//     try {
//       const { eventId, userId, noOfTickets } = req.body;
//       const newTickets = await ticketsDao.createTicket(eventId, userId, noOfTickets);
//       res.json(newTickets);
//     } catch (error) {
//       console.error("Error creating ticket:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   };

const createTicket = async (req, res) => {
    try {
        const { eventId, userId, noOfTickets } = req.body;
        const newTickets = await ticketsDao.createTicket(eventId, userId, noOfTickets);
        console.log("Node routes",newTickets);
        res.json(newTickets);
    } catch (error) {
        console.error("Error creating ticket:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
const createAPITicket = async (req, res) => {
    try {
        const { userId, noOfTickets } = req.body;
        const eventId=new mongoose.Types.ObjectId();
        console.log("Node API id",eventId);
        const newTickets = await ticketsDao.createTicket(eventId, userId, noOfTickets);
        console.log("Node API routes",newTickets);
        res.json(newTickets);
    } catch (error) {
        console.error("Error creating ticket:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
const findAllTickets = async (req, res) => {
    const tickets = await ticketsDao.findAllTickets();
    res.json(tickets);
}

const findTicketById = async (req, res) => {
    const ticketId = req.params['ticketId'];
    const ticketRet = await ticketsDao.findTicketById(ticketId);
    res.json(ticketRet);
}

const findTicketsByEventId = async (req, res) => {
    const eventId = req.params['eventId'];
    const tickets = await ticketsDao.findTicketsByEventId(eventId);
    res.json(tickets);
}

const findTicketsByUserId = async (req, res) => {
    const userId = req.params['userId'];
    const tickets = await ticketsDao.findTicketsByUserId(userId);
    const events = await eventsDao.findAllEvents();
    const results = tickets.map(ticket => {
        const event = events.find(event => event._id.toString() === ticket.eventId.toString());
        return {
            ...ticket,
            event
        }
    })
    res.json(results);
}

const updateTicket = async (req, res) => {
    const ticketId = req.params['ticketId'];
    const ticket = req.body;
    const status = await ticketsDao.updateTicket(ticketId, ticket);
    if (status.modifiedCount === 1) {
        res.sendStatus(200);
    } else {
        res.sendStatus(502);
    }
}

const deleteTicket = async (req, res) => {
    const ticketId = req.params['ticketId'];
    const status = await ticketsDao.deleteTicket(ticketId);
    if (status.deletedCount === 1) {
        res.sendStatus(200);
    } else {
        res.sendStatus(502);
    }
}

    app.post('/api/tickets', createTicket);
    app.post('api/tickets/book',createAPITicket);
    app.get('/api/tickets', findAllTickets);
    app.get('/api/tickets/:ticketId', findTicketById);
    app.get('/api/tickets/event/:eventId', findTicketsByEventId);
    app.get('/api/tickets/user/:userId', findTicketsByUserId);
    app.put('/api/tickets/:ticketId', updateTicket);
    app.delete('/api/tickets/:ticketId', deleteTicket);
}
export default TicketRoutes;
