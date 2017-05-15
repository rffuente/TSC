var boletas = {
    get : function(contrib, pk){
        pk = pk || 0;
        if(pk == 0){
            $.ajax(
                {
                    url : "http://67.205.134.51/contribuyentes/"+ contrib + "/boletas",
                    data : {},
                    type : "GET",
                    dataType : "json",
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('Authorization', global.authorization);
                    },
                    success : function(json) {
                        console.log(json);
                        boletasView.buildTables(json.data);
                    },
                    error : function(xhr) {
                        console.log(xhr);
                    },
                    complete : function(xhr, status) {

                    }
                }
            );
        }
    },

    post : function(pk, data){
        $.ajax(
            {
                url : "http://67.205.134.51/contribuyentes/" + pk + "/boletas/",
                data : JSON.stringify(data),
                contentType : "application/json; charset=UTF-8",
                dataType : "json",
                type : "POST",
                processData : false,
                timeout : 30000,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Authorization', global.authorization);
                },
                success : function(json) {
                    alert("Boleta Creada con éxito");
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
    delete: function(pk_c,pk_b){
        $.ajax(
        {
            url : "http://67.205.134.51/contribuyentes/" + pk_c + "/boletas/" + pk_b + "/",
                contentType : "application/json; charset=UTF-8",
                dataType : "json",
                type : "DELETE",
                processData : false,
                timeout : 30000,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Authorization', global.authorization);
                },
                success : function(json) {
                    console.log(json);
                    alert("Boleta borrada con éxito");
                    location.reload();
                },
                error : function(xhr) {
                    console.log(xhr);
                    alert("Error en la consulta, ver consola para más detalles");

                }
        }
        );
    }
}

