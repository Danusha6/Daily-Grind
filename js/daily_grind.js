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
        <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily           coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}
    </p>`;
}
let myDate = new Date();
let today = myDate.getDay();

switch (today) {
  case 0: 
    today = "Sunday";
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
    // console.log("Here i am")
    break;
  case 2:
    today = "Tuesday";
    break;
  case 3:
    today = "Wednesday";
    break;
  case 4: 
    today = "Thursday ";
    break;
  case 5: 
    today = "Friday";
    break;
  case 6: 
    today = "Saturday";
    break;

  default:
    today = "Not Sure";
}

// alert(coffeeTemplate(coffee))
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

// alert(today);
console.log(coffee);