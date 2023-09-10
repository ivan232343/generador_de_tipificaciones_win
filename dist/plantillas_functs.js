import {
    PlantillasBitacora
} from '../dist/data/plantillas_b.js'
let ctrl_proccess = document.querySelector("#ctrl_proccess");
let hora = new Date();
let ctrlBoxSecondary = document.querySelector(".container__box-secundary");
let boxMaster = document.querySelector('.bxfsh')
ctrl_proccess.addEventListener("change", (ele) => {
    let elementoARellenar = "";
    for (let i = 0; i < ctrlBoxSecondary.children.length; i++) {
        if (!ctrlBoxSecondary.children[i].classList.contains("_hidden")) {
            ctrlBoxSecondary.children[i].classList.add("_hidden")
        }

    }
    console.log()
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
        document.querySelector(".bxncts").classList.remove("_hidden")
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
        numberformat = a.join("-")
        numberformat = a[1] == "" ? numberformat.replace("-", "") : numberformat;
        let ticketID = document.querySelector('#tkt_cl').value
        tipi_generada = `NO CONTESTA/Intentamos comunicarnos con el cliente a los números ${numberformat}. Sin éxito, se retoma el caso en el transcurso del día.\t${ticketID}`
    } else if (status === 'agenda_prolongada' || status === 'validacion') {
        let nombreCl = document.getElementById("nombre_cl").value;

        tipi_generada = `${status.toUpperCase().replace("_", " ")}/Contacto:${nombreCl},Número ${numero}.Contactar el 9/08/2023 a las 09:00\t${ticketID}`
        'AGENDA PROLONGADA/Contacto: LIVIA MONICA VERTIZ BRIOLO, Número: 994041287. Contactar el 9/08/2023 a las 09:00'
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

