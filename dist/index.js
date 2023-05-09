const request = new XMLHttpRequest();
import { get_process, get_campos } from '../dist/functions.js'
let ctrlBoxSecondary = document.querySelector(".container__box-secundary");
let formGetTipi = document.querySelector("#gen_tipi");
get_process()
document.querySelector("a[type=menu]").addEventListener("click", (e) => {
    // e.preventDefault();
    let tipi_generada = "";
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
    let toLocal = JSON.parse(`${get_campos()}`);
    localStorage.setItem(toLocal.dni_cl, get_campos());
    ctrlBoxSecondary.innerHTML = "";
    formGetTipi.reset();
})