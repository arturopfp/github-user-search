const darkmode = document.getElementById('dark-light-mode');

darkmode.addEventListener('click', () => {
    const moonSunIcon = document.getElementById('moon-sun-icon');
    const darkLigthTxt = document.querySelector('.dark-light-txt');
    const body = document.getElementById('body');


    if( body.className === 'ligth') {
        body.className = 'dark'
        darkLigthTxt.innerHTML = 'LIGTH'
        moonSunIcon.src = './assets/icon-sun.svg'

    } else {
        body.className = 'ligth'
        darkLigthTxt.innerHTML = 'DARK'
        moonSunIcon.src = './assets/icon-moon.svg'
    }
    
    console.log()
})

