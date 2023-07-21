import {
    Subjects,
    Publisher,
    ExpirationCompleteEvent,
  } from "@malaktickets/common";
  
  export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
  }
  