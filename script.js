/* ======================================
   KIDSHOME SAMARINDA
   SCRIPT.JS
====================================== */

// =======================
// Smooth Scroll
// =======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const tujuan = document.querySelector(this.getAttribute("href"));

        tujuan.scrollIntoView({

            behavior:"smooth"

        });

    });

});


// =======================
// Navbar Shadow
// =======================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.style.boxShadow="0 8px 25px rgba(0,0,0,.15)";

    }

    else{

        navbar.style.boxShadow="0 2px 15px rgba(0,0,0,.08)";

    }

});


// =======================
// Fade Animation
// =======================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});


// =======================
// Counter Animation
// =======================

const counters=document.querySelectorAll(".counter h2");

counters.forEach(counter=>{

const target=counter.innerText;

const number=parseInt(target);

let count=0;

const update=()=>{

count+=Math.ceil(number/60);

if(count<number){

counter.innerText=count+"+";

requestAnimationFrame(update);

}

else{

counter.innerText=target;

}

}

update();

});


// =======================
// Floating WA Animation
// =======================

const wa=document.querySelector(".floating-wa");

setInterval(()=>{

wa.style.transform="scale(1.1)";

setTimeout(()=>{

wa.style.transform="scale(1)";

},400);

},3000);
