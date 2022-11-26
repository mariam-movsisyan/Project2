import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss', '../flex-properties.scss']
})

export class ProductsComponent {
    public list = [
        {
            href: '#',
            src: '../../../assets/images/products/019608_1.jpg',
            category: 'TVs',
            name: 'Blaupunkt 65UB5000T',
            price: '369,900 ֏'
        },
        {
            href: '#',
            src: '../../../assets/images/products/431860_2.png',
            category: 'Bags',
            name: 'Hama uRage"Carrier 700" Gam. Backpack,17.3(186084)',
            price: '26,400 ֏'
        },
        {
            href: '#',
            src: '../../../assets/images/products/176006_3.jpg',
            category: 'Smart speakers',
            name: 'Yandex Smart Station Lite/YNDX-00025 Red ',
            price: '39,900 ֏'
        },
        {
            href: '#',
            src: '../../../assets/images/products/019940_4.jpg',
            category: 'UHD (4K) TVs',
            name: 'UD 43U6210 ',
            price: '178,800 ֏'
        },
        {
            href: '#',
            src: '../../../assets/images/products/613100_5.jpg',
            category: 'Small Kitchen Appliances',
            name: 'HOMA 1003035 Air Fryer ',
            price: '82,500 ֏'
        },
        {
            href: '#',
            src: '../../../assets/images/products/650203-2_6.jpg',
            category: 'Mini Ovens',
            name: 'Tefal OF463830 ',
            price: '129,190 ֏'
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

    @Output() newItemEvent = new EventEmitter<number>()
    @Output() compareCount: number = 0;

    @Output() addCart = new EventEmitter<number>()
    @Output() countOfCart: number = 0


    addToCompare(){
        this.compareCount += 1
        this.newItemEvent.emit(this.compareCount)
    }

    addToCart(){
        this.countOfCart +=1
        this.addCart.emit(this.countOfCart)
    }
}