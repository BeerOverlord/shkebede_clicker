let count1 = localStorage.getItem("count1");
document.getElementById("out").textContent = count1;
const button = document.getElementById("skibidibutton");

let levelugprade = 0;
/*
const button_skin0 = document.getElementById("button_skin0");
const button_skin1 = document.getElementById("button_skin1");
const button_skin2 = document.getElementById("button_skin2");
const button_delete = document.getElementById("button_delete");

button_skin0.onclick = set_to_skin_default;
button_skin1.onclick = set_to_skin_1;
button_skin2.onclick = set_to_skin_2;
*/

////////////////////////////////////////////////////// СИСТЕМА СКИНОВ //////////////////////////////////////////////////
/*
let skin = localStorage.getItem("skin");

function button_skin() {
    if (skin === 1) {
        button.classList.add('button_skin_1');
        button.classList.remove('button_skin_2');
        button.classList.remove('button_skin_default');
    }
    else if (skin === 2) {
        button.classList.remove('button_skin_1');
        button.classList.add('button_skin_2');
        button.classList.remove('button_skin_default');
    }
    else {
        button.classList.remove('button_skin_1');
        button.classList.remove('button_skin_2');
        button.classList.add('button_skin_default');
    }
}

button_skin();

function set_to_skin_1() {
    skin = 1;
    localStorage.setItem("skin", skin);
}

function set_to_skin_2() {
    skin = 2;
    localStorage.setItem("skin", skin);
}

function set_to_skin_default() {
    skin = 0;
    localStorage.setItem("skin", skin);
}








function delete_stats() {
    delete localStorage.getItem('count1');
}

////////////////////////////////////////////////////// СИСТЕМА КЛИКОВ И АПГРЕЙДОВ //////////////////////////////////////////////////

/*
function upgrade_to_0(){
    levelugprade = 0;
    localStorage.setItem("levelupgrade", levelupgrade);
}

function upgrade_to_1(){
    levelugprade = 1;
    localStorage.setItem("levelupgrade", levelupgrade);
}
*/

function click_upgrade0() {
    count1 ++;
    localStorage.setItem("count1", count1);

    document.getElementById("out").textContent = count1;
}

function click_upgrade1() {
    count1 ++;
    count1 ++;
    localStorage.setItem("count1", count1);

    document.getElementById("out").textContent = count1;
}

function upgrade() {
    if (levelugprade === 0) {
        button.onclick = click_upgrade0;
    }
    else if (levelugprade === 1) {
        button.onclick = click_upgrade1;
    }
}

upgrade();