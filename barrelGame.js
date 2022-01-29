
const baril8 = document.getElementById("baril8")
const baril5 = document.getElementById("baril5")
const baril3 = document.getElementById("baril3")

const baril8Data = {value: 8, capacity: 8, name: "baril8"}
const baril5Data = {value: 0, capacity: 5, name: "baril5"}
const baril3Data = {value: 0, capacity: 3, name: "baril3"}

baril8.addEventListener('click', setStorage)
baril5.addEventListener('click', setStorage)
baril3.addEventListener('click', setStorage)





function setStorage(e) {

    switch (e.target.id) {
        case"baril8" : 
        checkandSet(baril8Data)
        calculate(baril8Data)
        break;
        case"baril5" : 
        checkandSet(baril5Data)
        calculate(baril5Data)
        break;
        case"baril3" : 
        checkandSet(baril3Data)
        calculate(baril3Data)
        break;
    }
 
    
  }





  function checkandSet(barilobj) {
      if(!localStorage.getItem("clicked2") && localStorage.getItem("clicked1") === barilobj.name) {
        localStorage.clear()
        return
      }
      if (!localStorage.getItem("clicked1") && !localStorage.getItem("clicked2")) {
        localStorage.setItem("clicked1", barilobj.name)
        localStorage.setItem("valueofclicked1", barilobj.value)
        localStorage.setItem("capacityofclicked1", barilobj.capacity)
        return
    }
    localStorage.getItem("clicked1") ? localStorage.setItem("clicked2", barilobj.name) : localStorage.setItem("clicked1", barilobj.name)
    localStorage.getItem("valueofclicked1") ? localStorage.setItem("valueofclicked2", barilobj.value) : localStorage.setItem("valueofclicked1", barilobj.value)
    localStorage.getItem("capacityofclicked1") ? localStorage.setItem("capacityofclicked2", barilobj.capacity) : localStorage.setItem("capacityofclicked1", barilobj.capacity)
  }
  function calculate(objbaril) {
    if (localStorage.getItem("clicked1") && localStorage.getItem("clicked2")) {
        
        var newvalue =  parseInt(localStorage.getItem("valueofclicked2")) + parseInt(localStorage.getItem("valueofclicked1"))
       
        objbaril.value = newvalue
        let extra = 0
        // if (objbaril.capacity ==  objbaril.value) {
        //     localStorage.clear()
        //     return
        // }
        if (newvalue >= objbaril.capacity) {
            extra = objbaril.value - objbaril.capacity
             objbaril.value = objbaril.value - extra

             if (localStorage.getItem("clicked1") === baril8Data.name) {
                baril8Data.value = baril8Data.value + extra
                console.log("yeahhhhhhhhhhhhhhhhhh8")
        
            } else if (localStorage.getItem("clicked1") === baril5Data.name) {
                baril5Data.value = baril5Data.value + extra
                console.log("yeahhhhhhhhhhhhhhhhhh5")
          
            } else if (localStorage.getItem("clicked1") === baril3Data.name) {
                baril3Data.value = baril3Data.value + extra
                console.log("yeahhhhhhhhhhhhhhhhhh3")
               
           
            } 
             
     
        }






















        if (localStorage.getItem("clicked1") === baril8Data.name) {
            baril8Data.value = parseInt(localStorage.getItem("valueofclicked1")) - (parseInt(localStorage.getItem("valueofclicked2")) != 0 ? parseInt(localStorage.getItem("valueofclicked2")) : localStorage.getItem("capacityofclicked2") )
        
        
        } else if (localStorage.getItem("clicked1") === baril5Data.name) {
            baril5Data.value = parseInt(localStorage.getItem("valueofclicked1")) - (parseInt(localStorage.getItem("valueofclicked2")) != 0 ? parseInt(localStorage.getItem("valueofclicked2")) : localStorage.getItem("capacityofclicked2") )
           
       
        } else if (localStorage.getItem("clicked1") === baril3Data.name) {
            baril3Data.value = parseInt(localStorage.getItem("valueofclicked1")) - (parseInt(localStorage.getItem("valueofclicked2")) != 0 ? parseInt(localStorage.getItem("valueofclicked2")) : localStorage.getItem("capacityofclicked2") )
       
        } 
   
    console.log("baril8",baril8Data.value,"baril5", baril5Data.value, "baril3", baril3Data.value)
    localStorage.clear()  
    }
  
  }

