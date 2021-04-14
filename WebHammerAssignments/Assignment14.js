let counter = 0;

function imgCounter(){
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
            break;
        default:
            document.getElementById("img").src="Images/11.jpg";
    }
}