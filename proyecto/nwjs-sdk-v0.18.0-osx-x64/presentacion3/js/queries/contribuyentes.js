var contribuyentes = {
    get : function(pk){
        pk = pk || 0;
        if(pk == 0) {
            $.ajax(
                {
                    url : "http://67.205.134.51/contribuyentes/",
                    data : {},
                    type : "GET",
                    dataType : "json",
                    timeout : 30000,
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('Authorization', global.authorization);
                    },
                    success : function(json) {
                        console.log(json);
                        contribuyentesView.buildTable(json.data);
                    },
                    error : function(xhr) {
                        console.log(xhr);
                    },
                    complete : function(xhr, status) {

                    }
                }
            );
        }else{
            $.ajax(
                {
                    url : "http://67.205.134.51/contribuyentes/" + pk,
                    data : {},
                    type : "GET",
                    dataType : "json",
                    timeout : 30000,
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('Authorization', global.authorization);
                    },
                    success : function(json) {
                        boletasView.buildUserData(json.data);
                        console.log(json);
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

    post: function(data){
        $.ajax(
            {
                url : "http://67.205.134.51/contribuyentes/",
                data : JSON.stringify({
                    nombres : data.nombres,
                    apellidos : data.apellidos,
                    direccion : data.direccion,
                    rut : data.rut
                }),
                contentType : "application/json; charset=UTF-8",
                dataType : "json",
                type : "POST",
                processData : false,
                timeout : 30000,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Authorization', global.authorization);
                },
                success : function(json) {
                    console.log(json);
                    alert("Contribuyente creado con éxito");
                    location.reload();
                },
                error : function(xhr) {
                    console.log(xhr);
                    alert("Error en la consulta, ver consola para más detalles");

                },
                complete : function(xhr, status) {

                }
            }
        );
    },
    patch: function(pk,data){
        $.ajax(
        {
            url : "http://67.205.134.51/contribuyentes/" + pk + "/",
                data : JSON.stringify({
                    nombres : data.nombres,
                    apellidos : data.apellidos,
                    direccion : data.direccion,
                    rut : data.rut
                }),
                contentType : "application/json; charset=UTF-8",
                dataType : "json",
                type : "PATCH",
                processData : false,
                timeout : 30000,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Authorization', global.authorization);
                },
                success : function(json) {
                    console.log(json);
                    alert("Contribuyente creado con éxito");
                    location.reload();
                },
                error : function(xhr) {
                    console.log(xhr);
                    alert("Error en la consulta, ver consola para más detalles");

                }
        }
        );
    },
};
