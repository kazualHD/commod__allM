 // создание поведения меню на телефон
const menu = document.querySelector('.header__menu');
  
const div = document.createElement('div');
div.classList.add('header__burger');

const label = document.createElement('label');
label.classList.add('nav__check')

for (let i = 0; i < 3; i+=1) {
    const span = document.createElement('span');
    label.appendChild(span);
   
}

div.appendChild(label);
menu.appendChild(div);


const menuBody = document.querySelector('.menu__body');

div.addEventListener('click', () => {
  if (menuBody.classList.contains('checked__burger')) {
    menuBody.classList.remove('checked__burger');
  } else {
    menuBody.classList.add('checked__burger');
  }
})

const upperSpan = document.querySelector('.nav__check span:first-child')
const middleSpan = document.querySelector('.nav__check span:nth-child(2)')
const buttonSpan = document.querySelector('.nav__check span:last-child')

label.addEventListener('click', () => {
  if (menuBody.classList.contains('checked__burger')) {
    upperSpan.classList.remove('upper__stick');
    middleSpan.classList.remove('middle__stick');
    buttonSpan.classList.remove('button__stick');
  } else {
    upperSpan.classList.add('upper__stick');
    middleSpan.classList.add('middle__stick');
    buttonSpan.classList.add('button__stick');
  }
})
// создание треугольник 
const divTriangle = document.createElement('div');
divTriangle.classList.add('triangle');

 // поведение появления подменю
const menuList = document.querySelector('.menu__body ul');
menuList.classList.add('firstUl')
const bigOpt = document.querySelector('.firstUl > li:nth-of-type(3)');
const bigOptSub = document.querySelector('.menu__item:nth-of-type(3)> .menu__sub-list');
bigOptSub.parentNode.insertBefore(divTriangle, bigOptSub);



divTriangle.addEventListener('click', () => {
  bigOptSub.classList.toggle('visible__sub')
})