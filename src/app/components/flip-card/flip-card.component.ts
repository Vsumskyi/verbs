import { Component } from '@angular/core';

@Component({
    selector: 'app-flip-card',
    templateUrl: './flip-card.component.html',
    styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent {

    public isFlipped: boolean;

    public flipCard(): void {
        this.isFlipped = !this.isFlipped;
    }
}
