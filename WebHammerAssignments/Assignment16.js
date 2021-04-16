var counter=1;
var count;

function shifter(j){
    if(j%2===1){
        for(let i=1; i<12; i=i+2){
            console.log(i);
            let oldCell = document.getElementById(i.toString());

            oldCell.style.display="none";

        }
        for(let i=2; i<=12; i=i+2){
            let oldCell = document.getElementById(i.toString());

            oldCell.style.display="block";

        }
    }else{
        for(let i=2; i<=12; i=i+2){
            let oldCell = document.getElementById(i.toString());

            oldCell.style.display="none";

        }
        for(let i=1; i<=12; i=i+2){
            let oldCell = document.getElementById(i.toString());

            oldCell.style.display="block";

        }
    }
    counter++;
    count = setTimeout("shifter(counter)", 500);
}

function resetTime(){
    clearTimeout(count);
}

