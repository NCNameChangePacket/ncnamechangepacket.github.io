var currentPage = 'Intro';
    
function closePage(name){
    document.getElementById(name).style.display = "none"
}
function openPage(name){
    closePage(currentPage);
    document.getElementById(name).style.display = "block";
    currentPage=name;
}