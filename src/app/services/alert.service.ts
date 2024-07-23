import { Injectable, signal, Signal } from '@angular/core';
import { timer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlertService {
  private message = signal<string>('')

  sendMessage(alert: string): void {
    this.updateAlertMessage(alert);
    this.hiddenAlert();
  }

  get messageValue(): Signal<string> {
    return this.message;
  }
  private hiddenAlert(): void {
    timer(3000).subscribe(()=>this.message.update(()=>''))
  }
  private updateAlertMessage(message: string): void {
    this.message.update(() => message);
  }
}
