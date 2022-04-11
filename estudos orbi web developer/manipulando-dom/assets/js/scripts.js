function changeMode(){
    changeClasses();
    changeText();
}

//classList - chama as classes usadas pelo elemento
// toggle - coloca alguma coisa se não estiver lá e tira se já estiver
function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

// classList.contains - verifica se existe essa classe no elemento
// innerHtml = texto que está dentro da tag HTML
function changeText(){
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';
    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    };

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';

}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');

// o retorno de "body" e "footer" é um array, já que são tags html
// para acesso ao elemento que precisamos, pegamos o ínidice "0" deles
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);