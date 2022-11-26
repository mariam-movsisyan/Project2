import { Component } from "@angular/core";
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss', '../flex-properties.scss']
})

export class FooterComponent {

    public menu =[
        {
            href: '#',
            className: 'fa-sharp fa-solid fa-location-dot',
            info: 'Stores'
        },
        {
            href: '#',
            className: 'fa-sharp fa-solid fa-gear',
            info: ' Services'
        },
        {
            href: '#',
            className: 'fa-sharp fa-solid fa-percent',
            info: ' Promotions'
        },
        {
            href: '#',
            className: 'fa-sharp fa-solid fa-gift',
            info: ' Gift card '
        },
        {
            href: '#',
            className: 'fa-sharp fa-solid fa-credit-card',
            info: ' Credit'
        },
        {
            href: '#',
            className: 'fa-brands fa-stack-exchange',
            info: ' FAQ'
        },
        {
            href: '#',
            className: 'fa-sharp fa-solid fa-phone',
            info: ' Contacts '
        },
        {
            href: '#',
            className: 'fa-sharp fa-solid fa-ellipsis',
            info: 'Other'
        }
    ]

}
