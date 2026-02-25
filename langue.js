
var textesEnFrancais = {
"titre1" : "Bienvenue sur mon Portfolio",
"titre2" : "Design Graphique",
"titre3" : "Photographie",
"titre4" : "Vidéo"
};

var textsInEnglish = {
"titre1" : "Welcome to my Portofolio",
"titre2" : "Graphic Design",
"titre3" : "Photography",
"titre4" : "Video"
};

function changeLanguage(langue){
    var textes = textsInEnglish
    if (langue == "français"){
        textes = textesEnFrancais
    }
    Object.keys(textes).forEach(function(cle){
        document.querySelector('#'+cle).innerHTML = textes[cle]})
};

document.querySelectorAll("input").forEach(function(input) {
    input.addEventListener("click", function (e) {
        changeLanguage(e.srcElement.value);
    });
});

