const mainInformationSection = document.querySelector('.main-information-section');
const contactDropListBtn = document.querySelector('.contact-block__title');
const contactBlockInfo = document.querySelector('.contact-block__info');
contactBlockInfo.style.opacity = '0';
contactDropListBtn.addEventListener('click', () => {
    const contactArrowUp = document.querySelector('.button-arrow-up');
    const contactArrowDown = document.querySelector('.button-arrow');
    const phoneSvg = document.querySelector('.phone-svg-href');
    const phoneNumberHrf = document.querySelector('.phone-number-href');
    const emailSvg = document.querySelector('.email-svg-href');
    const emailHref = document.querySelector('.email-href');
    const mainInformationSectionContactBlock = document.querySelector('.main-information-section__contact-block');
    let time = () => setTimeout(() => {
        contactBlockInfo.style.paddingBottom = '0px';
        phoneSvg.style.display = 'none';
        phoneNumberHrf.style.display = 'none';
        emailSvg.style.display = 'none';
        emailHref.style.display = 'none';
    },1050);   
        if(contactBlockInfo.style.opacity !== '0') {
            contactBlockInfo.style.opacity = '0';
            phoneSvg.removeAttribute('href');
            phoneNumberHrf.removeAttribute('href');
            emailSvg.removeAttribute('href');
            emailHref.removeAttribute('href');
            contactBlockInfo.style.paddingTop = '0px';
            contactBlockInfo.style.gap = '0px';
            contactBlockInfo.style.height = '0px';
            setTimeout(() => {
                contactBlockInfo.style.paddingBottom = '0px';
                mainInformationSectionContactBlock.style.gap = '0px';
            }, 400);
            time();
            contactArrowUp.className = 'button-arrow';
        } else {
            time = null;
            contactBlockInfo.style.paddingBottom = '110px';
            contactBlockInfo.style.paddingTop = '30px';
            setTimeout(() => {
            contactBlockInfo.style.opacity = '1';
            phoneSvg.style.display = 'initial';
            phoneNumberHrf.style.display = 'initial';
            emailSvg.style.display = 'initial';
            emailHref.style.display = 'initial';
            phoneSvg.setAttribute('href', 'tel:+37529230-91-94');
            phoneNumberHrf.setAttribute('href', 'tel:+37529230-91-94');
            emailSvg.setAttribute('href', 'mailto:pavel.urbanovich.09@gmail.com');
            emailHref.setAttribute('href', 'mailto:pavel.urbanovich.09@gmail.com');
            contactBlockInfo.style.gap = '30px';
            contactBlockInfo.style.height = '0px';
            }, 400);
            contactArrowDown.className = 'button-arrow-up';
        };
});




const educationDropListBtn = document.querySelector('.education-block__title');
const educationBlockInfo = document.querySelector('.education-block__subtitle');
educationBlockInfo.style.opacity = '0';
educationDropListBtn.addEventListener('click', () => {
    const educationArrowDown = document.querySelector('.button-arrow-2');
    const educationArrowUp = document.querySelector('.button-arrow-up-2');
    let time = () => setTimeout(() => {
        educationBlockInfo.style.display = 'none';
    },1050);
    if(educationBlockInfo.style.opacity !== '0') {
        educationBlockInfo.style.opacity = '0';
        educationBlockInfo.style.paddingTop = '0px';
        educationBlockInfo.style.height = '0';
        educationArrowUp.className = 'button-arrow-2';
        time();
        setTimeout(() => {
            educationBlockInfo.style.paddingBottom = '0';
        }, 400);
    } else {
        time = null;
        educationBlockInfo.style.display = 'flex';
        setTimeout(() => {
            educationBlockInfo.style.paddingBottom = '120px';
            educationBlockInfo.style.paddingTop = '20px';
        }, 50)
        setTimeout(() => {
            educationBlockInfo.style.opacity = '1';
            educationBlockInfo.style.height = '0px';
        }, 400);
        educationArrowDown.className = 'button-arrow-up-2';
    };
});




const skillsDropListBtn = document.querySelector('.skills-block__title');
const skillsBlockInfo = document.querySelector('.skills-block__skills-list');
skillsBlockInfo.style.opacity = '0';
skillsDropListBtn.addEventListener('click', () => {
    const skillsArrowDown = document.querySelector('.button-arrow-3');
    const skillsArrowUp = document.querySelector('.button-arrow-up-3');
    let time = () => setTimeout(() => {
        skillsBlockInfo.style.display = 'none';
    },1050);
    if(skillsBlockInfo.style.opacity !== '0') {
        skillsBlockInfo.style.opacity = '0';
        skillsBlockInfo.style.paddingTop = '0px';
        skillsBlockInfo.style.height = '0px';
        skillsArrowUp.className = 'button-arrow-3';
        time();
    } else {
        time = null;
        skillsBlockInfo.style.display = 'grid';
        skillsBlockInfo.style.marginBottom = '100px'
        setTimeout(() => {
            skillsBlockInfo.style.opacity = '1';
            skillsBlockInfo.style.paddingTop = '20px';
            skillsBlockInfo.style.height = '200px';
        }, 100);
        skillsArrowDown.className = 'button-arrow-up-3';
    };
});




contactDropListBtn.addEventListener('mouseover', () => {
    contactDropListBtn.style.background = 'rgb(96, 162, 232)';
    contactDropListBtn.addEventListener('mouseout', () => {
        contactDropListBtn.style.background = 'rgb(0, 123, 255)';
    });
});




