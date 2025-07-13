import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()
const database = new DatabaseMemory()


// POST
server.post('/videos', (request, reply) => {
    const {title, description, duration} = request.body

    
    database.create({
        // Isso é um short syntax os valores abaixo são equivalentes a title:title
        title,
        description,
        duration,
    })

    return reply.status(201).send()
})

// GET
server.get('/videos', (request) => {
    const search = request.query.search
    const videos = database.list()

    console.log(search)

    return videos
})

server.put('/videos/:id', (request,reply) => {
    const videoId = request.params.id
    const {title, description, duration } = request.body

    const video = database.update(videoId, {
        title,
        description,
        duration,
    })

    return reply.status(204).send()

})

server.delete('/videos/:id', (request,reply) => {
    const videoId = request.params.id
    
    database.delete(videoId)
  
    return reply.status(204).send()

})

server.listen({
    port:3333
})

// parei no 47:52