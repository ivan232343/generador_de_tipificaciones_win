import { procesos } from '../dist/data/procesos.js';

let ctrl_proccess = document.querySelector("#ctrl_proccess");
let hora = new Date();
let ctrlBoxSecondary = document.querySelector(".container__box-secundary");

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
    var diff, vt, data
    if (onu >= -25.5 && olt >= -30.0) {
        diff = onu > olt ? onu - olt : olt - onu
        vt = diff <= 5.5 ? false : true
    } else {
        vt = true
    }
    return data = { "diferencia": diff, "require": vt }
}
validate_potencia.addEventListener("input", (i) => {
    let nums = i.target.value.split("/");
    // let diff = 0;
    nums.onu = parseFloat(nums[0])
    nums.olt = parseFloat(nums[1])
    let val = calc_potencia(nums.onu, nums.olt)
    console.log(val)
    // if (nums.onu >= -25.5 && nums.olt >= -30.0) {
    //     if (nums.onu > nums.olt) {
    //         diff = nums.onu - nums.olt
    //     } else if (nums.onu < nums.olt) {
    //         diff = nums.olt - nums.onu
    //     }
    //     console.log(diff)
    //     if (diff <= 5.5) {
    //         // if (chng_icons.classList.contains("mdi-close-circle-outline")) {
    //         chng_icons.classList.remove("mdi-close-circle-outline")
    //         chng_icons.classList.add("mdi-checkbox-marked-circle-outline")
    //         // }
    //         console.log(" no requiere visita")
    //     } else {
    //         chng_icons.classList.add("mdi-close-circle-outline")
    //         chng_icons.classList.remove("mdi-checkbox-marked-circle-outline")
    //         console.log(" require visita ")
    //     }
    // }
    // else {
    //     chng_icons.classList.add("mdi-close-circle-outline")
    //     chng_icons.classList.remove("mdi-checkbox-marked-circle-outline")
    //     console.log(" require visita ")
    // }
})

export function get_campos(format = "json") {
    let toLocalStorage = "";
    document.querySelectorAll("input[type=text],#obs_cl").forEach(e => {
        if (format == "json") {
            toLocalStorage += `{"${e.name}":"${e.value}"}`
            toLocalStorage = toLocalStorage.replace("}{", ",")
        } else {
            toLocalStorage += `${e.parentNode.innerText}: ${e.value}/ `
        }
    })
    toLocalStorage += `{"createOn":"${hora.getDate()}/${hora.getMonth() + 1}/${hora.getFullYear()}T${hora.getHours()}:${hora.getMinutes()}"}`
    toLocalStorage = toLocalStorage.replaceAll("}{", ",")
    return toLocalStorage;
}

ctrl_proccess.addEventListener("change", (ele) => {
    let elementoARellenar = "";
    procesos.forEach(u => {
        // console.log(u)
        if (u.code_name === ele.target.value) {
            u.listado.forEach(i => {
                // console.log();
                elementoARellenar += `
                    <div class="container__box-item">
                        <label for="${i.id}">
                            <input type="checkbox" name="${i.id}" id="${i.id}"> ${i.desc}
                        </label>
                    </div>
                    `
            })
            // console.log(elementoARellenar);
            ctrlBoxSecondary.innerHTML = elementoARellenar
        }
    })
})

export const buildCards = (dni_cl, tkt_cl, nodo_serv, mac_serv, potencia_olt, pot_calc, obs_cl, nombre_cl) => {
    let cardBox = document.querySelector(".card.box");
    const initCard = document.createElement("div");
    cardBox.appendChild(initCard);
    initCard.classList.add("card", "content");
    initCard.innerHTML += `
    <div class="card tittle">
        <div class="name_cliente">
            <h4>${nombre_cl}</h4>
        </div>
        <div class="subname_cliente __flex">
            <div class="item">${dni_cl}</div>
            <div class="item">${tkt_cl}</div>
        </div>
    </div>
    <div class="card contenido __flex -column">
        <div class="item">nodo: ${nodo_serv}</div>
        <div class="item">mac: ${mac_serv}</div>
        <div class="item">potencia: ${potencia_olt}</div>
        <div class="item">degradado: Si | No ${pot_calc}</div>
        <div class="item">Observaciones: ${obs_cl}</div>
    </div>
    <div class="card footer __flex">
        <div class="item">boton 1</div>
        <div class="item">boton 2</div>
        <div class="item">boton 3</div>
    </div>
     `
}