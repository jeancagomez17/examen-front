import template from './index.html?raw';
import './style.css';





function total(){
    const min =  document.getElementById('min');
    const max = document.getElementById('max');
    const valor = document.getElementById('value');

    let num = 0;
    max.addEventListener('click', ()=>{     
        valor.innerHTML = num + 1;
        num++;
    })
    min.addEventListener('click', ()=>{

        if(num <= 0){
            valor.innerHTML = 0;
        }else {
            valor.innerHTML = num - 1;
            num--;
        }
    })
}

export function render(dom){
    dom.innerHTML += template;
    document.addEventListener('load', total());
}
