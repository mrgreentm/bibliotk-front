import { Component, effect, EffectRef, inject, OnDestroy } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  imports: [MatCardModule],
  standalone: true
})
export class AlertComponent implements OnDestroy{
  alertService = inject(AlertService);
  message = '';
  changeMessaage: EffectRef = effect(()=>{return});
  constructor(){
    this.changeMessaage = effect(()=> this.message = this.alertService.messageValue());
  }


  ngOnDestroy(): void {
      this.changeMessaage.destroy();
  }
}
