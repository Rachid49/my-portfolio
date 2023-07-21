const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})





// -----------------HOME TEXT OBSERVER-----------------------------

const homeText = document.querySelectorAll(".home-text")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("showElement", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
        
    })
},{
    threshold: 0.2,
})
homeText.forEach(homeText => {
    observer.observe(homeText)
})


// -----------------BTN OBSERVER-----------------------------


const btn = document.querySelectorAll(".btn")

const observerBtn = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("showBtn", entry.isIntersecting)    })
},{
    threshold: 0.2,
})

btn.forEach(btn => {
    observerBtn.observe(btn)
})



// ----------------- OBSERVER SHOW ABOUT SECTION FROM LEFT-----------------------------

const aboutTxt= document.querySelectorAll(".text");
const aboutimg = document.querySelectorAll('.about-img')

const observerAbout = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("showAbout", entry.isIntersecting)
        if (entry.isIntersecting) observerAbout.unobserve(entry.target)
        
    })
},{
    threshold: 0.2,
})
aboutTxt.forEach(aboutTxt => {
    observerAbout.observe(aboutTxt)
})
aboutimg.forEach(aboutimg => {
    observerAbout.observe(aboutimg)
})

// ----------------- OBSERVER SHOW PROJECTS IMG FROM RIGHT-----------------------------
const protImg= document.querySelectorAll(".proImg")

const observerImgs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("showProjectstImgs", entry.isIntersecting)
        if (entry.isIntersecting) observerImgs.unobserve(entry.target)
        
    })
},{
    threshold: 0.2,
})
protImg.forEach(protImg => {
    observerImgs.observe(protImg)
})


// -------------OBSERVER SHOW PROJECTS TITLE AND DESCRIPTION FROM LEFT-----------------------------

const proTxt= document.querySelectorAll(".show")

const observerTxt = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("projectsShowTxt", entry.isIntersecting)
        if (entry.isIntersecting) observerTxt.unobserve(entry.target)
        
    })
},{
    threshold: 0.2,
})
proTxt.forEach(proTxt => {
    observerTxt.observe(proTxt)
})

// -------------OBSERVER SHOW PROJECTS LIVE BTN FROM LEFT-----------------------------

const liveBtn= document.querySelectorAll(".live-btn")

const observerLiveBtn = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("showLiveBtn", entry.isIntersecting)
        if (entry.isIntersecting) observerLiveBtn.unobserve(entry.target)
        
    })
},{
    threshold: 0.2,
})
liveBtn.forEach(liveBtn => {
    observerLiveBtn.observe(liveBtn)
})

// -------------OBSERVER SHOW PROJECTS SOURCE BTN FROM LEFT-----------------------------

const sourceBtn= document.querySelectorAll(".source-btn")

const observerSourceBtn = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("showSourceBtn", entry.isIntersecting)
        if (entry.isIntersecting) observerSourceBtn.unobserve(entry.target)
        
    })
},{
    threshold: 0.2,
})
sourceBtn.forEach(sourceBtn => {
    observerSourceBtn.observe(sourceBtn)
})



// ----------OBSERVER SHOW CONTACT-----------------------------


const contact= document.querySelectorAll(".show")

const observerContact = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("showContact", entry.isIntersecting)
        if (entry.isIntersecting) observerContact.unobserve(entry.target)
        
    })
},{
    threshold: 0.2,
})
contact.forEach(contact => {
    observerContact.observe(contact)
})





























// const img = document.querySelectorAll('.about-img')[0];

// img.addEventListener('click',function(){
//     img.classList.toggle('active')
// })









// ----------DARK ---------LIGHT

const BTN = document.getElementById('btn');
const body = document.querySelectorAll('body')[0];
const hText = document.getElementById('homeText');
const socialIcons = document.getElementById('social-icons')


BTN.addEventListener('click', function(){
    body.classList.toggle('dark');
    hText.classList.toggle('white');
    socialIcons.classList.toggle('white-icon')
});
















const menuBar = document.querySelector('navbar');

