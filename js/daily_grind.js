// alert("Can you see this?");
/*
Here are the items we need to produce for each day's coffee
pic - img src
alt - the alt tag for the image
color - color to match the picture
desc - description of the coffee
name - the name of coffee
day - the day of the week
*/

function coffeeTemplate(coffee){
  return ` 
  <p>
    		<img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
        <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}
    </p>`;
}
let myDate = new Date();
let today = myDate.getDay();

//use location object to access querystring (address bar)
const queryString = window.location.search;
//output to console    
console.log(queryString);
//separate query string parameters
const urlParams = new URLSearchParams(queryString);


if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
  }
  else{//today's day of week
     myDay = today;
  }

  if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
  }
  today = parseInt(today);

switch (today) {
  case 0: 
    today = "Sunday";
    coffee = {
      name: "Caramel Latte",
      color: "#c57e3c",
      pic: "images/caramel-latte.jpg",
      alt: "Image of a Caramel Latte",
      day: "Sunday",
      desc: `I like extra drip of caramel`
    }
    break;
  case 1: 
    today = "Monday";
    coffee = {
      name: "Bubble Tea",
      color: "pink",
      pic: "images/bubble-tea.jpg",
      alt: "Image of a bubble tea",
      day: "Monday",
      desc: `I like bubble tea`
    }
    break;
  case 2:
    today = "Tuesday";
    coffee = {
        name: "Drip",
        color: "black",
        pic: "images/drip.jpg",
        alt: "Image of a drip ",
        day: "Tuesday",
        desc: `Give me my drip fast`
      }
    break;
  case 3:
    today = "Wednesday";
    coffee = {
      name: "Cold Brew",
      color: "#b86313",
      pic: "images/cold-brew.jpg",
      alt: "Image of a Cold Brew",
      day: "Wednesday",
      desc: `I like it cold`
    }
    break;
  case 4: 
    today = "Thursday ";
    coffee = {
      name: "Frappaccino",
      color: "beige",
      pic: "images/frappaccino.jpg",
      alt: "Image of a frappaccino",
      day: "Thursday",
      desc: `I like frappaccino`
    }
    break;
  case 5: 
    today = "Friday";
    coffee = {
      name: "Mocha",
      color: "gray",
      pic: "images/mocha.jpg",
      alt: "Image of a Mocha",
      day: "Friday",
      desc: `I like Mocha`
    }
    break;
  case 6: 
    today = "Saturday";
    coffee = {
      name: "Pumpkin Spice Latte",
      color: "orange",
      pic: "images/pumpkin-spice-latte.jpg",
      alt: "Image of a Pumpkin Spice Latte",
      day: "Saturday",
      desc: `I like Pumpkin Spice Latte`
    }
    break;

  default:
    today = "Not Sure";
}

// alert(coffeeTemplate(coffee))
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;

// alert(today);
console.log(coffee);