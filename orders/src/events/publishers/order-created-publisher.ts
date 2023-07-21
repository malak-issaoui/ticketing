import { Publisher, OrderCreatedEvent, Subjects } from "@malaktickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
