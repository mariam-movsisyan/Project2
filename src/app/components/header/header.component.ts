import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss', '../flex-properties.scss']
})

export class HeaderComponent {
    @Input() 
    public count!: number;
    @Input()
    public countOfCart!: number;
}