
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

function printme(x){
    localStorage.setItem("dr", parseInt(x) +1);
    console.log(localStorage.getItem("dr"))
}

function displayInfo(){
    fetch('https://intense-ravine-40625.herokuapp.com/doctors/' + localStorage.getItem("dr"))
   .then(response => response.json())
   .then(data => {
     
            var name = document.getElementsByClassName('name');
            name[0].innerHTML = data['name'];
            name[1].innerHTML = data['name'];

            var spec = document.getElementsByClassName('spec');
            spec[0].innerHTML = data['spec'];
            spec[1].innerHTML = data['spec'];

        document.getElementsByClassName('avatar')[0].setAttribute('src',data['avatar']);
        var number = document.getElementsByClassName('number');
        number.innerHTML = data['number'];

        if (data['online_pay']='true'){
            document.getElementsByClassName('online_pay')[0].innerHTML = 'دارد';
        }
        else{
            document.getElementsByClassName('online_pay')[0].innerHTML = 'ندارد';
        }

        document.getElementsByClassName('first_empty_date')[0].innerHTML = data['first_empty_date'];
        document.getElementsByClassName('experience_years')[0].innerHTML = data['experience_years'];
        document.getElementsByClassName('comments')[0].innerHTML = data['comments'];
   });
  
}