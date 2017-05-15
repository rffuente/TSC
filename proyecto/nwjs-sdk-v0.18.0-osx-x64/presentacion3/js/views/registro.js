var registroView = {
    init: function(){
        $('#button-register-user').prop('disabled', true);

        function validarEmail( email ) {
        expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if ( !expr.test(email) ){
                alert("Error: La dirección de correo " + email + " es incorrecta.");
                return false;
            }
            else{
                return true
            }
        }

        $('#fullname, #username, #password, #email').on('keyup change click', function(){
            var fullname = $('#fullname').val();
            var username = $('#username').val();
            var password = $('#password').val();
            var email = $('#email').val();
            if(fullname != '' && username != '' && password != '' && email != ''){
                $('#button-register-user').prop('disabled', false);
            }
            else{
                $('#button-register-user').prop('disabled', true);
            }
        });

        $('#button-register-user').click(function(){
            /* almacenar credenciales de usuario antes de redireccionar a la vista contribuyentes*/
            var data = {};
            data.fullname = $('#fullname').val();
            data.username = $('#username').val();
            data.password = $('#password').val();
            data.email = $('#email').val();

            if(validarEmail(data.email)){
                registros.post(data);
                window.location.href = 'login.html';
            }

        });

        $('#button-back-index').click(function(){
            /* almacenar credenciales de usuario antes de redireccionar a la vista contribuyentes*/
            window.location.href = 'login.html';
        });
    }
}
