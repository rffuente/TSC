var combustibles = {
    get: function(comuna){
        var token = "F5q7hCVAYZ";
        var comunas = ["05109"];
        $.ajax(
            {
                url : "http://api.cne.cl/v3/combustibles/vehicular/estaciones?token="+token+"&comuna=" + comunas,
                data : {},
                type : "GET",
                dataType : "json",
                timeout : 30000,
                beforeSend: function(xhr) {

                },
                success : function(json) {
                    console.log(json);
                    buildTable(json);

                },
                error : function(xhr) {
                    console.log(xhr);
                },
                complete : function(xhr, status) {

                }
            }
        );
    }
}
