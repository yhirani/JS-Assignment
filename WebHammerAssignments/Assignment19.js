var counter = localStorage.getItem("counter");

if(counter!== null){
    counter++;
    localStorage.removeItem("counter");
}

else
    counter=1;

document.getElementById("number").innerHTML= counter;

localStorage.setItem("counter",counter);

