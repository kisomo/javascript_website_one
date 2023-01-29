
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//Form submit event
form.addEventListener("submit",addItem);
// delete event 
itemList.addEventListener("click", removeItem);
//filter items
filter.addEventListener("keyup", filterItems);

//add item function
function addItem(e){
  e.preventDefault();
  //console.log(1);
  // get input value
  var newItem = document.getElementById("item").value;
  //create new li element
  var li = document.createElement('li');
  //add class to the new element
  li.className = 'list-group-item';
  //console.log(li);
  // add text node with input value
  li.appendChild(document.createTextNode(newItem));
  // create delete button
  var delete_b = document.createElement("button");
  // add classes to delete button
  delete_b.className = 'btn btn-danger btn-sm float-right delete';
  //append text node
  delete_b.appendChild(document.createTextNode('x'));
  //append button to li
  li.appendChild(delete_b);
  // append li to list
  itemList.appendChild(li);
}


function removeItem(e){
    //e.preventDefault();
    //console.log(1);
    if(e.target.classList.contains('delete')){
        //console.log(1);
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

// filter items function
function filterItems(e){
   // convert text to lower case.
   var txt = e.target.value.toLowerCase();
   //console.log(txt);
   var items = itemList.getElementsByTagName('li');
   //convert to an array
   Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(txt) != -1){
        item.style.display = 'block';
    }else{
        item.style.display='none';
    }
   });
}

/* =============== animation video =======================*/

const tl = gsap.timeline({default:{ease: 'power1.out'}});

tl.to('.text', {y:'0%', duration:1, stagger:0.25});
tl.to('.slider', {y:"-100%", duration:1.5, delay:0.5});
tl.to(".intro",{y:"-100%", duration:1},"-=1");
tl.fromTo('nav',{opacity:0},{opacity:1, duration:1});
tl.fromTo('.big-text',{opacity:0},{opacity:1, duration:1}, '-=1');

/* gsap video */
gsap.from(".landing",{duration:1, y:'-100%', ease:'bounce'})
gsap.from(".nav-links", {duration:2, opacity:0, delay:1, stagger:0.5})
gsap.from(".sidebar-right", {duration:2, x:'-100vw', delay:1, ease:'power2.in'})
gsap.from(".sidebar-left",{duration:1, delay:1.5, x:'-100%'})

gsap.to(".footer",{duration:1, y:0, ease:'elastic', delay:2.5})
gsap.fromTo('.button',{opacity:0, scale:0, rotation:720},{duration:1, delay:3.5, 
    opacity:1, scale:1, rotation:0})

const timeline = gsap.timeline()
timeline.from('.header',{duration:1, y:'-100%', ease:'bounce'})

gsap.from(".row",{duration:1, y:'-100%', ease:'bounce'})
gsap.fromTo('.btn btn-dark',{opacity:0, scale:0, rotation:720},{duration:1, delay:3.5, 
    opacity:1, scale:1, rotation:0})



/* ============== monkey emoji video =================================== */

const closedFace = document.querySelector(".closed");
const openFace = document.querySelector(".open");
const emojih2 = document.querySelector(".emojih2");

// add event listener
closedFace.addEventListener("click",()=>{
    if(openFace.classList.contains("open")){
       openFace.classList.add("active");
       closedFace.classList.remove("active");
       emojih2.classList.add("active");
    }
})

openFace.addEventListener("click",()=>{
    if(closedFace.classList.contains("closed")){
       closedFace.classList.add("active");
       openFace.classList.remove("active");
    }
})


let data = [
    {name:"Muthoka", age:30, locat:"Kal"},
    {name:"Kavyu", age:40, locat:"Kal"},
    {name:"Kisomo", age:60, locat:"Kal"},
    {name:"Wambua", age:20, locat:"Kal"},
    {name:"Madona", age:26, locat:"Kal"},
    {name:"Mulwa", age:17, locat:"Kal"},
];

const info = document.querySelector("#info");

let details = data.map(function(item){
    return ('<div>'  + item.name + ' ' + item.age + ' ' + item.locat+ '</div>');
});
info.innerHTML = details.join("\n");


const circle = document.querySelector("#circle");
circle.addEventListener("mouseenter",()=>{
   if(!circle.classList.contains("hover")){
    circle.classList.add("hover");
   }
});

