var navbarView = {
    init: function(){
        $('#navbar-username').html(window.localStorage.getItem('usuario'));
        $('#logout-button').click(function(){
            window.localStorage.clear();
            window.location.href = "login.html";
        });

        $('#reload-button').click(function(){
           window.location.reload();
        });
    }
}
