import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'angelscale-app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Output() public btnClick: EventEmitter<void> = new EventEmitter();
  @Input() public textColor = '';
  @Input() public buttonColor = '';
  @Input() public iconType = '';
  @Input() public className = '';
  @Input() public width = '';
  @Input() public height = '';
  @Input() public type = 'button';
  @Input() public isDisabled = false;
  @Input() public path = 'social-media/svg';
  @Input()
  public set text(name: string) {
    this.buttonText = name;
  }
  public baseIconPath = `/assets/images/icons/`;
  public buttonText = '';

  public onClick(): void {
    this.btnClick.emit();
  }
}
