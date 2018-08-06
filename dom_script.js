console.log('hello');
var el = document.getElementById('test');

var menu = document.createElement('ul');
menu.id = 'menupan';

var item1 = document.createElement('li');
item1.id = 'menu1';
item1.innerHTML = '사과';

var item2 = document.createElement('li');
item2.id = 'menu2';
item2.innerHTML = '청포도';

menu.appendChild(item1);
menu.appendChild(item2);

el.appendChild(menu);

//여기에 사과와 청포도가 아닐때 경고창을 띄어보려고 시도했지만 실패했다..
var read = function(){
    var input = document.getElementById('input1');
    console.log(input.value);
};


