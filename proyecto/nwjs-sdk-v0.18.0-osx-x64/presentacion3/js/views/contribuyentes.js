var contribuyentesView = {

    init: function(){
        navbarView.init();
        contribuyentes.get();
        $('#new-contribuyente-button').click(function(){
            var data = {};
            data.apellidos = $('#lastnames-new').val();
            data.nombres = $('#name-new').val();
            data.rut = $('#rut-new').val();
            data.direccion = $('#address-new').val();
            contribuyentes.post(data);
        })
    },

    buildTable : function(data){
        var table  = $('#tabla-contribuyentes').DataTable( {
            data: data,
            columns: [
                { title: "Nombres", data: "nombres" },
                { title: "Apellidos", data: "apellidos" },
                { title: "Direccion", data: "direccion" },
                { title: "rut", data: "rut" },
                { title: "Acción", data : null, "defaultContent": "<button class='btn btn-success'>Ver</button>" }
            ]
        } );

        $('#tabla-contribuyentes tbody').on( 'click', 'button', function () {
            var data = table.row( $(this).parents('tr') ).data();
            window.sessionStorage.setItem("contribuyente", data.pk);
            window.location.href = "boletas.html";
        } );
    }

}
