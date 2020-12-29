
function displayData() {
  
   fetch('https://intense-ravine-40625.herokuapp.com/doctors')
   .then(response => response.json())
   .then(data => {
     for (var key in data) {

         var itm = document.getElementById("first");
         var cln = itm.cloneNode(true);
         cln.setAttribute("id", key);
         document.getElementById("drs").appendChild(cln);

        for (var key2 in data[key]){
            if (key2 != 'id'){
                var dr = document.getElementById(key);
                var child = dr.querySelector("#"+key2);
                if (key2 == 'avatar'){
                    child.setAttribute('src',data[key][key2]);
                }
                if (key2 == 'stars')
                {}
                else{
                    child.innerHTML = data[key][key2];
                }
                
            }
           
        }
    

         
     }
   });
   document. document.getElementById('first')
  
}

