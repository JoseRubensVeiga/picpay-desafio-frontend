import { Observable } from "rxjs";
import { SweetAlertOptions } from "sweetalert2";

export interface INotificationService {
  confirm(options: SweetAlertOptions): Observable<boolean>;

  success(text: string, title?: string): void;

  error(text: string, title?: string): void;

  warning(text: string, title?: string): void;

  info(text: string, title?: string): void;
}
