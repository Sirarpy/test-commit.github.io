
let list = document.querySelectorAll("nav  ul li  a");

class navigation{

    liClick(){
        this.onclick = function(){
            let elem = document.querySelectorAll('#navBar li a');
            for (let j = 0; j<elem.length; j++){
                elem[j].classList.remove('active');
            }
            this.className = "active";
        }
    }
}

let li  = new navigation();

for (let i = 0; i<list.length; i++){
    list[i].onclick = li.liClick;
}


function toggleMenu() {
    let menuBox = document.getElementById('navBar');
    if(menuBox.style.display === "block") { // if is menuBox displayed, hide it
        menuBox.style.display = "none";
    }
    else { // if is menuBox hidden, display it
        menuBox.style.display = "block";
    }
}