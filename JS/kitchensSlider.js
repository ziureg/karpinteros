(function(){

    const kitchensSlider = [...document.querySelectorAll('.kitchensSlider_body')];

    /*console.log(sliders)*/
    const kitchenButtonNext = document.querySelector('#kitchenNext');
    const kitchenButtonBefore = document.querySelector('#kitchenBefore');

    let value;

    kitchenButtonNext.addEventListener('click', ()=> {
        changePosition(1);
    });

    kitchenButtonBefore.addEventListener('click', ()=> {
        changePosition(-1);
    });

    const changePosition = (add)=>{

        const currentkitchensSlider = document.querySelector('.kitchensSlider_body--show').dataset.id;
        value = Number(currentkitchensSlider);
        value+= add;

        kitchensSlider[Number(currentkitchensSlider)-1].classList.remove('kitchensSlider_body--show');

        if(value === kitchensSlider.length+1 || value === 0){
            value = value === 0 ? kitchensSlider.length : 1;
        }

        kitchensSlider[value-1].classList.add('kitchensSlider_body--show');

    }

/*alert("Hola");*/

})();