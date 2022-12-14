const QUESTION_LIST = document.querySelectorAll('li');
const paragraph1 = document.querySelector('.paragraph1')
const paragraph2 = document.querySelector('.paragraph2')
const paragraph3 = document.querySelector('.paragraph3')
const paragraph4 = document.querySelector('.paragraph4')
const paragraph5 = document.querySelector('.paragraph5')
const paragraph6 = document.querySelector('.paragraph6')
const paragraph7 = document.querySelector('.paragraph7')


let result = 0;
QUESTION_LIST[0].addEventListener('click', ()=> {
    result++
    if(result == 1){
    paragraph1.style.display = 'block'
    paragraph1.style.transition = '0.3s'
}else if(result == 2){
    paragraph1.style.display = 'none'
    return result = 0;
    }
})
QUESTION_LIST[1].addEventListener('click', ()=> {
    result++
    if(result == 1){
    paragraph2.style.display = 'block'
    paragraph2.style.transition = '0.3s'
}else if(result == 2){
    paragraph2.style.display = 'none'
    return result = 0;
    }
})
QUESTION_LIST[2].addEventListener('click', ()=> {
    result++
    if(result == 1){
    paragraph3.style.display = 'block'
    paragraph3.style.transition = '0.3s'
}else if(result == 2){
    paragraph3.style.display = 'none'
    return result = 0;
    }
})
QUESTION_LIST[3].addEventListener('click', ()=> {
    result++
    if(result == 1){
    paragraph4.style.display = 'block'
    paragraph4.style.transition = '0.3s'
}else if(result == 2){
    paragraph4.style.display = 'none'
    return result = 0;
    }
})
QUESTION_LIST[4].addEventListener('click', ()=> {
    result++
    if(result == 1){
    paragraph5.style.display = 'block'
    paragraph5.style.transition = '0.3s'
}else if(result == 2){
    paragraph5.style.display = 'none'
    return result = 0;
    }
})
QUESTION_LIST[5].addEventListener('click', ()=> {
    result++
    if(result == 1){
    paragraph6.style.display = 'block'
    paragraph6.style.transition = '0.3s'
}else if(result == 2){
    paragraph6.style.display = 'none'
    return result = 0;
    }
})
QUESTION_LIST[6].addEventListener('click', ()=> {
    result++
    if(result == 1){
    paragraph7.style.display = 'block'
    paragraph7.style.transition = '0.3s'
}else if(result == 2){
    paragraph7.style.display = 'none'
    return result = 0;
    }
})