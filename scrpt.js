
function displayDrs() {
  
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
                dr.style.display = 'flex';
                var child = dr.querySelector("."+key2);
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
  
}

function sortDrs() {

    var list = document.getElementById('drs');

    var nodesToSort = list.querySelectorAll('.my-dr');
    Array.prototype.map.call(nodesToSort, function(node) {
        return {
            node: node,
            relevantText: node.querySelector('.user_percent').textContent
        };
    }).sort(function(a, b) {
        return b.relevantText - a.relevantText;
    }).forEach(function(item) {
    list.appendChild(item.node);
});
}