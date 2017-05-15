var revocaciones = {
	post : function(contribuyentes,boletas,data){
        $.ajax(
            {
                url : "http://67.205.134.51/revocaciones/",
                data : JSON.stringify({
                	contribuyente: contribuyentes,
                	boleta: boletas,
                	razon: data.razon
                }),
                contentType : "application/json",
                dataType : "json",
                type : "POST",
                processData : false,
                timeout : 30000,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Authorization', global.authorization);
                },
                success : function(json) {
                    alert("Revocación creada con éxito");
                    console.log(json);
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
    },

}