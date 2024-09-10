function ImgSection(){
    const tabImg = document.querySelectorAll(".js-tabImg li");
    const tabDesc = document.querySelectorAll(".js-tabDesc section");
    
    if(tabImg.length && tabDesc.length){
    
        tabDesc[0].classList.add("ativo");
        
        
        function activeTab(index){
            tabDesc.forEach((section) => {
               section.classList.remove("ativo"); 
            });
            tabDesc[index].classList.add("ativo");
        }
        
        tabImg.forEach((itemImg,index) => {
            itemImg.addEventListener("click", () =>{
                activeTab(index);
            })
        })
    }
}
ImgSection();

function Perguntas(){

    const faqPergunta = document.querySelectorAll(".js-faq-lista dt");
    
    faqPergunta[0].classList.add("ativo");
    faqPergunta[0].nextElementSibling.classList.add("ativo");
    
    function activeVisible(event){
        this.classList.toggle("ativo")
        this.nextElementSibling.classList.toggle("ativo");
    }
    
    faqPergunta.forEach((itemresposta)=>{
        itemresposta.addEventListener("click",activeVisible);
    })
}
Perguntas();

function scrollSuave(){
    const linksInternos = document.querySelectorAll(".js-menu a[href^='#']")
    
    function activeScroll(event){
        event.preventDefault();
        const href = this.getAttribute("href");
        const section = document.querySelector(href);
    
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    linksInternos.forEach((link) => {
        link.addEventListener("click",activeScroll)
    });

}
scrollSuave();


    // const topo = section.offsetTop;
    // window.scrollTo({
    //     top: topo,
    //     behavior:"smooth", 
    // });


function animacaoScroll(){
    const sections = document.querySelectorAll(".js-scroll")
    
    const windowMetade = window.innerHeight * 0.6;
    
    
    function animaScroll(){
        sections.forEach((section)=>{
            const sectionTop = section.getBoundingClientRect().top  ;
            const sectionVisible = (sectionTop-windowMetade)<0;
            if(sectionVisible){
                section.classList.add("ativo");
            }
        });
        
    }
    
    animaScroll();
    
    window.addEventListener("scroll",animaScroll);
}

animacaoScroll();