let btn = document.getElementById("btn");

btn.addEventListener("click",function (){
    let ourRequest = new XMLHttpRequest();

    ourRequest.open('GET', 'https://reqres.in/api/users');
    ourRequest.onload = function (){
        let ourData = JSON.parse(ourRequest.responseText);
        addData(ourData);
    };

    ourRequest.send();

});

function addData(x){
    let checker=document.getElementById('info');
    if(checker===null){
        for(let i = 0; i < x.data.length; i++){
            let table=document.getElementById("table");

            let tr = document.createElement("tr");
            tr.setAttribute('id','info')
            tr.setAttribute('class','info')

            let sNo = document.createElement("td");

            sNo.appendChild(document.createTextNode(x.data[i].id));
            tr.appendChild(sNo);

            let fName = document.createElement("td");
            fName.appendChild(document.createTextNode(x.data[i].first_name));
            tr.appendChild(fName);

            let lName = document.createElement("td");
            lName.appendChild(document.createTextNode(x.data[i].last_name));
            tr.appendChild(lName);
            console.log(lName);

            let em = document.createElement("td");
            em.appendChild(document.createTextNode(x.data[i].email));
            tr.appendChild(em);

            let ava = document.createElement("td");
            let img = document.createElement('img');
            img.setAttribute('src', x.data[i].avatar);

            ava.appendChild(img);
            tr.appendChild(ava);

            table.appendChild(tr);

            btn.style.display="none";
        }

    }

}