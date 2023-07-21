import { Publisher, Subjects, TicketCreatedEvent } from "@malaktickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
