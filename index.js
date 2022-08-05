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