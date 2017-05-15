var logins = {
	post : function(data){
        $.ajax(
            {
                url : "http://localhost:9999/users/login",
                data : JSON.stringify({
                    email: data.email,
                	password: data.password
                }),
                contentType : "application/json; charset=UTF-8",
                dataType : "json",
                type : "POST",
                processData : false,
                timeout : 30000,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Authorization', global.authorization);
                },
                success : function(data) {
                    alert(data);
                    location.reload();
                    window.location.href = 'contribuyentes.html';
                },
                error : function(xhr) {
                    alert(xhr);
                    alert("Error en la consulta, ver consola para más detalles");
                    console.log(json);
                },
                complete : function(xhr, status) {

                }
            }
        );
    },

}