import {Publisher, Subjects, TicketUpdatedEvent} from "@maguas/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;

}