function getColor() {
    var date = new Date();
    console.log(date.getMinutes());
    if (date.getMinutes() > 18) {
        return "black";
    }
    return "Red";
}

var socialElement = document.getElementById("social");
console.info("socialElement", socialElement);
var color = getColor();
socialElement.style.color = color;




function initEvents() {
    document.querySelectorAll('.top-menu-bar a').forEach(function(a){
        a.addEventListener('click', function(e){
             console.debug('merge', e.target);
             var page = e.target.getAttribute('data-page');
             hidePages();
             showPage(page);
        })
    });
    
}
function hidePages() {
    var pages = document.querySelectorAll('.page');
    pages.forEach(function (page) {
        page.style.display = 'none';
    });
}

function showPage(page) {
        document.querySelector(`#${page}-page`).style.display = 'block';
}

initEvents();

function renderSkills(skills) {
    var ul = document.querySelector('#skills-page ul');

    console.warn('skills', skills);
    
    ul.innerHTML = skills.map(function(skill){
        return `<li>${skill.name}</li>`
    }).join('');
}

fetch('data/skills.json').then(function(resp){
    return resp.json();
}).then(function(skills){
    renderSkills(skills);
})







