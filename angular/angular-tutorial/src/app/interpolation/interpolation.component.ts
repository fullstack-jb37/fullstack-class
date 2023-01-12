import { Component } from '@angular/core';

// Interpolation can not include assignments and global var like console, window, etc...
@Component({
    selector: 'app-interpolation',
    template: `
    <h1>{{title}}</h1>
    <div>{{displayColors()}}</div>
    `,
    styles: [`
        div {
            font-size: 2em
        }

        h1 {
            color: green
        }
    `]
})
export class InterpolationComponent {
    title = 'this is the page header'
    colors = ['red', 'green', 'blue']
    displayColors() {
        return this.colors.map(color => `primary color ${color}`)
    }
}
