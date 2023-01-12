import { Component } from '@angular/core';

// [key] = value, bind-key = value
@Component({
    selector: 'app-property-binding',
    template: `<input disabled={{isDisabled}} type="text" class={{className}} value="a">
             <input [disabled]=isDisabled type="text" class={{className}} value="b">
             <input bind-disabled=isDisabled type="text" class={{className}} value="c"> `,
    styles: ['.bg-yellow {background-color: yellow}']
})
export class PropertyBindingComponent {
    isDisabled = false
    className = 'bg-yellow'
}
