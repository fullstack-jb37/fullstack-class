import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
      <p class="{{successClass}} {{bgBlue}}">success-color</p>
      <p class="{{dangerClass}}">danger-color</p>
      <p [class]="warningClass">warning-color</p>
      <p [class.warning-color]="!display" [class.bg-blue]="display">warning-color</p>
      <p bind-class.success-color="display" bind-class.bg-blue="!display">success-color</p>
      <p [class]="classesMap">success-color 2</p>
  `,
  styles: [`
  .success-color {color: green}
  .danger-color {color: red}
  .warning-color {color: yellow}
  .bg-blue {background-color: blue}
  `]
})
export class ClassBindingComponent {
    successClass = 'success-color'
    dangerClass = 'danger-color'
    warningClass = 'warning-color'
    bgBlue = 'bg-blue'
    display = true
    classesMap = {
       [this.successClass] : this.display,
       [this.bgBlue] : !this.display,
    }
}
