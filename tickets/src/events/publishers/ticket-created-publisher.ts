import {Publisher, Subjects, TicketCreatedEvent} from "@maguas/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;

}