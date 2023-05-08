const request = new XMLHttpRequest();
let ctrl_proccess = document.querySelector("#ctrl_proccess"), retornar;
let ctrlBoxSecondary = document.querySelector(".container__box-secundary")
let formGetTipi = document.querySelector("#gen_tipi");
let global_params;
var toLocalStorage = "";
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
document.querySelector("a[type=menu]").addEventListener("click", (e) => {
    // e.preventDefault();
    tipi_generada = "";
    tipi_generada += get_campos("nojson")
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
formGetTipi.addEventListener("submit", (e) => {
    e.preventDefault();
    toLocal = JSON.parse(`${get_campos()}`);
    localStorage.setItem(toLocal.dni_cl, get_campos());
    ctrlBoxSecondary.innerHTML = "";
    formGetTipi.reset();
})