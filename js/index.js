// Initialize a new recipeManager with currentId set to 0 
// Create object from class recipeManager
const recipeManager = new RecipeManager(0);
recipeManager.load();
recipeManager.printDiv();

function DeleteRecipe(id){
    console.log(id);
    recipeManager.deleteRecipe(id);
}


const form = document.querySelector('#addRecipeForm');
// Add an 'onsubmit' event listener
form.addEventListener("submit", (event) => {  
    //alert('form run');
    let txtNameDish =  document.querySelector('#txtNameDish');
    let txtDescription =  document.querySelector('#txtDescription');
    //let txtTime =  document.querySelector('#txtTime');
    let selectType =  document.querySelector('#selectType');
    let txtImage =  document.querySelector('#txtImage');
    let txtIngredients =  document.querySelector('#txtIngredients');
    //let txtMethod =  document.querySelector('#txtMethod');
    
  
    //err message
    let errMessageName =  document.querySelector('#errMessageName');
    let errMessageDescription =  document.querySelector('#errMessageDescription');
    //let errMessageTime =  document.querySelector('#errMessageTime');
    let errMessageType =  document.querySelector('#errMessageType');
    let errMessageImage =  document.querySelector('#errMessageImage');
    let errMessageIngredients =  document.querySelector('#errMessageIngredients');
    //let errMessageMethod =  document.querySelector('#errMessageMethod');
  
    let validationFail = 0;
  
    // Prevent default action
    event.preventDefault();
  
   
  
    // Clear error after 1.6 s
    const clearError= () =>{
      errMessageName.innerHTML = "";
      errMessageDescription.innerHTML = "";
      //errMessageTime.innerHTML = "";
      errMessageType.innerHTML = "";
      errMessageImage.innerHTML = "";
      errMessageIngredients.innerHTML = "";
      //errMessageMethod.innerHTML = "";
        
      txtNameDish.removeAttribute('style');
      txtDescription.removeAttribute('style');
      //txtTime.removeAttribute('style');
      selectType.removeAttribute('style');
      txtImage.removeAttribute('style');
      txtIngredients.removeAttribute('style');
      //txtMethod.removeAttribute('style');
      
    };
  
    
  
  
    //use trim() to check whitespace characters
    if(txtNameDish.value.trim() === ""){
      console.log(txtNameDish.value);
      errMessageName.innerHTML = "Please input Name Dish";
      errMessageName.style.color= "red";
      txtNameDish.style.borderColor = "red";
      validationFail++;
      
      
    } 
    else{
        console.log('i am here');
      errMessageName.innerHTML = "Well done!";
      errMessageName.style.color= "green";
      txtNameDish.style.borderColor = "green";
    }
  
    // condition of Description
    if(txtDescription.value.trim().length < 2|| txtDescription.value === ""){
      errMessageDescription.innerHTML = "Please input more than 5 characters";
      errMessageDescription.style.color= "red";
      txtDescription.style.borderColor = "red";
      validationFail++;
    } 
    else {
      errMessageDescription.innerHTML = "Well done!";
      errMessageDescription.style.color= "green";
      txtDescription.style.borderColor = "green";    
    }
    
    // if(txtTime.value.trim() === ""){
    //   errMessageTime.innerHTML = "Please input more than 5 characters";
    //   errMessageTime.style.color= "red";
    //   txtTime.style.borderColor = "red";
    //   validationFail++;
    // } 
    // else {
    //     errMessageTime.innerHTML = "Well done!";
    //     errMessageTime.style.color= "green";
    //   txtTime.style.borderColor = "green";    
    // }  

    if(selectType.value === "Choose the Dish Type"){
      
        errMessageType.innerHTML = "Please choose the Dish Type";
       
        errMessageType.style.color= "red";
        selectType.style.borderColor = "red";
        validationFail++;
      }
      else {
          errMessageType.innerHTML = "Well done!";    
          errMessageType.style.color= "green";
          selectType.style.borderColor = "green";            
      }
  
    if(txtImage.value.trim() == "" ){
      
      errMessageImage.innerHTML = "Please input image link";   
      errMessageImage.style.color= "red";
      txtImage.style.borderColor = "red";
      validationFail++;
    } 
    else {
        errMessageImage.innerHTML = "Well done!";   
        errMessageImage.style.color= "green";
        txtImage.style.borderColor = "green"; 
    }

    if(txtIngredients.value.trim() == "" ){
      
        errMessageIngredients.innerHTML = "Please input the ingredients";   
        errMessageIngredients.style.color= "red";
        txtIngredients.style.borderColor = "red";
        validationFail++;
      } 
      else {
        errMessageIngredients.innerHTML = "Well done!";   
        errMessageIngredients.style.color= "green";
        txtIngredients.style.borderColor = "green"; 
      }
      
    //   if(txtMethod.value.trim() == "" ){
      
    //     errMessageMethod.innerHTML = "Please input the ingredients";   
    //     errMessageMethod.style.color= "red";
    //     txtMethod.style.borderColor = "red";
    //     validationFail++;
    //   } 
    //   else {
    //     errMessageMethod.innerHTML = "Well done!";   
    //     errMessageMethod.style.color= "green";
    //     txtMethod.style.borderColor = "green"; 
    //   }
    
  
  
    // If validation fails then function will not proceed further and
    // will return. The value of validationFail will also needed to be
    // reset to 0.
    // ----------------------------------------------------------------------------------
    
    if (validationFail > 0) {
      validationFail = 0;
      //alert('validate > 0');
      return;
    } 
    else {
        
    // Push the valid input into our tasks array
   recipeManager.addRecipe(
       txtNameDish.value,
       txtDescription.value,
       //txtTime.value,
       selectType.value,
       txtImage.value,
       txtIngredients.value,
       //txtMethod.value
   );
  
    clearError();
    form.reset();
    recipeManager.printDiv(); 
 
    }
  }
  );

//    event submit end