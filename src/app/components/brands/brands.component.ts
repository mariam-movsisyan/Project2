import { Component } from "@angular/core";
@Component({
    selector: 'app-brands',
    templateUrl: './brands.component.html',
    styleUrls: ['./brands.component.scss', '../flex-properties.scss']
})

export class BrandsComponent {

    public offset = 0;
    public style = {
        right : this.offset +''
    }
    public isTrue: boolean = true
    showPreviousSlides(){
        this.offset -= 165;

        if(this.offset <= 0 && this.offset <= this.slides.length * 165){
            this.offset = 0
        }
        if(this.offset === 0){
            this.isTrue = true
        }

        this.style = {
            right : this.offset +'px'
        }
    }
    showNextSlides(){
        this.offset += 165;
        if(this.offset >= (this.slides.length-7) * 165){
            this.offset = (this.slides.length-7) * 165
        }
        if(this.offset === (this.slides.length-7) * 165){
            this.isTrue = false
        }
        this.style = {
            right : this.offset +'px'
        }
    }

    ngOnInit(): void {      
        const nextImg = () =>{
           if(this.isTrue){ 
                this.showNextSlides()

            }else{
                this.showPreviousSlides()
            }
        }

        setInterval(nextImg, 5000)
    }
    public slides = [
        {
            href: '#',
            src: '../../../assets/images/brands/1bosch.png',
        },
        {
            href: '#',
            src: '../../../assets/images/brands/2apple.png',
        },
        {
            href: '#',
            src: '../../../assets/images/brands/3miele.png',
        },
        {
            href: '#',
            src: '../../../assets/images/brands/4kidchenaid.png',
        },
        {
            href: '#',
            src: '../../../assets/images/brands/5marshall.png',
        },
        {
            href: '#',
            src: '../../../assets/images/brands/6k-array.png',
        },
        {
            href: '#',
            src: '../../../assets/images/brands/7philips.png',
        },
        {
            href: '#',
            src: '../../../assets/images/brands/8panasonic.png',
        },
        {
            href: '#',
            src: '../../../assets/images/brands/9liebherr.png',
        },
        {
            href: '#',
            src: '../../../assets/images/brands/10urbanears.png',
        },
        {
            href: '#',
            src: '../../../assets/images/brands/11indesit.png',
        },
        {
            href: '#',
            src: '../../../assets/images/brands/13sony.png',
        },
        {
            href: '#',
            src: '../../../assets/images/brands/14samsung.png',
        }
    ]
}
