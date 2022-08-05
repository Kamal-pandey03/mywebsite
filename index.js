<link
rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
crossorigin="anonymous"
referrerpolicy="no-referrer"
/>
var appleFruit = document.getElementById("apple");
function dropapple(event){
  // var appleFruit = $("<img class='apple'/>");
  // appleFruit.attr("src","https://toppng.com//public/uploads/preview/apple-fruit-png-apple-fruit-transparent-11563073201mj52xnr1gp.png");
  // appleFruit.style.left = event.clientX + "px";
  // appleFruit.style.top = event.clientY + "px";
  appleFruit.classList.remove('apple');
  appleFruit.classList.add('dropapple');

//   appleFruit.style.display = "block";
//   appleFruit.style.top=event.clientY+"px";
//   appleFruit.style.left=event.clientX+"px";
//   appleFruit.style.zIndex="99";

//   event.stopPropagation();
// event.preventDefault();
}