import * as eventsDao from './dao.js';

function EventRoutes(app) {
    
const createEvent = async (req, res) => {
    const event = req.body;
    const insertedEvent = await eventsDao.createEvent(event)
    res.json(insertedEvent)
}

const findAllEvents = async (req, res) => {
    const events = await eventsDao.findAllEvents()
    res.json(events)
}

const findEventById = async (req, res) => {
    const eventId = req.params['eventId']
    const event = await eventsDao.findEventById(eventId)
    res.json(event)
}

const updateEvent = async (req, res) => {
    const eventId = req.params['eventId']
    const event = req.body
    const status = await eventsDao.updateEvent(eventId, event)
    if (status.modifiedCount === 1) {
        res.sendStatus(200);
    } else {
        res.sendStatus(502);
    }
}

const deleteEvent = async (req, res) => {
    const eventId = req.params['eventId']
    const status = await eventsDao.deleteEvent(eventId)
    if (status.deletedCount === 1) {
        res.sendStatus(200);
    } else {
        res.sendStatus(502);
    }
}

const searchEvents = async (req, res) => {
    const query = req.query.Ename
    const events = await eventsDao.searchEvents(query)
    res.json(events)
}

    app.get('/api/search', searchEvents)
    app.post('/api/events', createEvent)
    app.get('/api/events', findAllEvents)
    app.get('/api/events/:eventId', findEventById)
    app.put('/api/events/:eventId', updateEvent)
    app.delete('/api/events/:eventId', deleteEvent)
}
export default EventRoutes;