gsap.to('#letter_s', {
    duration: 1,
    rotation: 360,
    transformOrigin: "50% 50%",
    ease: Linear.easeInOut,
    yoyo: true,
    repeat: -1,
    repeatDelay: 2,
});

const tween = gsap.to("#myLogo", { duration: 0.1, x: 6, repeat: -1, yoyo: true, ease: "sine.inOut", paused: true });

const tweenThree = gsap.to("#myLogoLarge", { duration: 0.1, x: 6, repeat: -1, yoyo: true, ease: "sine.inOut", paused: true });

document.getElementById('myLogo').addEventListener('mouseover', () => {
    tween.play();
});
document.getElementById('myLogo').addEventListener('mouseleave', () => {
    tween.pause();
});

document.getElementById('myLogoLarge').addEventListener('mouseover', () => {
    tweenThree.play();
});
document.getElementById('myLogoLarge').addEventListener('mouseleave', () => {
    tweenThree.pause();
});

const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menuBtn');
const wrapper = document.querySelector('.wrapper');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('activeBtn');
});

const okBtn = document.querySelector('.okBtn');
const canBtn = document.querySelector('.canBtn');
const cookies = document.querySelector('.cookies');

okBtn.addEventListener('click', () => {
    cookies.style.display = 'none';
});
canBtn.addEventListener('click', () => {
    cookies.style.display = 'none';
});

let pointer = 0;
const images = document.querySelectorAll('.images img');

function rotateLogo(imgs = [], currentPointer = 0) {
    let pointer = currentPointer;
    if (imgs !== []) {
        const current = pointer;
        pointer += 1;
        if (pointer === imgs.length) pointer = 0;
        gsap.to(imgs[current], { duration: 1, autoAlpha: 0 });
        gsap.to(imgs[pointer], { duration: 1, autoAlpha: 1 });
    }
    return pointer;
}

gsap.to({}, {
    duration: 5, repeat: -1, onRepeat: () => {
        pointer = rotateLogo(images, pointer);
    }
});