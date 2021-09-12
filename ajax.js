var demo=document.getElementById("demo");
function sandeep() {
    

// creating 


var xhttp=new XMLHttpRequest();
// var list=[];


// event listner


 xhttp.onreadystatechange=function() {
     
 
    // condition

    if(this.readyState ==4&&this.status==200){
        var response =JSON.parse(this.responseText);
       
        var items=response.g;
        console.log(items);
        var output="";
        
        for(var i=0;i<items.length;i++){
            output+=`<tr>
               
                <td>${items[i].slno}</td>
                <td>${items[i].Name}</td>
                <td>${items[i].Unit}</td>
                <td>${items[i].Quantity}</td>
                <td>${items[i].Dept}</td>
                <td>${items[i].Notes}</td>
              </tr>`
        }
        
        // console.log(output);
        document.getElementById("demo").innerHTML=output;



    // demo.innerHTML = this.responseText;

    }
    
}
xhttp.open("GET","grocery.json",true);
xhttp.send();
}