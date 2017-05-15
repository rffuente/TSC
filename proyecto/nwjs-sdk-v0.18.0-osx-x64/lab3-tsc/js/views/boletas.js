var boletasView = {
    init: function(){

        navbarView.init();
        var contribuyente = window.sessionStorage.getItem("contribuyente");
        contribuyentes.get(contribuyente);
        boletas.get(contribuyente);

        $('#edit-contribuyente-button').click(function(){
            var data = {};
            data.nombres = $('#contribuyente-name').val();
            data.apellidos = $('#contribuyente-lastnames').val();
            data.direccion = $('#contribuyente-address').val();
            data.rut = $('#contribuyente-rut').val();

            contribuyentes.patch(contribuyente,data);

        });

        $('#new-boleta-button').click(function(){
            var data = {};
            data.nombre_receptor = $('#new-receiver').val();
            data.monto_bruto = $('#new-amount').val();
            data.rut_receptor = $('#new-receiver-rut').val();

            boletas.post(contribuyente, data);

        });

        $('#revocation-reason').keyup(function(){
            if($(this).val() != ''){
                $('#confirm-revocation-button').prop('disabled', false);
            }else{
                $('#confirm-revocation-button').prop('disabled', true);
            }
        })

        $('#confirm-revocation-button').click(function(){
            var boleta = window.sessionStorage.getItem("selected_boleta");
            var data = {};
            data.razon = $('#revocation-reason').val()
            revocaciones.post(contribuyente, boleta, data);

        });

        $('#confirm-boleta-edit').click(function(){
            var contribuyente =  window.sessionStorage.getItem("contribuyente");
            var boleta = window.sessionStorage.getItem("selected_boleta");
            var data = {};
            data.nombre_receptor = $('#edit-receiver').val();
            data.rut_receptor = $('#edit-receiver-rut').val();
            data.monto_bruto = $('#edit-amount').val();
            boletas.patch(contribuyente, boleta, data);
        });

        $('#confirm-boleta-delete').click(function(){
            var boleta = window.sessionStorage.getItem("selected_boleta");
            boletas.delete(contribuyente,boleta);
            /*implementar funcionalidad*/
        });
    },

    buildTables : function(data){

        var revoked = data.filter(function(element){ return !element.emitida});
        var notRevoked = data.filter(function(element){ return element.emitida});

        var table = $('#tabla-boletas-emitidas').DataTable( {
            data: notRevoked,
            columns: [
                { title: "Receptor", data: "nombre_receptor" },
                { title: "Rut receptor", data: "rut_receptor" },
                { title: "Monto", data: "monto_bruto" },
                { title: "Acción", data : null,
                    "defaultContent": "<button id='button-revoke' class='btn btn-danger'>Revocar</button>&nbsp;"+
                    "<button id='button-edit' class='btn btn-warning'>Editar</button>&nbsp;" +
                    "<button id='button-remove' class='btn btn-danger'>Eliminar</button>"
                }
            ]
        } );

        $('#button-revoke').click(function(){

            $('#revocation-modal').modal('show');
            var data = table.row( $(this).parents('tr') ).data();
            window.sessionStorage.setItem("selected_boleta", data.pk);

        });

        $('#button-edit').click(function(){

            var data = table.row( $(this).parents('tr') ).data();
            window.sessionStorage.setItem("selected_boleta", data.pk);
            $('#edit-receiver').val(data.nombre_receptor);
            $('#edit-receiver-rut').val(data.rut_receptor);
            $('#edit-amount').val(data.monto_bruto);
            $('#boleta-edit-modal').modal('show');

        });

        $('#button-remove').click(function(){
            var data = table.row( $(this).parents('tr') ).data();
            window.sessionStorage.setItem("selected_boleta", data.pk);
            $('#boleta-delete-modal').modal('show');
        });


        $('#tabla-boletas-revocadas').DataTable( {
            data: revoked,
            columns: [
                { title: "Receptor", data: "nombre_receptor" },
                { title: "Rut receptor", data: "rut_receptor" },
                { title: "Monto", data: "monto_bruto" },
                { title: "Razón revocación", data : "razon_revocacion" }
            ]
        } );
    }
}
