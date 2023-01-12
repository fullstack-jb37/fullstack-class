import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  template: `
      <input type="text" #inputRef>
      <div id='container_id' #divRef></div>
      <button (click)="handleInput(inputRef)">Display Input</button>
      <button (click)="handleContainer(divRef)">Display container id</button>
      <div>{{inputValue}}</div>
      <div>{{containerId}}</div>
  `,
  styles: ['']
})
export class TemplateReferenceVariableComponent {
    inputValue = ''
    containerId = ''
    handleInput(elem : HTMLInputElement){
        console.log(elem)
        this.inputValue = elem.value
    }
    handleContainer(elem : HTMLElement){
        console.log(elem)
        this.containerId = elem.id
    }
}
