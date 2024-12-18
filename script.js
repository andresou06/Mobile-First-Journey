
function openInNewTab(url) {
    window.open(url).focus();
  }
  
// ###############################################################
const storybtn = document.querySelector('.storybtn');
const cancel = document.querySelector('.cancel');
const dialog1 = document.querySelector('.Stories');


storybtn.addEventListener('click',() => {
    dialog1.showModal();
    
    
}) 


cancel.addEventListener('click', () => {
    dialog1.close();

})



// #######################################################

// const storymaintenance = document.querySelector('.underdevelopment');
// const maintenance = document.querySelector('.maintenance');

// storymaintenance.addEventListener('click', () => {
//     maintenance.showModal();
    
//     setTimeout(() => {
//         maintenance.close();
//     }, 1000);

// });


const projectbtn = document.querySelector('.projectbtn');
const project_nested = document.querySelector('.project_nested');
const main = document.querySelector('.allStories');
const prolog = document.querySelector('.search');

projectbtn.addEventListener('click', () => {
    project_nested.style.display = 'block';
})


projectbtn.addEventListener('mouseover', () => {
    project_nested.style.display = 'block';
})


project_nested.addEventListener('mouseout', () => {
    project_nested.style.display = 'none';
})

main.addEventListener('mouseover', () => {
    project_nested.style.display = 'none';
})
prolog.addEventListener('mouseover', () => {
    project_nested.style.display = 'none';
    storybtn.close();
})

main.addEventListener('click', () => {
    project_nested.style.display = 'none';
})
prolog.addEventListener('click', () => {
    project_nested.style.display = 'none';
    storybtn.close();
})

