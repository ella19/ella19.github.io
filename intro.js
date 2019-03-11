console.info("my first js file")

var name = "Elena";
var employed = true;

console.warn("employed");
console.warn(employed);

console.info("Name:");
console.info(name);

name = "Sontu";

console.info("Name");
console.info(name);


function getWelcomeMsg() {
    return "Welcome to my site!";
}

function getColor() {
    var date = new Date();
    console.log(date.getMinutes());
    if (date.getMinutes() > 18) {
        return "green"
    } 
    return "red";
}

var welcome = getWelcomeMsg();
console.info(welcome);

var summaryElement = document.getElementById("summary");
console.info("summaryElement", summaryElement);
var color= getColor();
summaryElement.style.color = color;

// first example
function hideHomePage() {
    var el = document.getElementById('home-page');
    el.style.display = 'none';
}
function showSkillsPage() {
    var el = document.getElementById('skills-page');
    el.style.display = 'block';
}

function clickOnSkills() {
    // hideHomePage();
     //showSkillsPage();
     hidePage('home-page');
     hidePage('languages-page');
     hidePage('about-page');
     showPage('skills-page');
 }
function clickOnHome() {
    showPage('home-page');
    hidePage('languages-page');
    hidePage('about-page');
    hidePage('skills-page');
}
function clickOnLanguages() {
    hidePage('home-page');
    showPage('languages-page');
    hidePage('about-page');
    hidePage('skills-page');   
}
function clickOnAbout() {
    hidePage('home-page');
    hidePage('languages-page');
    showPage('about-page');
    hidePage('skills-page');   
}
// first example-end

function hidePage(page) {
    var el = document.getElementById(page);
    el.style.display = 'none';
}
function showPage(page) {
    var el = document.getElementById(page);
    el.style.display = 'block';
}


