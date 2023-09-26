import {
    PlantillasBitacora
} from '../dist/data/plantillas_b.js'
let ctrl_proccess = document.querySelector("#ctrl_proccess");

const ocultar = (elemento) => { document.querySelector(elemento).classList.remove("_hidden") }
const mostrar = (elemento) => { document.querySelector(elemento).classList.add("_hidden") }
let ctrlBoxSecondary = document.querySelector(".container__box-secundary");
let boxMaster = document.querySelector('.bxfsh')
ctrl_proccess.addEventListener("change", (ele) => {
    let elementoARellenar = "";
    for (let i = 0; i < ctrlBoxSecondary.children.length; i++) {
        if (!ctrlBoxSecondary.children[i].classList.contains("_hidden")) {
            ctrlBoxSecondary.children[i].classList.add("_hidden")
        }
    }
    let rellenar = "";
    if (ele.target.value === 'cerrado' || ele.target.value === 'noc' || ele.target.value === 'visita_tecnica') {
        boxMaster.classList.remove('_hidden')
        let dentroDelSelect = boxMaster.querySelector('#categoria')
        dentroDelSelect.innerHTML = '<option value="0" disabled="" selected="">Seleccione...</option>'
        PlantillasBitacora.forEach((e) => {
            rellenar += `<option value="${e.categoria}">${e.categoria.replaceAll("_", " ")}</option>`;
        })
        dentroDelSelect.innerHTML += rellenar;
    } else if (ele.target.value === 'no_contesta') {
        ocultar(".bxncts")
    } else if (ele.target.value === 'agenda_prolongada' || ele.target.value === 'validacion') {
        ocultar(".bxncts"); ocultar(".bxagdt ")
    } else if (ele.target.value === 'extension_de_tiempo') {
        // abrir pop up para que salga plantilla del correo
    } else {
        boxMaster.classList.add('_hidden')
    }
    boxMaster.querySelector('#categoria').addEventListener('change', (e) => {
        const keys = Object.keys(PlantillasBitacora[0].proceso);
        for (let i = 0; i < e.target.length - 1; i++) {
            // console.log(PlantillasBitacora[i])
            if (PlantillasBitacora[i].categoria == e.target.value) {
                for (let id = 0; id < keys.length; id++) {
                    const ele = keys[id];
                    document.querySelector("select#" + ele).innerHTML = '<option value="0"  selected="">Seleccione...</option>'
                    let template = "";
                    // console.log(PlantillasBitacora[i][keys[id]])
                    PlantillasBitacora[i].proceso[keys[id]].forEach((element) => {
                        document.querySelector("select#" + ele).innerHTML += `<option value="${element}">${element}</option>`
                        // if (keys[id] === PlantillasBitacora[i].proceso)
                    })
                    // console.log(document.querySelector(`#${ele}`))
                    document.querySelector("select#" + ele).innerHTML += template
                    // console.log(ele === document.getElementById(ele).name);
                }
                boxMaster.querySelectorAll("._hidden").forEach((e) => {
                    e.classList.remove("_hidden")
                })
                // element.querySelector("select").innerHTML +=  `<option value="${e.code_name}">${e.nombre}</option>`;

            }
        }
        // console.log(PlantillasBitacora)
    })
})
document.querySelector("a[type=menu]").addEventListener("click", (e) => {
    let tipi_generada = "";
    let FinishText = "";
    let status = ctrl_proccess.value
    if (
        status === 'cerrado' ||
        status === 'visita_tecnica' ||
        status === 'noc'
    ) {
        let a = [];
        document.querySelectorAll("select").forEach((element) => {
            if (element.name !== "ctrl_proccess" && element.value !== "0" && element.name !== "select_plantillac") {
                a.push(element.value.replace(/_/g, " "));
            }
        });
        FinishText = document.querySelector("#obs_cl").value
        tipi_generada = `${a.join("/")}_ ${FinishText} ${status === 'cerrado' ? " cl brinda conformidad se cierra tkt" : ""}`
    } else if (status === 'no_contesta') {
        let a = [];
        let numberformat = "";
        document.querySelectorAll("input.numero").forEach((element) => {
            a.push(element.value);
        });
        numberformat = a[1] == "" ? a.join(" -").replace("-", "") : a.join(" -");
        let ticketID = document.querySelector('#tkt_cl').value
        tipi_generada = `NO CONTESTA/Intentamos comunicarnos con el cliente a los números ${numberformat}. Sin éxito, se retoma el caso en el transcurso del día.\t${ticketID}`
    } else if (status === 'agenda_prolongada' || status === 'validacion') {
        let a = [];
        let numberformat = "";
        document.querySelectorAll("input.numero").forEach((element) => {
            a.push(element.value);
        });
        numberformat = a[1] == "" ? a.join(" -").replace("-", "") : a.join(" -");
        let nombreCl = document.getElementById("nombre_cl").value;
        nombreCl = nombreCl.includes("/") ? nombreCl.split("/")[0] : nombreCl
        let splitfecha = document.getElementById("agendar_a").value.split("T")
        let fecha = []
        fecha.name = splitfecha[0]
        fecha.hora = splitfecha[1]
        fecha.year = fecha.name.split("-")[0]
        fecha.month = fecha.name.split("-")[1]
        fecha.day = fecha.name.split("-")[2]
        let format = `Contactar el ${fecha.day}/${fecha.month}/${fecha.year} a las ${fecha.hora}`
        let ticketID = document.querySelector('#tkt_cl').value
        tipi_generada = `${status.toUpperCase().replace("_", " ")}/Contacto: ${nombreCl}, Número: ${numberformat}. ${format}\t${ticketID}`;
    } else {

    }
    var content = document.getElementById('copy_gen');
    content.innerHTML = tipi_generada;
    content.style.display = "block";
    content.focus();
    content.select();
    document.execCommand('copy')
    content.style.display = "none";
})

document.querySelectorAll("#numero1,#numero2").forEach((e) => {
    e.addEventListener("input", (ele) => {
        validarIngreso(ele.target.value, ele.target.id)
    })
})
function validarIngreso(inputValue, idvalidate) {
    // Verificar si el valor ingresado es un número
    if (!isNaN(inputValue)) {
        // Verificar si el valor del input comienza con 9 o 0
        if (inputValue.startsWith('9') || inputValue.startsWith('0')) {
            if (inputValue.length > 9) {
                document.getElementById(idvalidate).value = inputValue.slice(0, -1);
            }
        } else {
            document.getElementById(idvalidate).value = ""
        }
    }
}
