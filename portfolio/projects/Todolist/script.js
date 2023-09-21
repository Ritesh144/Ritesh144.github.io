 const inputBox = document.getElementById("input-box");
 const listContainer = document.getElementById("list-container");

 function addTask(){
        if(inputBox.value === ''){
            alert("You must write something!");
        }
        else{
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);

            // create croos icon
            let span= document.createElement("span");
            span.innerHTML ="\u00d7"; //cross icon code
            li.appendChild(span);

        }
        inputBox.value="";
        saveData();
 }

 listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); //checked element 
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();  // tragent the cross delete the element
        saveData();
    }
 },false );
 

 // this function uese for the save the data on browser   
 function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
 }

 function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
 }
 showTask(); //call the showTask function
