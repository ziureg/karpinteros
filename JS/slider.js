(function(){

    const sliders = [...document.querySelectorAll('.product_body')];

    /*console.log(sliders)*/
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');

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