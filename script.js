// let box1 = document.querySelector(".box1");
// let box2 = document.querySelector(".box2");
// let box3 = document.querySelector(".box3");
// let box4 = document.querySelector(".box4");
// let box5 = document.querySelector(".box5");
// let box6 = document.querySelector(".box6");

// box1.addEventListener('click', () => {

// });

// box1.addEventListener('click', () => {
//     open('./one.html');
// });
// box2.addEventListener('click', () => {
//     open('./two.html');
// });
// box3.addEventListener('click', () => {
//     open('./three.html');
// });
// box4.addEventListener('click', () => {
//     open('./four.html');
// });

// box5.addEventListener('click', () => {
//     open('./five.html');
// });

// box6.addEventListener('click', () => {
//     open('./six.html');
// });

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



// const btnsearch = document.querySelector('.btn');


//     var userInput = document.querySelector("input").value;
  
//     const anyQueryMatch= ["Story", "1", "2", "3", "4", "5"];
//   let text1 = document.getElementById('2');

 

//     // x = "";
//     // if (userInput[x] = anyQueryMatch[x]) {
//     //     .style.background-color = "blue";
//     // }


// btnsearch.addEventListener('click', () => {
//     text1.focus();
// })