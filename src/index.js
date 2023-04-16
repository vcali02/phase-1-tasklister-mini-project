//document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form")

//you want the dropdown to be outside of the other function because this is a compeltely separate task
//1a. make drop down in the form
//1b. with colors
//2. update li font color using css



  let options = document.createElement("select")
  options.setAttribute("id", "priority") //allows us to access it easily
  
  form.appendChild(options)

  //create hi, med, low options: BUT this will be streamlined IN THE BELOW FUNCTION, so this is just a visual of what it could look like less efficiently 
  let hiOption = document.createElement("option")
  hiOption.textContent = "high"
  options.appendChild(hiOption)

  let medOption = document.createElement("option")
  medOption.textContent = "medium"
  options.appendChild(medOption)

  let lowOption = document.createElement("option")
  lowOption.textContent = "low"
  options.appendChild(lowOption)

//ALSO NEED TO ADD THIS TO THE LI ITEM!!!!

//in order for us to avoid the redundancy of coding this all individually, we put it in a function to make it efficient, aka when something is true, apply x instruction
//get better understanding of why this is written this way
//to ensure addOption() knows what the text of that option must be, must add parameter

// function addOption (priorityVal) {
//   let option = document.createElement("option")
//   option.textContent = priorityVal
//   options.appendChild(option)
//   //add option to select div so we need to append
//   //form.appendChild(options)
//   //what's the difference bt putting this append in or outside of the f()
// }
// //call addOptions 3x to reflect the values
// addOption(`low`)
// addOption(`med`)
// addOption(`high`)

// form.appendChild(options)

/* <select name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</select> */


// form.appendChild(option)
// option.addEventListener("select", () => {

// })




// - A priority value selected from a [dropdown][] that is
// used to determine the the color of the text in the list 
//(e.g. red for high priority, yellow for medium, green for low)

  form.addEventListener(`submit`, (e) => {
    e.preventDefault()
  
  let taskDesc = e.target["new-task-description"].value 
  let priority = e.target["priority"].value //allows us to access the value

  
  //to avoid having blank submissions: if taskDesk does not = an empty string then do the following instructions
  if(taskDesc !== "") {
    let liTask = document.createElement("li")
    liTask.textContent = taskDesc //this is the part that attaches the content of the description box to the list
    
  //*******SET TASK COLOR*************//

  if(priority === "low") {
      liTask.style.color = "green"
  } else if (priority === "medium") {
    liTask.style.color = "orange"
  } else if (priority === "high") {
    liTask.style.color = "red"
  }

    let taskList = document.getElementById("tasks") //grabbing ul (parentNode)
    taskList.appendChild(liTask) //attaching the li to ul

    //delete button
    let delBtn = document.createElement("button") //create physical button
    delBtn.textContent = "delete" //name the button so that you SEE it
    liTask.appendChild(delBtn) //ADD THE BUTTON TO THE LI
    //add event listener
    delBtn.addEventListener("click", () =>{ 
      //now do actual deletion
      delBtn.parentNode.remove() //remove the parentNode of the delBtn
      //liTask.removeChild(delBtn) --->NO bc we want to remove the ENTIRE element, not just the button
  }) //this works bc when CLICK event happens, the instruction remove occurs

//clear input field upon successful submission

  // don't even need this --> because already accessing it below: let inputField = document.getElementById("new-task-description")
  e.target["new-task-description"].value = "" //YES CAN use inputField.value, BUT by using e.target that we established above, we are ensuring we are actually getting the node we want
  }
  
  })
   
    




/*document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log("The DOM has loaded!")
});

const submit = document.getElementById("submit");
//creating a variable called submit allows me to more easily reference it
//without having to type ALL of that ^^ out each time

submit.addEventListener("click", (event) => {
  event.preventDefault();
  //this method prevents the default behavior of, in this case, the <form>
  //element submiting and redirecting to a new browser
  addNewTask();
  //this is a function that is HOISTED, aka even though the funciton is
  //declared BELOW, because it is a DECLARED function, I can call/invoke it
  //up here and it will perform the way I instructed it to
  //PURPOSE OF PLACEMENT: This is being called in here so that when I
  //invoke the click event, it populates the instructions of the addnNewTask fucntion
});

function addNewTask(){
  let newTask = document.getElementById("new-task-description").value;
  // this and the next two lines are declared variables for ease of access
  //this variable accesses the document element, accesses the id stated
  //as the argument, and EVEN FURTHER, directs you to that id's VALUE
  let taskList = document.getElementById("tasks");
  //this is the ul
  //This variable accesses the document element, the id called tasks 
  //(which I manually added into the HTML file)
  //BECAUSE IT IS THE AREA WHERE THE TASK LIST WILL APPEAR
  let li = document.createElement("li");
  //this variable accesses the document element, applies the createElement attribute
  //and creates a new "li" 
  let btn = document.createElement("button");
  li.textContent = newTask;
  //this accesses the li variable I created above, applies the textContent attribute
  // so that it can be given a value, which I made to be the newTask variable i made above
  //WHY? This allows me to ADD a list item when I type into the text box
  btn.textContent = "x";
  li.appendChild(btn);
  console.log(li);
  document.querySelectorAll("#tasks").appendChild(newTask);
  taskList.append(li);
  //I also need to "add" the list items TO the taskList BECAUSE this is where the
  //list items need to appear
  //li.append(btn);
  console.log(newTask)
  //this is me making sure I invoke my code
}

*/
//create a button that appends to the li
//btn.addEventListener("click", deleteTask)
//eventlistener that listens for the click of that button to then
//remove the li


/*function deleteTask(deletes) { //callback function paramenter=event
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.textContent = "x";
  li.textContent = `${deletes}`
  li.appendChild(btn);
  console.log(li);
  document.querySelectorAll("#tasks").appendChild(li);
  //console.log(deleteTask);
}
*/
/*function deleteTask(deletes) { //callback function paramenter=event
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.textContent = "x"
  let taskList = document.getElementById("tasks");
  
  taskList.remove(li);
}
 */


/* LI VERSION let li = document.createElement("li");
  //this variable accesses the document element, applies the createElement attribute
  //and creates a new "li" 
  li.textContent = newTask;
  //this accesses the li variable I created above, applies the textContent attribute
  // so that it can be given a value, which I made to be the newTask variable i made above
  //WHY? This allows me to ADD a list item when I type into the text box
  taskList.append(li);
  //I also need to "add" the list items TO the taskList BECAUSE this is where the
  //list items need to appear */

//stretch deliverables
//1. A delete function that will remove tasks from your list

/* <form id="create-task-form" action="" method="POST">
      <label for="new-task-description">Task description:</label>
      <input type="text" id="new-task-description" name="new-task-description" placeholder="description">
      <input type="submit" value="Create New Task">
    </form> */


      //1. type a task into the input field
      //2. be able to click a submit button
      //3. SEE a task string that I provided appear in the DOM
      //after the submit button has been activated. 