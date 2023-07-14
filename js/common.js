const elHeader = document.querySelector('header .head');


function init() {

function scrollFun() {
    let startSCroll = elHeader.getBoundingClientRect().y;
    if(window.pageYOffset > 0) {
        elHeader.classList.remove("active");
    } else {
        elHeader.classList.add("active");
    };

    
}


    window.addEventListener("scroll", scrollFun)
}

window.addEventListener("load", init);