let sliderItemWidth = getComputedStyle(document.documentElement).getPropertyValue('--main-width'); 
sliderItemWidth = sliderItemWidth.slice(1, -2);
sliderItemWidth = Number(sliderItemWidth);
const sliderDots = document.querySelector('.slider__dots');
const sliderImgs = document.querySelector('.slider__imgs');
const sliderDotsStyles = document.querySelectorAll('.slider-dot-styles');
const sliderItems = document.querySelectorAll('.slider__items .slider__imgs img');
let width;
function init() {
    width = document.querySelector('.slider__items').offsetWidth;
    sliderImgs.style.width = width*sliderItems + 'px';
    sliderItems.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    })
}
window.addEventListener('resize', init);
init();
sliderDots.addEventListener('click', (event) => {
    let target = event.target.className;
    if (target === 'slider__dots') return;
    if(target === 'slider__dot-1 slider-dot-styles') sliderImgs.style.left = '-0px';
    if(target === 'slider__dot-2 slider-dot-styles') sliderImgs.style.left = `-${width}px`;
    if(target === 'slider__dot-3 slider-dot-styles') {
        let sliderItemWidth2 = width*2;
        sliderImgs.style.left = `-${sliderItemWidth2}px`;
    };
    if(target === 'slider__dot-4 slider-dot-styles') {
        let sliderItemWidth2 = width*3;
        sliderImgs.style.left = `-${sliderItemWidth2}px`;
    };
    if(target === 'slider__dot-5 slider-dot-styles') {
        let sliderItemWidth2 = width*4;
        sliderImgs.style.left = `-${sliderItemWidth2}px`;
    };
    for (let i = 0; i < sliderDotsStyles.length; i++) {
        let el = sliderDotsStyles[i];
        el.style.background = 'white';
    };
    event.target.style.background = 'rgb(7, 80, 190)';
});




setTimeout(() => {
    const pageBody = document.querySelector('body');
    const initialPopUp = document.querySelector('.initial-pop-up');
    const pageEclipseWrapper = document.querySelector('.page-eclipse__wrapper');
    pageBody.style.overflow = 'hidden';
    initialPopUp.classList.add('active');
    pageEclipseWrapper.style.display = 'initial';
}, 300);
const initialPopUpCloseBtn = document.querySelector('.initial-pop-up__close-btn');
initialPopUpCloseBtn.addEventListener('click', () => {
    const pageBody = document.querySelector('body');
    const initialPopUp = document.querySelector('.initial-pop-up');
    const pageEclipseWrapper = document.querySelector('.page-eclipse__wrapper');
    const vacancyName = document.querySelector('.cv-information__vacancy-name');
    const personalName = document.querySelector('.cv-information__personal-name');
    const summary = document.querySelector('.main-text-section');
    const personalPhoto = document.querySelector('.cv-information__personal-photo');
    const headerBand = document.querySelector('.header-band');
    setTimeout(() => {
        vacancyName.style.display = 'initial';
        vacancyName.style.animation = 'vacancy-appearance 2s ease';
    }, 2500);
    personalName.style.display = 'initial';
    personalName.style.animation = 'name-appearance 5s ease';
    pageBody.style.overflow = 'visible';
    initialPopUp.classList.remove('active');
    pageEclipseWrapper.style.display = 'none';
    summary.style.display = 'initial';
    summary.style.animation = 'text-appearance 7s linear';
    personalPhoto.style.opacity = '1';
    headerBand.style.display = 'initial';
    headerBand.style.animation = 'band-appearance 2s linear';
});    
const initialPopUpCloseBtn2 = document.querySelector('.initial-pop-up__close-btn');
const gearSvg = document.querySelector('.main-content__gear-svg');
setTimeout(() => {
    initialPopUpCloseBtn2.removeAttribute('disabled');
    initialPopUpCloseBtn2.className = 'initial-pop-up-new-close-btn';
    gearSvg.style.visibility = 'hidden';
},6000);




const phoneHover = document.querySelector('.phone-number-href');
const phoneSvgHover = document.querySelector('.phone-svg');
phoneHover.addEventListener('mouseover', () => {
    phoneHover.style.color = 'rgb(0, 123, 255)';
    phoneSvgHover.style.fill = 'rgb(0, 123, 255)';
    phoneHover.addEventListener('mouseout', () => {
        phoneHover.style.color = 'white';
        phoneSvgHover.style.fill = 'white';
    });
});
phoneSvgHover.addEventListener('mouseover', () => {
    phoneHover.style.color = 'rgb(0, 123, 255)';
    phoneSvgHover.style.fill = 'rgb(0, 123, 255)';
    phoneSvgHover.addEventListener('mouseout', () => {
        phoneHover.style.color = 'white';
        phoneSvgHover.style.fill = 'white';
    });
});




const emailHover = document.querySelector('.email-href');
const emailSvgHover = document.querySelector('.email-svg');
emailHover.addEventListener('mouseover', () => {
    emailHover.style.color = 'rgb(0, 123, 255)';
    emailSvgHover.style.fill = 'rgb(0, 123, 255)';
    emailHover.addEventListener('mouseout', () => {
        emailHover.style.color = 'white';
        emailSvgHover.style.fill = 'white';
    });
});
emailSvgHover.addEventListener('mouseover', () => {
    emailHover.style.color = 'rgb(0, 123, 255)';
    emailSvgHover.style.fill = 'rgb(0, 123, 255)';
    emailSvgHover.addEventListener('mouseout', () => {
        emailHover.style.color = 'white';
        emailSvgHover.style.fill = 'white';
    });
});