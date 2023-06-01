const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefaul();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');

  const active = nav.classList.contains('active')

  event.currentTarget.setAttribute('aria-expanded', active);

  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }


}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


// Dark Mode

const changeThemeBtn = document.querySelector("#change-theme")

//Toggle dark mode

function toggleDarkMode(){
  document.body.classList.toggle("dark");
}

// Load light or dark mode

function loadTheme(){
  const darkMode = localStorage.getItem("dark");

  if(darkMode){
    toggleDarkMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", function(){

  toggleDarkMode()

  // Save or remove dark mode
  localStorage.removeItem("dark");

  if(document.body.classList.contains("dark")){
    localStorage.setItem("dark", 1);
  }
});