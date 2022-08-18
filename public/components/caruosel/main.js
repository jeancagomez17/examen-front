import templateCar from './index.html?raw';
import './style.css';


function glide(){
    console.log('Funciona mal pero funciona');
    const confi = {
        type: 'carousel',
        startAt: 0,
        breakpoints:{
            1024:{
                perView:1
            },
            600:{
                perView:2
            }
        }
    }

    return new Glide('.glide', confi).mount();
}

export function render(dom){
    dom.innerHTML += templateCar;
    document.addEventListener('', glide());
}