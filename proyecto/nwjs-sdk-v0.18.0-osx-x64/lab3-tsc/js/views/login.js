var loginView = {
    init: function(){
        $('#button-login').prop('disabled', true);

        $('#button-login').click(function(){
            /* almacenar credenciales de usuario antes de redireccionar a la vista contribuyentes*/
            window.localStorage.setItem('usuario', $('#username').val());
            window.localStorage.setItem('grupo', $('#group-number').val());
            window.location.href = 'contribuyentes.html';
        });

        $('#group-number, #username').on('keyup change click', function(){
            var username = $('#username').val();
            var group = $('#group-number').val();
            if(group != '' && username != ''){
                $('#button-login').prop('disabled', false);
            }else{
                $('#button-login').prop('disabled', true);
            }
        });
    }
}
