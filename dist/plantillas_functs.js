import {
    PlantillasBitacora
} from '../dist/data/plantillas_b.js'
let ctrl_proccess = document.querySelector("#ctrl_proccess");
let hora = new Date();
let ctrlBoxSecondary = document.querySelector(".container__box-secundary");
let boxMaster = document.querySelector('.bxfsh')
ctrl_proccess.addEventListener("change", (ele) => {
    let elementoARellenar = "";

    let rellenar = "";
    if (ele.target.value === 'cerrado' || ele.target.value === 'noc' || ele.target.value === 'visita_tecnica') {
        boxMaster.classList.remove('_hidden')
        let dentroDelSelect = boxMaster.querySelector('#categoria')
        dentroDelSelect.innerHTML = '<option value="0" disabled="" selected="">Seleccione...</option>'
        PlantillasBitacora.forEach((e) => {
            rellenar += `<option value="${e.categoria}">${e.categoria.replaceAll("_"," ")}</option>`;
        })
        dentroDelSelect.innerHTML += rellenar;
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
                    document.querySelector(`select#${ele}`).innerHTML = '<option value="0" disabled="" selected="">Seleccione...</option>'
                    let template = "";
                    // console.log(PlantillasBitacora[i][keys[id]])
                    PlantillasBitacora[i].proceso[keys[id]].forEach((element) => {
                        document.querySelector("select#" + ele).innerHTML += `<option value="${element}">${element}</option>`
                        // if (keys[id] === PlantillasBitacora[i].proceso)
                    })
                    // console.log(document.querySelector(`#${ele}`))
                    document.querySelector(`#${ele}`).innerHTML += template
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
    // e.preventDefault();
    let tipi_generada = "";
    tipi_generada += get_campos("nojson")
    // document.querySelectorAll("input[type=checkbox]").forEach(e => {
    //     if (e.checked == true) {
    //         tipi_generada += e.parentNode.innerText.replace(/\[.+?]/g, "") + " /"
    //     }
    // })
    var content = document.getElementById('copy_gen');
    content.innerHTML = tipi_generada;
    content.style.display = "block";
    content.focus();
    content.select();
    document.execCommand('copy')
    content.style.display = "none";
})