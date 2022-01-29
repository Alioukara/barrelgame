
const baril8 = document.getElementById("baril8")
const baril5 = document.getElementById("baril5")
const baril3 = document.getElementById("baril3")

const titlebaril8 = document.getElementById("valeur8")
const titlebaril5 = document.getElementById("valeur5")
const titlebaril3 = document.getElementById("valeur3")

const barB8 = document.getElementById("barB8")
const barB5 = document.getElementById("barB5")
const barB3 = document.getElementById("barB3")

const baril8Data = { value: 8, capacity: 8, name: "baril8" }
const baril5Data = { value: 0, capacity: 5, name: "baril5" }
const baril3Data = { value: 0, capacity: 3, name: "baril3" }



baril8.addEventListener('click', setStorage)
baril5.addEventListener('click', setStorage)
baril3.addEventListener('click', setStorage)

document.getElementById("restart").addEventListener('click', () =>{
    localStorage.clear()
    window.location.reload();
})

function jeugagne() {

 if (baril8Data.value == 4 && baril5Data.value == 4) {
   
    alert("bravo, vous avez réussi")
    
 }
}
 function updateProgressBar(capacity, value) {
    document.getElementById("barB" + capacity).setAttribute("value", value);
 }

function setStorage(e) {
 
    switch (e.target.id) {
        case "baril8":
            checkandSet(baril8Data)

            calculate(baril8Data)
            
            jeugagne()
            break;
        case "baril5":
            checkandSet(baril5Data)

            calculate(baril5Data)
            
            jeugagne()
            break;
        case "baril3":
            checkandSet(baril3Data)

            calculate(baril3Data)
           
            jeugagne()
            break;
    }


}

function deleteScale() {
    document.getElementById(localStorage.getItem("clicked1")).style.removeProperty("transform");
}

function checkandSet(barilobj) {
    // if (localStorage.getItem("clicked2")) {
    //     document.getElementById(localStorage.getItem("clicked1")).style.removeProperty("transform");

    // }
    if (baril8Data.value == 4 && baril5Data.value == 4) {
        alert("bravo")
    }
    if (!localStorage.getItem("clicked2") && localStorage.getItem("clicked1") === barilobj.name) {
        deleteScale()
        localStorage.clear()
        return
    }
    if (!localStorage.getItem("clicked1") && !localStorage.getItem("clicked2")) {
        localStorage.setItem("clicked1", barilobj.name)
         document.getElementById(localStorage.getItem("clicked1")).style.cssText +=  "transform: scale(1.1)";
        localStorage.setItem("valueofclicked1", barilobj.value)
        localStorage.setItem("capacityofclicked1", barilobj.capacity)
        return
    }
    localStorage.getItem("clicked1") ? localStorage.setItem("clicked2", barilobj.name) : localStorage.setItem("clicked1", barilobj.name)
    document.getElementById(localStorage.getItem("clicked1")).style.cssText +=  "transform: scale(1.1)";
    localStorage.getItem("valueofclicked1") ? localStorage.setItem("valueofclicked2", barilobj.value) : localStorage.setItem("valueofclicked1", barilobj.value)
    localStorage.getItem("capacityofclicked1") ? localStorage.setItem("capacityofclicked2", barilobj.capacity) : localStorage.setItem("capacityofclicked1", barilobj.capacity)
}
function calculate(objbaril) {
    if (baril8Data.value == 4 && baril5Data.value == 4) {
        alert("bravo")
    }
    if (localStorage.getItem("clicked1") && localStorage.getItem("clicked2")) {
        document.getElementById(localStorage.getItem("clicked1")).style.removeProperty("transform");
        var newvalue = parseInt(localStorage.getItem("valueofclicked2")) + parseInt(localStorage.getItem("valueofclicked1"))

        objbaril.value = newvalue
        document.getElementById("valeur" + objbaril.capacity).innerHTML = `<div>Quantité Actuelle: ${objbaril.value}</div>`
        let extra = 0

        if (newvalue > objbaril.capacity) {
            extra = objbaril.value - objbaril.capacity
        
            objbaril.value = objbaril.value - extra
             document.getElementById("valeur" + objbaril.capacity).innerHTML = `<div>Quantité Actuelle: ${objbaril.value}</div>`
            if (localStorage.getItem("clicked1") === baril8Data.name) {
                baril8Data.value = baril8Data.value + extra
                titlebaril8.innerHTML = `<div>Quantité Actuelle: ${baril8Data.value}</div>`

             } else if (localStorage.getItem("clicked1") === baril5Data.name) {

                baril5Data.value = baril5Data.value + extra
                titlebaril5.innerHTML = `<div>Quantité Actuelle: ${baril5Data.value}</div>`

            } else if (localStorage.getItem("clicked1") === baril3Data.name) {

                baril3Data.value = baril3Data.value + extra
                titlebaril3.innerHTML = `<div>Quantité Actuelle: ${baril3Data.value}</div>`
            }

        }




        if (localStorage.getItem("clicked1") === baril8Data.name) {
            baril8Data.value = parseInt(localStorage.getItem("valueofclicked1")) - (localStorage.getItem("capacityofclicked2") - parseInt(localStorage.getItem("valueofclicked2")))
            titlebaril8.innerHTML = `<div>Quantité Actuelle: ${baril8Data.value}</div>`
            if (baril8Data.value <= 0) {
                baril8Data.value = 0
                titlebaril8.innerHTML = `<div>Quantité Actuelle: ${baril8Data.value}</div>`

            }

        } else if (localStorage.getItem("clicked1") === baril5Data.name) {
            baril5Data.value = parseInt(localStorage.getItem("valueofclicked1")) - (localStorage.getItem("capacityofclicked2") - parseInt(localStorage.getItem("valueofclicked2")))
            titlebaril5.innerHTML = `<div>Quantité Actuelle: ${baril5Data.value}</div>`
            if (baril5Data.value <= 0) {

                baril5Data.value = 0
                titlebaril5.innerHTML = `<div>Quantité Actuelle: ${baril5Data.value}</div>`
            }

        } else if (localStorage.getItem("clicked1") === baril3Data.name) {
            baril3Data.value = parseInt(localStorage.getItem("valueofclicked1")) - (localStorage.getItem("capacityofclicked2") - parseInt(localStorage.getItem("valueofclicked2")))
            titlebaril3.innerHTML = `<div>Quantité Actuelle: ${baril3Data.value}</div>`
            if (baril3Data.value <= 0) {
                baril3Data.value = 0
                titlebaril3.innerHTML = `<div>Quantité Actuelle: ${baril3Data.value}</div>`

            }
        }

        console.log("baril8", baril8Data.value, "baril5", baril5Data.value, "baril3", baril3Data.value)
        updateProgressBar(baril8Data.capacity, baril8Data.value)
        updateProgressBar(baril5Data.capacity, baril5Data.value)
        updateProgressBar(baril3Data.capacity, baril3Data.value)
        localStorage.clear()
    }

}



