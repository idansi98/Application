var check = document.getElementsByTagName('li');

for(item in li) {
    console.log(li[item]);
    li[item].onclick = function() {
        alert('clicked');
    }
}