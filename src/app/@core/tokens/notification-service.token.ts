import { inject, InjectionToken } from "@angular/core";
import { INotificationService } from "../interfaces/INotificationService";
import { NotificationService } from "../services/notification";

export const NOTIFICATION_SERVICE = new InjectionToken<INotificationService>(
  "notification.service",
  {
    providedIn: "root",
    factory: () => inject(NotificationService),
  }
);
