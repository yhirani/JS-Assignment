let counter=1;

function nextImg(){
    if(counter == 1)
        document.getElementById("prevImg").style.display="block";

    counter++;

    switch (counter){
        case 1:
            document.getElementById("img").src="Images/1.jpg";
            break;
        case 2:
            document.getElementById("img").src="Images/2.webp";
            break;
        case 3:
            document.getElementById("img").src="Images/3.jpg";
            break;
        case 4:
            document.getElementById("img").src="Images/22.jpg";
            document.getElementById("nextImg").style.display="none";
            break;
    }


}

function prevImg(){

    counter--;

    if(counter != 4)
        document.getElementById("nextImg").style.display="block";

    switch (counter){
        case 1:
            document.getElementById("img").src="Images/1.jpg";
            document.getElementById("prevImg").style.display="none";
            break;
        case 2:
            document.getElementById("img").src="Images/2.webp";
            break;
        case 3:
            document.getElementById("img").src="Images/3.jpg";
            break;
        case 4:
            document.getElementById("img").src="Images/22.jpg";
            break;
    }


}