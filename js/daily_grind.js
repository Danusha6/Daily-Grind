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
let myDate = new Date();
let today = myDate.getDay();

   switch(today){
    case 2:
        today = "Tuesday";
    break;

    case 3:
        today = "Wednesday";
    break;

    default:
        today = "Not Sure";
}

coffee = {
    name:"Bubble Tea",
    color:"pink",
    pic:"images/bubble-tea.jpg",
    alt:"Image of a bubble tea",
    day:"Wednesday",
    desc:'I like bubble tea'
}


// alert(today);
console.log(coffee);