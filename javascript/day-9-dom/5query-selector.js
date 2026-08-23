let queryID = document.querySelector("#pid");
queryID.innerText = "Changed through Query Selector of ID";

//  -------------------------------------------------

let queryClass = document.querySelector(".pc");
queryClass.innerText = "Changed through Query Selector of Class";

//  -------------------------------------------------

let queryList = document.querySelectorAll("p")[3];

      // cuz paragraph number 3 is the one
      
queryList.innerHTML = "Changed through Query Selector of Tag<br><strong>Remember to use a simple tag, You will need a selectqueryAll.</strong>";

//  -------------------------------------------------