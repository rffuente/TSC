var loginView = {
    init: function(){
        $('#button-login').prop('disabled', true);

        $('#button-login').click(function(){
            /* almacenar credenciales de usuario antes de redireccionar a la vista contribuyentes*/
            window.localStorage.setItem('email', $('#email').val());
            window.localStorage.setItem('password', $('#password').val());
            data = {}
            data.email = $('#email').val()
            data.password = $('#password').val()
            logins.post(data);
        });

        $('#email, #password').on('keyup change click', function(){
            var email = $('#email').val();
            var password = $('#password').val();
            if(email != '' && password != ''){
                $('#button-login').prop('disabled', false);
            }else{
                $('#button-login').prop('disabled', true);
            }
        });

        $('#button-register').click(function(){
            window.location.href = 'registro.html';
        });
    }
}
