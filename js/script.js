const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slider');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    
    portfolioDetails.forEach(detail =>{
       detail.classList.remove('active');
});
    portfolioDetails[index].classList.add('active');
};



// Right arrow click
arrowRight.addEventListener('click', () => {
    if (index < 4) { // Ensure index does not exceed the number of slides minus one
        index++;
        arrowLeft.classList.remove('disabled')
    } else {
        index = 5; // Loop back to the first slide
        arrowRight.classList.add('disabled')
    }
    activePortfolio();
});

// Left arrow click
arrowLeft.addEventListener('click', () => {
    if (index > 1) { // Ensure index does not go below zero
        index--;
        arrowRight.classList.remove('disabled')
    } else {
        index = 0; // Loop back to the last slide
        arrowLeft.classList.add('disabled')
    }
    activePortfolio();
});



