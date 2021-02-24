import {Publisher, OrderCreatedEvent, Subjects} from "@maguas/common";


export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    readonly subject = Subjects.OrderCreated;
}
