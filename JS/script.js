 window.onload = init;
   
 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
             let element = document.createElement("li");

             var button = document.createElement("BUTTON"); 
             var text = document.createTextNode("eliminar");
             var button2 = document.createElement("BUTTON"); 
             var text2 = document.createTextNode("realizada");  
             button.appendChild(text);
             button2.appendChild(text2);


             element.innerText = task;
             /*element.addEventListener("click", () => {
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
             });*/
             button.addEventListener("click", function(){
                let parent = this.parentNode;
                let Sparent = parent.parentNode;
                if(Sparent){
                    Sparent.removeChild(parent);
                    
                }
             });

             button2.addEventListener("click", function(){
                let parent = this.parentNode;
                parent.style.textDecoration = "line-through";
             });
            // Añadir un boton para marcar de finalizado
            // Elmine de la lista

             if (priority) {
                 this.listTask.unshift({
                     element,
                     task
                 });
                 element.appendChild(button);
                 element.appendChild(button2);
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task
                 });
                 element.appendChild(button);
                 element.appendChild(button2);
                 this.listHTML.appendChild(element);
                 
             }
         }
     }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(task, form.important.checked);

     });
 }