circle.addEventListener("mouseleave",()=>{
   if(circle.classList.contains("hover")){
    circle.classList.remove("hover");
   }
});

/*================================= 5 projects from traversy ========================= */

const loadText = document.querySelector(".loading-text");
const backg = document.querySelector(".backg");

load = 0;
let inter = setInterval(blurring, 30);

function blurring(){
    load++;
    if(load > 99){
        clearInterval(inter);
    }
    loadText.innerText=`${load}%`;
    loadText.style.opacity = scale1(load, 0, 100, 1,0);
    backg.style.filter = `blur(${scale1(load, 0,100,30,0 )}px)`
}

const scale1 = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


/* sliding scroll */

const sliderContainer = document.querySelector(".slider_container");
const slideLeft = document.querySelector(".left-slide");
const slideRight = document.querySelector(".right-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top=`-${(slidesLength - 1)*100}vh`;

upButton.addEventListener("click",() => changeSlide("up"));
downButton.addEventListener("click",() => changeSlide("down"));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slidesLength -1){
            activeSlideIndex=0;
        }
    } else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex=slidesLength -1 ;
        }
    }
    slideRight.style.transform =`translateY(-${activeSlideIndex * (sliderHeight)}px)`;
    slideLeft.style.transform =`translateY(${activeSlideIndex * (sliderHeight)}px)`;
}

/* ----------------- */

const tagsEl = document.getElementById("tags");
const textArea = document.getElementById("textarea");

textArea.focus();
textArea.addEventListener('keyup',(e)=>{
       createTags(e.target.value);
       if(e.key === "Enter"){
        setTimeout(() => {
            e.target.value =''
        }, 10);
        randomSelect()
       }
})

function createTags(inp){
    const tags = inp.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagsEl.innerHTML = '';
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag')
        tagEl.innerText = tag 
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect(){
    const times = 30;
    const interv = setInterval(() => {
        const randomTag = pickRandomTag()
        highlighTag(randomTag);
        setTimeout(() =>{
        unhighlighTag(randomTag);
        }, 100)
    }, 100);
    setTimeout(() => {
        clearInterval(interv);
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlighTag(randomTag);
        }, 100)
    }, times*100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random()*tags.length)]
}

function highlighTag(tag){
    tag.classList.add("highlight");
}

function unhighlighTag(tag){
    tag.classList.remove("highlight");
}

/* ---------------------------- */

const result = document.getElementById("people_result");
const filter2 = document.getElementById("people_filter");
const listItems = []

getData();

filter2.addEventListener("input", (e) => filterData(e.target.value));

async function getData(){
    const res = await fetch("https://randomuser.me/api?results=50");
    const { results } = await res.json();
    result.innerHTML ='';
    console.log(results)

     results.forEach(user => {
        const li = document.createElement("li");

        listItems.push(li);

        li.innerHTML = `
           <img src="${user.picture.large}" alt="${user.name.first}">
           <div class="user-info">
              <h4>${user.name.first} ${user.name.last}</h4>
              <p>${user.location.city}, ${user.location.country}</p>
           </div>
        `
        result.appendChild(li);

    }) 

}

function filterData(searchTerm){
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        } else{
            item.classList.add("hide")
        }
    })
}

/* ------------------------------------------------ */

const p_header = document.getElementById("p_header");
const p_title = document.getElementById("p_title");
const p_excerpt = document.getElementById("p_excerpt");
const profile_img = document.getElementById("profile_img");
const p_name = document.getElementById("p_name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated_bg");
const animated_bg_texts = document.querySelectorAll(".animated_bg_text");

setTimeout(getData2, 2500)

function getData2(){
    p_header.innerHTML = '<img clas="#" src="cyber_image2.png" alt="">';
    p_title.innerHTML = 'The subprocess module present in Python';
    p_excerpt.innerHTML = 'The subprocess module present in Python(both 2.x and 3.x) is used to run\
    new applications or programs through Python ';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/12.jpg" alt="Mwanduka"/>';
    p_name.innerHTML = 'John Doe';
    date.innerHTML = 'Jan 23, 2023'

    animated_bgs.forEach(bg=>bg.classList.remove("animated_bg"));
    animated_bg_texts.forEach(bg=>bg.classList.remove("animated_bg_text"));
}


















































