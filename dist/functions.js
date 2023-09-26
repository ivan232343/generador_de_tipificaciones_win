import {
    procesos
} from '../dist/data/procesos.js';
import {
    status_tickets
} from './data/base.js';
let ctrl_proccess = document.querySelector("#ctrl_proccess");
let hora = new Date();
let ctrlBoxSecondary = document.querySelector(".container__box-secundary");
const PotenciaBox = document.querySelector(".-potencias")

export function get_status() {
    let rellenar = "";
    status_tickets.forEach(e => {
        rellenar += `<option value="${e.name.replaceAll(" ", "_")}">${e.name}</option>`;
    })
    ctrl_proccess.innerHTML += rellenar;
}
export function get_process() {
    let rellenar = "";
    procesos.forEach(e => {
        rellenar += `<option value="${e.code_name}">${e.nombre}</option>`;
    })
    ctrl_proccess.innerHTML += rellenar;
}

let validate_potencia = document.querySelector("#potencia_olt")
let chng_icons = document.querySelector(".mdi_chng")

function calc_potencia(onu, olt) {
    var diff, vt
    // console.log(onu, olt)
    if (onu >= -25.5 && olt >= -30.0) {
        diff = onu < olt ? onu - olt : olt - onu
        vt = diff <= -5.5 ? true : false
    } else {
        diff = -30.0
        vt = true
    }
    return {
        "diferencia": diff,
        "require": vt
    }
}

PotenciaBox.querySelector("#potencia_olt").addEventListener("input", (lis) => {
    let onu = parseFloat(PotenciaBox.querySelector("#potencia_onu").value)
    let olt = parseFloat(lis.target.value)
    let val = calc_potencia(onu, olt)
    PotenciaBox.querySelector("#potencia_status").value = val.diferencia.toFixed(2)
    if (val.require) {
        chng_icons.classList.add("mdi-close-circle-outline")
        chng_icons.classList.remove("mdi-checkbox-marked-circle-outline")
    } else {
        chng_icons.classList.remove("mdi-close-circle-outline")
        chng_icons.classList.add("mdi-checkbox-marked-circle-outline")
    }
})

export function get_campos(format = "json", type = "general") {
    let toLocalStorage = "";
    if (format == "json") {
        let hora = new Date();
        document.querySelectorAll("input[type=text],#obs_cl,select").forEach(e => {
            toLocalStorage += `{"${e.name}":"${e.value.replace(/\n/g, '\\n')}"}`
        })
        toLocalStorage += `{"createOn":"${hora.getDate()}/${hora.getMonth() + 1}/${hora.getFullYear()}T${hora.getHours()}:${hora.getMinutes()}"}`
        toLocalStorage = toLocalStorage.replaceAll("}{", ",")
    } else {
        if (type == "general") {
            document.querySelectorAll("input[type=text],#obs_cl,select").forEach(e => {
                toLocalStorage += `_${e.name}: ${e.value}/`
            })
            toLocalStorage = toLocalStorage.replaceAll("/_", "/").replace(/.$/, '').replace("_", '')
        }
    }
    return toLocalStorage;
}
export const buildCards = (dni_cl, tkt_cl, nodo_serv, mac_serv, potencia_olt, potencia_onu, potencia_status, obs_cl, nombre_cl, ctrl_proccess) => {
    let cardBox = document.querySelector(".card.box");
    const initCard = document.createElement("div");
    const get_potencia = (potencia_olt != "" || potencia_onu != "") ? `${potencia_olt}dBm / ${potencia_onu}dBm` : `Sin datos`;
    const isDegradado = (potencia_onu >= -25.5 && potencia_olt >= -30.0) ? (potencia_onu - potencia_olt) <= -5.5 ? 'no' : 'si ' : 'si';
    cardBox.appendChild(initCard);
    initCard.classList.add("card", "content");
    initCard.innerHTML += `
    <div class="card tittle">
        <div class="name_cliente">
            <h4>${nombre_cl}</h4>
        </div>
        <div class="subname_cliente __flex">
            <div data-dni= "${dni_cl}" class="item">${dni_cl}</div>
            <div class="item">${tkt_cl}</div>
        </div>
    </div>
    <div class="card contenido __flex -column">
        <div class="item">nodo: ${nodo_serv}</div>
        <div class="item">mac: ${mac_serv}</div>
    <div class="item">potencia:${get_potencia}</div>
        <div class="item">degradado: ${isDegradado} /  ${potencia_status != "" ? potencia_status + 'dBm' : 'sin datos'}</div>
        <div class="item">Observaciones: ${obs_cl.length >= 100 ? obs_cl.substring(0, 100) + " ..." : obs_cl}</div>
        </div>
        <div class="card footer __flex notext">
        <div class="item">Estado: ${ctrl_proccess.replaceAll("_", " ")}</div>
        <div class="item">editar</div>
        <div class="item">+</div>
    </div>
     `
}



// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join(',#').replace(/^./, "#$&"));