// <------------------------------------INTRODUCTION--------------------------------->
// console.log(`Developer : GAURAV SHARMA
// GMAIL : gs25802582@gmail.com
// DATE : 8-07-21`);

//<-------------------------------------START----------------------------------->

//accessing elements
let menu = document.querySelector('.menu');
let tmenu = document.querySelectorAll('.tmenu');
let collapse = document.querySelector('.col');
let container = document.querySelector('.container');

//toggle class in menu tabs
tmenu.forEach(element => {
    element.addEventListener('click',()=>{
        tmenu.forEach(anchor => {
            anchor.classList.remove('active');
        });
        element.classList.add('active');
    })
});



//toggle whole menu
for(let i = 0; i < tmenu.length; i++)
{
    if(i == 0)
    {
        tmenu[i].addEventListener('click',()=>{
        collapse.style = 'height: 300px;transition-delay:1.4s;';
        menu.style = 'max-height:99px;transition: all 1.4s ease-in-out;margin-top:0px;';
    });
    }
    else{
        tmenu[i].addEventListener('click',()=>{
            collapse.style = 'height: 0px;';
            menu.style = 'max-height:99px;transition:all 1.4s ease 0.9s;margin-top:-320px;';
        });
    }
}
