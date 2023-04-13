let cardsArray = [
  {
    name: "kanha",
    img: "https://www.bhaktiphotos.com/wp-content/uploads/2018/05/Cute-Kanha-Eating-Butter-hd-Images.jpg",
  },
  {
    name: "ramji",
    img: "https://live.staticflickr.com/2787/4245404845_4689e59ed7_z.jpg",
  },
  {
    name: "hanumanji",
    img: "https://wallpapercave.com/wp/wp5983432.jpg",
  },
  {
    name: "gada",
    img: "https://cdn-icons-png.flaticon.com/512/4431/4431816.png",
  },
  {
    name: "Sdhanush",
    img: "https://png.pngtree.com/png-clipart/20201208/original/pngtree-golden-bow-arrow-of-god-rama-happy-dusshera-navratri-durga-pooja-png-image_5517722.jpg",
  },
  {
    name: "butter",
    img: "https://png.pngtree.com/png-vector/20220812/ourmid/pngtree-janmashtami-decoration-with-dahi-handi-matki-krishna-feather-png-image_6108075.png",
  },
//   {
//     name: "shivJi",
//     img: "https://media.istockphoto.com/id/1297315257/photo/3d-wallpaper-lord-shiv-with-clouds-and-sun-rays-god-mahadev-mural-3d-illustration.jpg?s=612x612&w=0&k=20&c=wnaK1YJGW88dnw0h28Yrw6-NnpO4FXOVTRR4RsH3-yg=",
//   },
//   {
//     name: "NandiJi",
//     img: "https://i.pinimg.com/236x/9e/99/04/9e99049c710a592f8b4954f01f44b3a9.jpg",
//   },
];

let map = {
  kanha: "butter",
  butter: "kanha",
  ramji: "Sdhanush",
  Sdhanush: "ramji",
  hanumanji: "gada",
  gada: "hanumanji",
//   ShivJi:'NandiJi',
//   NandiJi : 'ShivJi',
};
let score =0;
const parentDiv = document.querySelector("#card-section");

let clickCount = 0;
let firstCard, secondCard;

let isMatch = () => {
  if (
    firstCard.parentNode.dataset.name ===
      map[secondCard.parentNode.dataset.name] ||
    secondCard.parentNode.dataset.name == map[firstCard.parentNode.dataset.name]
  ) {
    return true;
  }
  return false;
};

const resetGame = () => {
  clickCount = 0;

  firstCard.parentNode.classList.remove("card_selected");
  secondCard.parentNode.classList.remove("card_selected");

  firstCard = "";
  secondCard = "";
  
  for(let i =0 ;i < 6;i++){
    if(!parentDiv.childNodes[i].classList.contains('card_matched')){
        return;
      }
  }
  
document.getElementById("modal").style.visibility  = 'visible';
document.getElementById('score').innerHTML = score;

score =0;
 while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
}

  
};

document.addEventListener("click", (event) => {
  let currCard = event.target;

  if (currCard.id === "card-section") {
    alert('please click on card') ;
    return false;
  }

  if (currCard.id === "start") {
    document.getElementById("modal").style.visibility = "hidden";
   
  } 
  else {
if(document.getElementById("modal").style.visibility != "hidden") return false;
    
    clickCount++;
    if (clickCount < 3) {
      if (clickCount === 1) {
        firstCard = currCard;
        currCard.parentNode.classList.add("card_selected");
      } else {
        secondCard = currCard;
        currCard.parentNode.classList.add("card_selected");

        if (isMatch()) {
            score += 2;
          setTimeout(() => {
            firstCard.parentNode.classList.add("card_matched");
            secondCard.parentNode.classList.add("card_matched");
            resetGame();
          }, 1000);
        } else {
            score--;
          setTimeout(() => {
            resetGame();
          }, 1000);
        }
      }
    }
  }

  
}
);
let start = () =>{

 
let newList = Array.from(cardsArray).sort(() => 0.5 - Math.random());
// console.log(newList);
for (let i = 0; i < newList.length; i++) {
  const childDiv = document.createElement("div");
  childDiv.classList.add("card");
  childDiv.dataset.name = newList[i].name;

  const front_div = document.createElement("div");
  front_div.classList.add("front-card");

  const back_div = document.createElement("div");
  back_div.classList.add("back-card");

  back_div.style.backgroundImage = `url(${newList[i].img})`;

  parentDiv.appendChild(childDiv);

  childDiv.appendChild(front_div);
  childDiv.appendChild(back_div);
}
}
