import {Publisher, OrderCancelledEvent, Subjects} from "@maguas/common";


export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
}
