(function(){

    const teamSliders = [...document.querySelectorAll('.team_body')];

    /*console.log(sliders)*/

    const teamButtonNext = document.querySelector('#teamNext');
    const teamButtonBefore = document.querySelector('#teamBefore');

    let value;

    teamButtonNext.addEventListener('click', ()=> {
        changePosition(1);
    });

    teamButtonBefore.addEventListener('click', ()=> {
        changePosition(-1);
    });

    const changePosition = (add)=>{

        const currentTeamSlider = document.querySelector('.team_body--show').dataset.id;
        value = Number(currentTeamSlider);
        value+= add;

        teamSliders[Number(currentTeamSlider)-1].classList.remove('team_body--show');

        if(value === teamSliders.length+1 || value === 0){
            value = value === 0 ? teamSliders.length : 1;
        }

        teamSliders[value-1].classList.add('team_body--show');

    }

/*alert("Hola");*/

})();