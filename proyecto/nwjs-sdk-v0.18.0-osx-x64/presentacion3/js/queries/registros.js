var registros = {
post : function(data){
        $.ajax(
            {
                url : "http://localhost:9999/users",
                data : JSON.stringify({
                    user_name: data.username,
                    full_name: data.fullname,
                    email: data.email,
                    password: data.password
                }),
                contentType : "application/json; charset=UTF-8",
                dataType : "json",
                type : "POST",
                processData : false,
                timeout : 30000,
                success : function(data) {
                    alert(xhr);
                    location.reload();
                },
                error : function(xhr) {
                    alert("Error en la consulta, ver consola para más detalles");
                    console.log(xhr);
                },
                complete : function(xhr, status) {

                }
            }
        );
    }
}