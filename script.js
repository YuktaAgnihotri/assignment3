 let getst= document.querySelector(".getst");
 let discover = document.querySelector(".discover");
 let cards = document.getElementsByClassName('card');
  let user = document.querySelector(".user");
 let p = document.querySelector("p");
 let navBoxs = document.querySelectorAll('.navBox');
 let nav = document.querySelector(".nav");
 // agar ek jese bhaut sare  class elements ho then accessing then by getElemtsByClassName 
 //returns an array thus for loop is used 
 let facts =  document.querySelector(".facts");
 let h1 = document.querySelector("h1");
 let search = document.querySelector(".search");
 let threebar = document.querySelector(".threebar");
 let about = document.querySelector(".about");
console.log("gg");



// cards.style.remove();
    getst.addEventListener('click',move );


function move(){
    console.log("ohio");
    for( let i=0;i<cards.length;i++){
        cards[i].style.backgroundColor=" rgb(202, 236, 225)";
        cards[i].style.transform='translateX(22vw)';
        cards[i].style.transitionDuration='2s';
         cards[i].style.transitionTimingFunction= 'easeIn';
         cards[i].style.transitionDelay='0.2s';
         }

         setTimeout(()=>{
            cards[0].innerHTML='Facts No.1  <br> Mount kailash <br><br> Its is known as sacred mountain in the himalayas'
            cards[1].innerHTML='Facts No.2  <br> Mount Everest <br><br> Its is earths highest mountain '  
            cards[2].innerHTML='Facts No.3  <br> Mount Fuji  <br><br> It has an active volcano located about 100km southwest of Tokyo'
            cards[3].innerHTML='Facts No.4  <br> Mount K2 <br><br> It is the second highest mountain on earth. It lies in Karakoram range'    
         },2000)
        //  cards[0].innerHTML='ksjfsk';
    }


   //about us 

   about.addEventListener('click',abt);

   function abt(){
    for(let i=0;i<navBoxs.length;i++){
        navBoxs[i].remove();
            }
            h1.style.visibility='hidden';


   nav.innerHTML =`
   <div class="aboutus">
   At our website, we are dedicated to bringing you the best of mountain sports and adventure. Whether you're a seasoned pro or a beginner, we offer top-notch gear, expert advice, and unforgettable experiences in the great outdoors. From skiing and snowboarding to hiking, climbing, and mountain biking, we provide everything you need to explore the peaks and valleys with confidence. Our mission is to inspire a love for adventure, connect you with nature, and ensure that your mountain pursuits are safe, exciting, and rewarding. Join us and discover the thrill of the mountains, no matter your adventure style.
   </div>
   `
   ;

        }
 //user detalis  
 
 let saveNavBox = (".navBoxs"); 
user.addEventListener('click',creatingForm);


function creatingForm(){
 //   p.remove();
    //user.remove();
    for(let i=0;i<navBoxs.length;i++){
navBoxs[i].remove();
    }
    h1.style.visibility='hidden';

    nav.innerHTML=`
    <div class="userInput"> 
    <form>
     <label for="username"> UserName </br></label>
            <input type="text" id="username" name="username" placeholder="enter username"> </br></br>

            <label for="password"> password</br>
                <input type="text" id="password" name="password" placeholder="enter key"> </br>

                <button> login </button>
    </form>
    </div>`;

//    let newbutton =  document.createElement('button');
//   newbutton.setAttribute("class", "newbutton");

  
}

//search Button 
search.addEventListener('click',magnify);

function magnify(){

    h1.style.visibility="hidden";
    nav.innerHTML =`
    <div class = "magnify"

    <form>
     <label for="search"> search for Items </label>
            <input type="text" id="search" name="search" placeholder="search..." style="width: 50vw; height: 3vh"> 
            <button style="padding:6px; radius:5px;background-color:grey;"> Enter   </button>
            </form>
    </div>
    `;
}


//three bar 

    threebar.addEventListener('click', bar);
// threebar.addEventListener('click', bar);
  
function bar(){
 h1.style.visibility="hidden";
    nav.innerHTML =`
    <div class="bar">
    our Social Media Handles are :</br> </br>
    <i class="fa-brands fa-facebook"></i>  Facebook</br> </br>
    <i class="fa-brands fa-instagram"></i> Instagram </br> </br>
    <i class="fa-brands fa-github"></i> GitHub </br> </br>
    </div>
    `;

nav.style.transition="translateX(100vw)";
nav.style.transitionTimingFunction="easeOut";


}






