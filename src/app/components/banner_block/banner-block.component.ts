import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
    selector: 'app-banner-block',
    templateUrl: './banner-block.component.html',
    styleUrls: ['./banner-block.component.scss', '../flex-properties.scss']
})

export class BannerBlockComponent {

    public list = [
        {
            href: '#',
            src: '../../../assets/images/banner_block/bosch-mum1.png'
        },
        {
            href: '#',
            src: '../../../assets/images/banner_block/duamondi_2.jpg'
        },
        {
            href: '#',
            src: '../../../assets/images/banner_block/haier_3.jpg'
        }
    ]

}