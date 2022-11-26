import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
    selector: 'app-sale',
    templateUrl: './sale.component.html',
    styleUrls: ['./sale.component.scss', '../flex-properties.scss']
})

export class SaleComponent {
    public list = [
        {
            href: '#',
            src: '../../../assets/images/hot_prices/4318571_1.jpg',
            category: 'Bags',
            name: 'Hama "Perth" 15.6 Backpack Dark blue (185693) ',
            price: '18,540 ֏'
        },
        {
            href: '#',
            src: '../../../assets/images/hot_prices/432220_2.jpg',
            category: 'Flash drives',
            name: 'Hama "Rotate" USB,USB3.0, 32GB,Petrol blue(182463)',
            price: '4,400 ֏'
        },
        {
            href: '#',
            src: '../../../assets/images/hot_prices/297532_3.jpg',
            category: 'Headphones',
            name: 'Beats EP On-Ear Headphone Red/ML9C2ZM/A',
            price: '49,500 ֏'
        },
        {
            href: '#',
            src: '../../../assets/images/hot_prices/345309_4.jpeg',
            category: 'Smartphones',
            name: 'Realme 7 Pro 8/128Gb Blue ',
            price: '118,930 ֏'
        },
        {
            href: '#',
            src: '../../../assets/images/hot_prices/431937_5.jpg',
            category: 'Mouses',
            name: 'Hama Milano Wireless Mouse, Red (182640)',
            price: '4,960 ֏'
        },
        {
            href: '#',
            src: '../../../assets/images/hot_prices/436367.2_6.jpg',
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