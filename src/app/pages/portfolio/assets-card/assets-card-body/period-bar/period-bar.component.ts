import { Component, Input } from '@angular/core';

@Component({
  selector: 'slab-period-bar',
  styleUrls: ['./period-bar.component.scss'],
  templateUrl: './period-bar.component.html',
})
export class PeriodBarComponent {

  @Input() barData: { prevDate: string; prevValue: number; nextDate: string; nextValue: number };
  @Input() successDelta: boolean;
}
