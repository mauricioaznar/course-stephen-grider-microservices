import {Publisher, Subjects, ExpirationCompleteEvent} from "@maguas/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    readonly subject = Subjects.ExpirationComplete;


}