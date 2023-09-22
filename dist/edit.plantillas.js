// traemos el nuevo json
window.toEdit;
let categorySelect = document.getElementById("category")
const requestURL =
    "http://192.168.18.76:8080/ProcessListWIN_offline/dist/data/plantillas_b.json";
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.getResponseHeader("Content-type", "application/json");
request.send();
request.onload = function () {
    window.toEdit = JSON.parse(request.response);
    window.toEdit.forEach(cat => {
        let opTemp = document.createElement("option")
        opTemp.value = cat.categoria
        opTemp.textContent = cat.categoria.replaceAll("_", " ")
        categorySelect.appendChild(opTemp)
    });
};
function llenarTextArea(clave, valor) {
    let textArea = document.getElementById(clave);
    let texto = "";

    for (let i = 0; i < window.toEdit.length; i++) {

        if (window.toEdit[i].categoria === valor && window.toEdit[i].proceso.hasOwnProperty(clave)) {
            // console.log(window.toEdit[i].proceso[clave]);
            texto = window.toEdit[i].proceso[clave].join("\n");
        }
    }

    textArea.value = texto;
}
const llenarTodo = (n) => {
    document.querySelectorAll("textarea").forEach((ele) => {
        llenarTextArea(ele.name, n)
    })
}
categorySelect.addEventListener("change", (ele) => {
    window.toEdit.forEach(cat => cat.categoria == ele.target.value ? llenarTodo(ele.target.value) : false)
})

function saveTo() {
    let selected = document.getElementById("category");
    document.querySelectorAll("textarea").forEach((e) => {
        window.toEdit[selected.selectedIndex - 1].proceso[e.name] = e.value.split("\n")
    });
    // const URI = "https://ivan232343.github.io/generador_de_tipificaciones_win/dist/data/plantillas_b.json";
    const request = new XMLHttpRequest();
    request.open("PUT", requestURL);
    request.getResponseHeader("Content-type", "application/json");
    request.send(JSON.stringify(window.toEdit));
    request.onload = () => { console.log(request.response) }
}