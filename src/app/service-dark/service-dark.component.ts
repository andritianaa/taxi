import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-dark',
  templateUrl: './service-dark.component.html',
  styleUrls: ['./service-dark.component.scss']
})
export class ServiceDarkComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() image = '';
  @Input() bookText = '';
}
