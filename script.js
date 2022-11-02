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

const endDate = new Date("May 7, 2023 12:00:00").getTime();

 
const timer = setInterval(function() {
 
    let now = new Date().getTime();
    let t = endDate - now;

    if(t >= 0) {
        let days = Math.floor(t / (1000 * 60 * 60 *24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((t % (1000 * 60)) / 1000);

        document.getElementById("timer-gunler").innerHTML = days + 
        "<span class='timer-label'> gün</span>";

        document.getElementById("timer-saatler").innerHTML= ("0" + hours).slice(-2) +
        "<span class='timer-label'> saat</span>";

        document.getElementById("timer-dakikalar").innerHTML= ("0" + minutes).slice(-2) +
        "<span class='timer-label'> dk</span>";

        document.getElementById("timer-saniyeler").innerHTML= ("0" + seconds).slice(-2) +
        "<span class='timer-label'> sn</span>";

    } else {
        document.getElementById("timer").innerHTML = "Zaman bitti!";
    }
}, 1000);


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