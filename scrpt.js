
// نمایش پزشکان و خلاصه ی اطلاعات هر کدام
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

// سورت کردن پزشکان بر حسب رضایتمندی 
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

// معلوم می کند کدام پزشک انتخاب شده
function choose_dr(x){
    localStorage.setItem("dr", parseInt(x) + 1);
    console.log(localStorage.getItem("dr"));
}

// نمایش اطلاعات پزشک انتخاب شده
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
        var i;
        for (i = 0; i < 7; i++){

            if (data['week_days'][i] == false){
                document.getElementsByClassName('day')[i].setAttribute('src','img/cross.png');
            }
            if (data['week_days'][i] == true){
                document.getElementsByClassName('day')[i].setAttribute('src','img/check.png');
            }  
        }
        

        if (data['online_pay']='true'){
            document.getElementsByClassName('online_pay')[0].innerHTML = 'دارد';
        }
        else{
            document.getElementsByClassName('online_pay')[0].innerHTML = 'ندارد';
        }

        for (key in data){
            if (key == 'name' || key == 'stars' || key == 'id' ||  key == 'week_days' || key == 'spec' || key == 'avatar' || key == 'online_pay'){}
            else {
                document.getElementsByClassName(key)[0].innerHTML = data[key];
            }

        }

   });

   document.getElementsByClassName('week_bdy')[0].style.display = 'none';
  
}

// نمایش بخش آدرس و شماره تلفن
function show_map(){
    document.getElementsByClassName('week_bdy')[0].style.display = 'none';
    document.getElementsByClassName('map_bdy')[0].style.display = 'block';
}

// نمایش بخش روز های هفته
function show_week(){
    document.getElementsByClassName('week_bdy')[0].style.display = 'block';
    document.getElementsByClassName('map_bdy')[0].style.display = 'none';
}