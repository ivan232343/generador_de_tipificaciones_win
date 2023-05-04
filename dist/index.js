const request = new XMLHttpRequest();
let ctrl_proccess = document.querySelector("#ctrl_proccess"), retornar;
let ctrlBoxSecondary = document.querySelector(".container__box-secundary")
let formGetTipi = document.querySelector("#gen_tipi");
let global_params;
let toLocalStorage = "";
get_process()
ctrl_proccess.addEventListener("change", (ele) => {
    let elementoARellenar = "";
    request.open("GET", "data/process.json", true);
    request.onload = (e) => {
        retornar = JSON.parse(e.target.response);
        // console.log(retornar.procesos);
        retornar.procesos.forEach(u => {
            // console.log(u)
            if (u.code_name === ele.target.value) {
                u.listado.forEach(i => {
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
        });
    }
    request.send()
    // console.log("change", ele.target.value)
})

console.log(formGetTipi.childNodes)
document.querySelector("a[type=menu]").addEventListener("click", (e) => {
    // e.preventDefault();
    let tipi_generada = "";
    document.querySelectorAll("input[type=text],#obs_cl").forEach(e => {
        // console.log(e.parentNode)
        tipi_generada += `${e.parentNode.innerText}: ${e.value}/ `
        // console.log(e.name)
        toLocalStorage += `{"${e.name}":"${e.value}"}`
    })
    toLocalStorage = toLocalStorage.replaceAll("}{", ",")
    console.log(toLocalStorage);
    document.querySelectorAll("input[type=checkbox]").forEach(e => {
        if (e.checked == true) {
            tipi_generada += e.parentNode.innerText.replace(/\[.+?]/g, "") + " /"
        }
    })
    // console.log(settingItem);
    var content = document.getElementById('copy_gen');
    content.innerHTML = tipi_generada;
    content.style.display = "block";
    content.focus(); content.select(); document.execCommand('copy')
    content.style.display = "none";
    // navigator.clipboard.writeText(tipi_generada);
})
document.querySelector("button[type=reset]").addEventListener("click", (e) => {
    e.preventDefault()
    console.log(e);
})