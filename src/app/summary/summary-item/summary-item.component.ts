import { Component, input } from '@angular/core';

@Component({
  selector: 'app-summary-item',
  standalone: false,
  templateUrl: './summary-item.component.html',
  styleUrl: './summary-item.component.scss'
})
export class SummaryItemComponent {
  header = input('');
  subheader = input('')
  color = input('')
  icon = input('')
}
