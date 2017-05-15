var indexView = {
    init: function(){
        $('#start-button').click(function(){

            /*redireccionar a ventana de login cuando no se esté logueado*/
            var username = window.localStorage.getItem('usuario');
            var group = window.localStorage.getItem('grupo');
            if(group != '' || username != ''){
            	window.location.href = "login.html";
            }

            else{
            	window.location.href = "contribuyentes.html";
            }


        });
    }
}
