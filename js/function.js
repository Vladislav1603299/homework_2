function show_hide_password(target) {
    var input = document.getElementById('password-input');
    if (input.getAttribute('type') == 'password') {
        target.classList.add('view');
        input.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input.setAttribute('type', 'password');
    }
    return false;
}












function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}



window.onclick = function (event) {
    if (!event.target.matches('.header-burger')) {

        var dropdowns = document.getElementsByClassName("header-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}




var numCount = document.getElementById('num_count');
var plusBtn = document.getElementById('button_plus');
var minusBtn = document.getElementById('button_minus');
plusBtn.onclick = function () {
    var qty = parseInt(numCount.value);
    qty = qty + 1;
    numCount.value = qty;
}
minusBtn.onclick = function () {
    var qty = parseInt(numCount.value);
    qty = qty - 1;
    numCount.value = qty;
}