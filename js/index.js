const firstWrap = document.querySelector(".sec-1");
const secondWrap = document.querySelector(".sec-2");
const thirdWrap = document.querySelector(".sec-3");
const fourthWrap = document.querySelector(".sec-4");

const ob = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entriesV, entriesK) {
        if(entriesV.isIntersecting) {
            entriesV.target.classList.add("active")
            console.log(entriesV);
        } else {
            entriesV.target.classList.remove("active")
        }
    })
});



ob.observe(firstWrap);
ob.observe(secondWrap);
ob.observe(thirdWrap);
ob.observe(fourthWrap);


// function handleSwiper() {
//     if( window.matchMedia("(max-width:768px)").matches) {
//             new Swiper(".mySwiper1",{
//                 slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },navigation: {
//     nextEl: ".btn_mySwiper1_next",
//     prevEl: ".btn_mySwiper1_prev",
//     },
//             });
//     } else {
        
//     if (typeof swiper !== "undefined" && swiper !== null) {
//         swiper.destroy();
//     }
// }
// }

// handleSwiper();
// window.addEventListener("resize", handleSwiper);

// function handleSwiper2() {
//     if( window.matchMedia("(max-width:768px)").matches) {
//             new Swiper(".mySwiper2",{
//                 slidesPerView: 3,
//                 spaceBetween: 30,
//             });
//     } else {

//     if (typeof swiper !== "undefined" && swiper !== null) {
//     swiper.destroy();
//     }
// }
// }

// handleSwiper2();
// window.addEventListener("resize", handleSwiper2);