var a=prompt("What would you like to do");
 var arr=["Hello Everyone"];
 while(a!="quit"){
     if(a=="New"){
        var add=prompt("Add item");
        arr.push(add);
        // arr.forEach(function(todo,i){
        //     console.log(i+":"+todo);
        // });
    }
    else if(a=="List"){  
        arr.forEach(function(todo,i){
            console.log(i+":"+todo+"\n");
        });
    }
    // else if(a=="quit"){
    //     console.log("Thanks")
    // }
    else if(a=="del"){
        index=prompt("Enter index number to dellete todo");
        arr.splice(index,1);   
    }
 var a=prompt("What would you like to do");
}
alert("Thank you for visiting our store");
