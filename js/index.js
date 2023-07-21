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
            if(window.pageYOffset < entriesV.target.offsetTop) {
                entriesV.target.classList.remove("active")
            }
        }
    })
});



ob.observe(firstWrap);
ob.observe(secondWrap);
ob.observe(thirdWrap);
ob.observe(fourthWrap);


