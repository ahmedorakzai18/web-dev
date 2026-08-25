let parent = document.querySelector("#parent");
let btn = document.querySelector("#child");

parent.addEventListener("click" , function(){
    console.dir("Parent Clicked");  
});

btn.addEventListener("click" , function(){
    console.dir("(child)Button Clicked");
});

// Remember: the order moves from the innermost element to the outermost element.

// Like: click -> button -> parent -> grandparent -> document -> window

// Event Bubbling: The event starts from the innermost element and bubbles up to the outer elements. In this case, when the button is clicked, the event will first trigger the button's click event, then bubble up to the parent element's click event, and so on.

//=============================================================================================================

//----------------------------STOP PROPAGATION-----------------------------------------------------------------

let div = document.querySelector("#lists");
let un = document.querySelector("ul");
let lists = document.querySelectorAll("li");

div.addEventListener("click" , function(event){
    event.stopPropagation();    // stopPropagation stops the event Bubbling
    console.log("Div was Clicked (GrandParent)");
});


un.addEventListener("click" , function(event){
    event.stopPropagation();
    console.log("Un-Ordered List was Clicked (Parent)");
} );


for(let list of lists)
{
    list.addEventListener("click" , function(event  ){
    event.stopPropagation();
    console.log("List was Clicked (Child)");
} );
}