(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                var a;
                var pwd1 = document.getElementById("pwd1");
                var pwd2 = document.getElementById("pwd2");                
                if (pwd1.value != pwd2.value || pwd2.value == "") {
                    a = 0;                               
                }
                else {                     
                    a = 1;
                }
                if (form.checkValidity() === false || a == 0) {
                    pwd2.classList.add("error");
                    event.preventDefault();
                    event.stopPropagation();                    
                }                
            }, false);
        });
    }, false);
})();