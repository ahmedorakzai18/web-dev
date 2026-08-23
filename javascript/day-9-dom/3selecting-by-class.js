let paragraph = document.getElementsByClassName("pp");

paragraph[0].innerHTML = "<ul><li>Now i am changed by the js.</li><br></br><li>The browser created the DOM and js changed me with the.</li></ul>";

// important: innerHTML returns or sets the complete HTML markup

paragraph[1].innerText = "Same but here changed the innerText Not innerHTML";

// innerText returns eturns or sets only the human-readable text that is currently visible on the page  


let images = document.getElementsByClassName("OLD");

for(let i = 0; i<images.length; i++)
{
    images[i].src = "Spider-Man.webp";
    console.log(`Source of image ${i} is changed`)
}

// here we changed the images source