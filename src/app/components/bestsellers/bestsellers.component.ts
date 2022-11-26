import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
    selector: 'app-bestsellers',
    templateUrl: './bestsellers.component.html',
    styleUrls: ['./bestsellers.component.scss', '../flex-properties.scss']
})

export class BestsellersComponent {
    public list = [
        {
            href: '#',
            src: '../../../assets/images/bestsellers/700421.1.jpg',
            category: 'Bags',
            name: 'Hama "Perth" 15.6 Backpack Dark blue (185693) ',
            price: '18,540 ֏'
        },
        {
            href: '#',
            src: '../../../assets/images/bestsellers/29324_2.jpg',
            category: 'Flash drives',
            name: 'Hama "Rotate" USB,USB3.0, 32GB,Petrol blue(182463)',
            price: '4,400 ֏'
        },
        {
            href: '#',
            src: '../../../assets/images/bestsellers/750942_3.jpg',
            category: 'Headphones',
            name: 'Beats EP On-Ear Headphone Red/ML9C2ZM/A',
            price: '49,500 ֏'
        },
        {
            href: '#',
            src: '../../../assets/images/bestsellers/630214_4.jpg',
            category: 'Smartphones',
            name: 'Realme 7 Pro 8/128Gb Blue ',
            price: '118,930 ֏'
        },
        {
            href: '#',
            src: '../../../assets/images/bestsellers/5301617_5.jpg',
            category: 'Mouses',
            name: 'Hama Milano Wireless Mouse, Red (182640)',
            price: '4,960 ֏'
        },
        {
            href: '#',
            src: '../../../assets/images/bestsellers/2932420_6.jpg',
            category: 'Audio/Video Cables and Adapters',
            name: 'Canyon CNS-USBC8B/Magnetic Type C Cable',
            price: '4,820 ֏'
        }
    ]
    public offset = 0;

    public style ={
        left: this.offset + '%'
    }

    browseListRight(){
        this.offset -= 25
        if(this.offset <= 0 && this.offset >= (this.list.length -4) * (-25)){
            this.style.left = this.offset + '%'
        }else{
            this.offset = (this.list.length -4) * (-25)
        }

    }

    browseListLeft(){
        this.offset += 25;
        if(this.offset <= 0){
            this.style.left = this.offset + '%'
        }else{
            this.offset = 0
            this.style.left = this.offset + '%'
        }

    }
}