// slick-list draggable
import { Component, OnInit } from "@angular/core";
@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss', '../flex-properties.scss']
})

export class SliderComponent  implements OnInit {

    public offset = 0;
    public style = {
        right : this.offset +'px'
    }
    public isTrue: boolean = true
    showPreviousSlides(){
        this.offset -= 960;

        if(this.offset <= 0 && this.offset <= 10 * 960){
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
        this.offset += 960;
        if(this.offset >= this.slides.length * 960){
            this.offset = 10 * 960
        }
        if(this.offset === 10 * 960){
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

        setInterval(nextImg, 3000)
    }
    public slides = [
        {
            href: '#',
            src: '../../../assets/images/slider/bosch_cooking1.png',
        },
        {
            href: '#',
            src: '../../../assets/images/slider/960x400_ipadpro2.png',
        },
        {
            href: '#',
            src: '../../../assets/images/slider/960x400_ipad10gen3.png',
        },
        {
            href: '#',
            src: '../../../assets/images/slider/samsung_neoqled4.jpg',
        },
        {
            href: '#',
            src: '../../../assets/images/slider/lg_tv_promo5.jpg',
        },
        {
            href: '#',
            src: '../../../assets/images/slider/hp_banner6.jpg',
        },
        {
            href: '#',
            src: '../../../assets/images/slider/iphone7.jpg',
        },
        {
            href: '#',
            src: '../../../assets/images/slider/960x400_boschfaem8.jpg',
        },
        {
            href: '#',
            src: '../../../assets/images/slider/960x400_eng_9.png',
        },
        {
            href: '#',
            src: '../../../assets/images/slider/kitchenaid10.jpg',
        },
        {
            href: '#',
            src: '../../../assets/images/slider/unlimited11.jpg',
        }
    ]
}