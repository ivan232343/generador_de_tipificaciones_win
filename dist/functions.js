// const request = new XMLHttpRequest();
function get_process() {
    request.open("GET", "data/process.json", true);
    request.onload = (e) => {
        retornar = JSON.parse(e.target.response);
        retornar.procesos.forEach(u => {
            option = document.createElement("option");
            option.value = u.code_name
            option.text = u.nombre
            ctrl_proccess.appendChild(option);
        });
    }
    request.send()
}

let validate_potencia = document.querySelector("#potencia_olt")
chng_icons = document.querySelector(".mdi_chng")
validate_potencia.addEventListener("input", (i) => {
    let nums = i.target.value.split("/");
    nums.onu = parseFloat(nums[0])
    nums.olt = parseFloat(nums[1])
    if (nums.onu >= -25.5 && nums.olt >= -30.0) {
        if (nums.onu > nums.olt) {
            diff = nums.onu - nums.olt
        } else if (nums.onu < nums.olt) {
            diff = nums.olt - nums.onu
        }
        console.log(diff)
        if (diff <= 5.5) {
            // if (chng_icons.classList.contains("mdi-close-circle-outline")) {
            chng_icons.classList.remove("mdi-close-circle-outline")
            chng_icons.classList.add("mdi-checkbox-marked-circle-outline")
            // }
            console.log(" no requiere visita")
        } else {
            chng_icons.classList.add("mdi-close-circle-outline")
            chng_icons.classList.remove("mdi-checkbox-marked-circle-outline")
            console.log(" require visita ")
        }
    }
    else {
        chng_icons.classList.add("mdi-close-circle-outline")
        chng_icons.classList.remove("mdi-checkbox-marked-circle-outline")
        console.log(" require visita ")
    }
})
function get_campos(format = "json") {
    toLocalStorage = "";
    document.querySelectorAll("input[type=text],#obs_cl").forEach(e => {
        if (format == "json") {
            toLocalStorage += `{"${e.name}":"${e.value}"}`
            toLocalStorage = toLocalStorage.replace("}{", ",")
        } else {
            toLocalStorage += `${e.parentNode.innerText}: ${e.value}/ `
        }
    })
    return toLocalStorage;
}