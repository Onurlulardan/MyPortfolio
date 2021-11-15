let darkMode = localStorage.getItem("darkMode");

const darkModeToggler = document.getElementById("dark-mode-toggler");

const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode","enable");
};

const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode",null);
};

if(darkMode === "enable"){
    enableDarkMode();
    darkModeToggler.checked = true;
};

darkModeToggler.addEventListener("change", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enable") enableDarkMode(); 
    else disableDarkMode();
});
// Hamburger Menu
const navbar = document.querySelector(".navlist-mob");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});
//type effect




// language
// $(document).ready(function(){
    
//     var arrLang= {
//         'tr':{
//             '1': 'Hakkımda',
//             '2': 'Yetenekler',
//             '3': 'Blog',
//             '4': 'İletişim',
//         },
//         'en':{
//             '1': 'About',
//             '2': 'Skills',
//             '3': 'Blog',
//             '4': 'Contact',
//         }
//     }
// });
// $('.lang-mode-toggler').click(function(){ 
//     localStorage.setItem("dil", JSON.stringify($(this).attr("id")));
//     location.reload();
//     var lang = JSON.parse(localStorage.getItem("dil"));
//     if(lang == 'tr'){
//         $('.tr').html('Türkçe')
//     }
//     else{
//         $('.en').html('English')
//     }
//     $('a').each(function(index, element) {
//         $(this).text(arrLang[lang][$(this).attr('key')]);
//     });
// });