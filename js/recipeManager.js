
const createRecipeHtml = (name,description,type,image,ingredients,id) => {
    console.log(id);
      
      const html = `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${image}" class="img-fluid rounded-start" alt="${name}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text"><em>${description}</em></p>
            <h5>Ingredients:</h5>
            <p class="card-text text-break" ><span style='white-space:normal'>${ingredients}<span></p>
            <button type="button" class="btn btn-outline-danger deleteButton" onclick='DeleteRecipe(${id})'>Delete</button>
          </div>
        </div>
      </div>
    </div>`;  
    return html;          
  }  


class RecipeManager {
    constructor(currentId = 0) {
      this.recipes = [];
      this.currentId = currentId;
    }

    addRecipe(name, description, type, image, ingredients) {
        const recipe = {
            
            id: this.currentId++,
            name: name,
            description: description,
            
            type: type,
            image: image,
            ingredients: ingredients
           
          };
          //task6: store in array
          this.recipes.push({ recipe });   
    }

    save(){
       console.log(this.currentId);
      if(this.currentId >0)
      {
     // Create a JSON string
     const recipesJson = JSON.stringify(this.recipes);
     
      console.log(recipesJson);
     // Store the JSON string 
     localStorage.setItem("recipes", recipesJson);
 
     // Convert the currentId to a string
     const currentId = String(this.currentId);
     console.log(currentId);
 
     // Store the currentId in localStorage
     localStorage.setItem("currentId", currentId);
      }

    }

  //Loading values start
  load(){
    if (localStorage.getItem("recipes")){
    const recipesJson = localStorage.getItem("recipes");
    this.recipes=JSON.parse(recipesJson);
    }

    if (localStorage.getItem("currentId")){
    const currentId = localStorage.getItem("currentId");
    this.currentId = Number(currentId);    
    }    
  }
  //Loading values end

//   printDiv start
    printDiv() {
   
    let recipeHtmlList = [];
    let a = 0;
    
    
    const recipeList = document.querySelector('#divRecipes');
    for(let i=0; i< this.recipes.length;i++){
        let recipeItem = this.recipes[i].recipe;
        const recipeHtml = createRecipeHtml(
            recipeItem.name,
            recipeItem.description,
            
            recipeItem.type,
            recipeItem.image,
            recipeItem.ingredients,
           
            recipeItem.id
        );
        // Push it to the recipeHtmlList array
        recipeHtmlList.push(recipeHtml);
        }
     // Create the tasksHtml by joining them with space in between
        
     const recipeHtml = recipeHtmlList.join("\n");

     // Set the inner html of the tasksList on the page
    recipeList.innerHTML = recipeHtml;   
    this.save(); 
    }
    // printDiv end


    deleteRecipe(recipeId){
        for (let i=0;i<this.recipes.length;i++){   
            if(recipeId === this.recipes[i].recipe.id){
                this.recipes.splice(i,1);
             } else {
            console.log("Recipe ID not found ");

            }
        }
        this.printDiv();
    }



}