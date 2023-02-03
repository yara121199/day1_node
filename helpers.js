const fs = require('fs');
function add (data) {
    if(!fs.existsSync('./database.json')){
        fs.writeFileSync('./database.json',JSON.stringify([]))
    }
     const todostring = fs.readFileSync('./database.json','utf-8')
     const todolist =  JSON.parse(todostring);
    const todo = {
    id: todolist.length+1, 
    title : data.title,
    body : data.body,
    checked:false
     }

     todolist.push(todo)

     fs.writeFileSync('./database.json', JSON.stringify(todolist))

}

function edit (data) {
    const todostring = fs.readFileSync('./database.json','utf-8')
    const todolist =  JSON.parse(todostring);
     const result = todolist.map((elm,index,arr)=>
     {
        if(data.id == elm.id)
        {
            elm.title=data.title;
            elm.body=data.body;
        }
     })

     fs.writeFileSync('./database.json', JSON.stringify(todolist))
}

function list (data) {
    const todostring = fs.readFileSync('./database.json','utf-8')
    const todolist =  JSON.parse(todostring);
    if(data[0] == "all")
    {
       console.log(todostring);
    }
   else if(data[0] == "checked")
    {
       const filterarray = todolist.filter(elm => elm.checked)
       console.log(filterarray);
    }
    else if(data[0] == "unchecked")
    {
       const filterarray = todolist.filter(elm => !elm.checked)
       console.log(filterarray);
    }
}
function remove(data){
    const todostring = fs.readFileSync("./database.json", "utf-8");
    const todolist = JSON.parse(todostring);
  
    todolist.filter((elm, index) => {
      if (data.id == elm.id) {
        todolist.splice(index, 1);
      }
    });
  fs.writeFileSync("./database.json", JSON.stringify( todolist ));
  } 
  function check(data){
    const todostring = fs.readFileSync("./database.json", "utf-8");
    const todolist = JSON.parse(todostring);
  
     todolist.map((elm) => {
      if (data.id == elm.id) {
        elm.checked = true;
      }
    });
  
  fs.writeFileSync("./database.json", JSON.stringify(todolist));
  }
  function uncheck(data){
    const todostring = fs.readFileSync("./database.json", "utf-8");
    const todolist = JSON.parse(todostring);
  
     todolist.map((elm) => {
      if (data.id == elm.id) {
        elm.checked = false;
      }
    });
  
  fs.writeFileSync("./database.json", JSON.stringify( todolist ));
  }
module.exports = {
   add,edit,list,remove,check,uncheck
}