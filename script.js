function content2appear(){
    var content2 = document.querySelector('.content-2');

    var content2pos = content2.getBoundingClientRect().top;

    winHeight = window.innerHeight/1.5;

    if (content2pos < winHeight){
        content2.classList.add('content2appear')
    }

    else{
        content2.classList.remove('content2appear');
    }
}

window.addEventListener('scroll', content2appear);

function content3appear(){
    var content3 = document.querySelector('.content-3');

    var content3pos = content3.getBoundingClientRect().top;


    if (content3pos < winHeight){
        content3.classList.add('content3appear')
    }

    else{
        content3.classList.remove('content3appear');
    }
}

window.addEventListener('scroll', content3appear);

function section01appear(){
    var section01 = document.querySelector('.section-01');

    var section01pos = section01.getBoundingClientRect().top;


    if (section01pos < winHeight){
        section01.classList.add('section-01-appear')
    }

    else{
        section01.classList.remove('section-01-appear');
    }
}

window.addEventListener('scroll', section01appear);

function section02appear(){
    var section02 = document.querySelector('.section-02');

    var section02pos = section02.getBoundingClientRect().top;


    if (section02pos < winHeight){
        section02.classList.add('section-02-appear')
    }

    else{
        section02.classList.remove('section-02-appear');
    }
}

window.addEventListener('scroll', section02appear);

function section1appear(){
    var section1 = document.querySelector('.section-1');

    var section1pos = section1.getBoundingClientRect().top;


    if (section1pos < winHeight){
        section1.classList.add('section1appear')
    }

    else{
        section1.classList.remove('section1appear');
    }
}

window.addEventListener('scroll', section1appear);