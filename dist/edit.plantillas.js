// traemos el nuevo json
window.toEdit;
let categorySelect = document.getElementById("category")
const requestURL =
    "https://s3.us-west-2.amazonaws.com/win.data/plantillas_b.json";
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


