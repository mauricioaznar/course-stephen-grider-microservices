import {Publisher, Subjects, PaymentCreatedEvent} from "@maguas/common";


export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    readonly subject = Subjects.PaymentCreated;

}