import nats, {Message, Stan} from 'node-nats-streaming'
import {randomBytes} from "crypto"
import {TicketCreatedListener} from "./events/ticket-created-listener";


console.clear()

const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
    url: 'http://localhost:4222'
})



stan.on('connect', () => {
    console.log('Listener connected to nats')

    stan.on('close', () => {
        console.log('NATS connection cosed')
        process.exit()
    })

    const listener = new TicketCreatedListener(stan)
    listener.listen()

    // const subscription = stan.subscribe('ticket:created', stan.subscriptionOptions())
    // subscription.on('message', (msg) => {
    //     console.log(msg)
    // })
})

process.on('SIGINT', () => stan.close())
process.on('SIGTERM', () => stan.close())

