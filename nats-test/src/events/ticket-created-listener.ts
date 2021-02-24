import {Listener} from "../../../common/src/events/base-listener";

import {Message} from "node-nats-streaming";
import {TicketCreatedEvent} from "../../../common/src/events/ticket-created-event";
import {Subjects} from "../../../common/src/events/subjects";


export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
    queueGroupName = 'payments-service';
    readonly subject = Subjects.TicketCreated;

    onMessage(data: TicketCreatedEvent['data'], msg: Message): void {
        console.log('Event data!', data)


        msg.ack()
    }

}