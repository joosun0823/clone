$('body').prepend('<header></header>');
$('header').load('./header.html', afterLoad);


function afterLoad() {
    const burger = document.querySelector(".hamburg > a");
    const main = document.querySelector("main");
    const header = document.querySelector("header")
    
    
    function headerTop() {
        $(window).scroll(function() {
            if( window.pageYOffset <= 0) {
                $(".head").addClass("fixed")
            } else {
                $(".head").removeClass("fixed")
            }
        })
    }
    headerTop();

    function headerSlide() {
        $(".master-innerBox > li > a").on("mouseenter",function(){
            $(".master-innerBox").addClass("active")
            $("header").addClass("active")
        })
        $("header").on("mouseleave",function(){
            $(".master-innerBox").removeClass("active")
            $("header").removeClass("active")
        })
    }
    headerSlide();

    burger.addEventListener("click", function() {
        document.body.classList.toggle("ds-none");
        
        header.classList.toggle("open");
        
    })

}

const ArrowBttn = document.querySelector('.arrow');
const footer = document.querySelector("footer");
const header = document.querySelector(".hehe");

ArrowBttn.addEventListener("click", function() {
    console.log(ArrowBttn);
    console.log(ArrowBttn.classList.contains('active'));
    if(ArrowBttn.classList.contains('active')) {
            footer.scrollIntoView({behavior: 'smooth' });
        } else {
            header.scrollIntoView({behavior: 'smooth' });
        }
        });

const obSide = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entriesV,entriesK) {
        if(entriesV.isIntersecting){
            ArrowBttn.classList.add('active')
        } else {
            ArrowBttn.classList.remove('active')
        }
    })
});

obSide.observe(header);


