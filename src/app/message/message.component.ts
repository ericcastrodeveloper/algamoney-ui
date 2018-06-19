import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
  <div class="ui-message ui-messages-error" *ngIf="temErro()">
  {{text}}
</div>
  `,
  styles: [
    `
    .ui-messages-error {
      margin: 0;
    }
    `
  ]
})
export class MessageComponent {
  // propriedade que entram no componente
  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty || this.control.hasError(this.error) && this.control.touched;
  }
}
