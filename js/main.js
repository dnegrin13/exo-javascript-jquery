const couleur = document.querySelectorAll('couleur');
const btnHaut = document.getElementById('btn-haut');
const btnBas = document.getElementById('btn-bas');

let clicMemory = null;

couleur.forEach(function(couleur) {
    couleur.classList.add('unset')
    this.addEventListener('click', function() {
        changeSet(this)
    })
})

function changeSet(rep) {
    if(clickMemory === rep) {
        rep.classList.toggle('set');
        rep.classList.toggle('unset');
        clickMemory = null;

    }else if(clickMemory === null){
        clickMemory = rep;
        rep.classList.toggle('set');
        rep.classList.toggle('unset');
    }else{
       clickMemory.classList.remove('set')
       clickMemory.classList.add('unset')
       clickMemory = rep;
       rep.classList.toggle('set');
       rep.classList.toggle('unset');
    }
}

function changeBtnHaut(up) { 
    btnHaut.addEventListener('click', function() {
      document.couleur.classList.toggle('set')
       
    })
}
