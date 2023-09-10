const request = new XMLHttpRequest();

import {
    get_status,
    get_campos,
    buildCards
} from './functions.js'
let ctrlBoxSecondary = document.querySelector(".container__box-secundary");

let formGetTipi = document.querySelector("#gen_tipi");

let hora = new Date();
window.onload = () => {
    get_status()
    getToday()
}


formGetTipi.addEventListener("submit", (e) => {
    e.preventDefault();
    let toLocal = JSON.parse(`${get_campos()}`);
    localStorage.setItem(toLocal.dni_cl, get_campos());
    buildCards(
        toLocal.dni_cl,
        toLocal.tkt_cl,
        toLocal.nodo_serv,
        toLocal.mac_serv,
        toLocal.potencia_olt,
        toLocal.potencia_onu,
        toLocal.potencia_status,
        toLocal.obs_cl,
        toLocal.nombre_cl,
        toLocal.ctrl_proccess
    )
    // ctrlBoxSecondary.innerHTML = "";
    formGetTipi.reset();
    document.querySelector('.bxfsh').classList.add('_hidden')
})

const getToday = () => {
    let today_regex = `${hora.getDate()}\/${hora.getMonth() + 1}\/${hora.getFullYear()}T[0-9]+:[0-9]+`
    for (let i = 0; i < localStorage.length; i++) {
        let prueba = JSON.parse(localStorage.getItem(localStorage.key(i)))
        if (prueba.createOn.search(today_regex) === 0) {
            buildCards(
                prueba.dni_cl,
                prueba.tkt_cl,
                prueba.nodo_serv,
                prueba.mac_serv,
                prueba.potencia_olt,
                prueba.potencia_onu,
                prueba.potencia_status,
                prueba.obs_cl,
                prueba.nombre_cl,
                prueba.ctrl_proccess
            )
        }
    }
}
document.querySelectorAll(".cabecera .item").forEach((e) => {
    e.addEventListener("click", (l) => {
        document.querySelectorAll("main div.container").forEach(e => e.classList.add("_hidden"))
        document.querySelector(`#${l.target.dataset.topen}`).classList.remove("_hidden")
        console.log(l.target.dataset.topen)
    })
})
document.getElementById("mac_serv").addEventListener("input", (e) => {
    let valueMac = e.target.value
    e.target.value = valueMac.replace("48575443", "HWTC")
})
document.getElementById("tkt_cl").addEventListener("input", (e) => {
    let valueTkt = e.target.value.replaceAll("AT-", "")
    e.target.value = 'AT-' + valueTkt
})

function LimitChar() {
    document.querySelectorAll(".card.contenido").forEach((e) => {
        e.textContent = e.textContent.substring(0, 300)
    });
}
// const reload = () => document.getElementById("hist_today").innerHTML = "" && getToday()