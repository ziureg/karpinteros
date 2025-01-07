/*(function(){

    const expoSliders = [...document.querySelectorAll('.product_body')];


    const sliderButtonNext = document.querySelector('#product_next');
    const sliderButtonBefore = document.querySelector('#product_before');

    let value;

    sliderButtonNext.addEventListener('click', ()=> {
        changePosition(1);
    });

    sliderButtonBefore.addEventListener('click', ()=> {
        changePosition(-1);
    });

    const changePosition = (add)=>{

        const currentExpoSlider = document.querySelector('.product_body--show').dataset.id;
        value = Number(currentExpoSlider);
        value+= add;

        expoSliders[Number(currentExpoSlider)-1].classList.remove('product_body--show');

        if(value === expoSliders.length+1 || value === 0){
            value = value === 0 ? expoSliders.length : 1;
        }

        expoSliders[value-1].classList.add('product_body--show');

    }

alert("Hola");
})();*/


(function(){

    const sliders = [...document.querySelectorAll('.product_body')];

    /*console.log(sliders)*/
    const buttonNext = document.querySelector('#product_next');
    const buttonBefore = document.querySelector('#product_before');

    let value;

    buttonNext.addEventListener('click', ()=> {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=> {
        changePosition(-1);
    });

    const changePosition = (add)=>{

        const currentTestimony = document.querySelector('.product_body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;

        sliders[Number(currentTestimony)-1].classList.remove('product_body--show');

        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('product_body--show');

    }

/*alert("Hola");*/

})();