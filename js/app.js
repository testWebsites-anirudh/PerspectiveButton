const updateMenu = document.querySelector('.left');
const viewMenu = document.querySelector('.right');
const updatePage = document.querySelector('.update-page');
const viewPage = document.querySelector('.view-page');

updateMenu.addEventListener('click',()=>{
    updatePage.style.transform = "translateX(0%)";
});

viewMenu.addEventListener('click',()=>{
    viewPage.style.transform = "translateX(0%)";
});

function goHome(target){
    const bye = document.querySelector(target);
    bye.style.transform = "translateX(150%)";
}

