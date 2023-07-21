import { Publisher, Subjects, TicketUpdatedEvent } from "@malaktickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
