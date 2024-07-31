// //zona segura
// //nativa
// document.addEventListener('DOMContentLoaded', function(){

    
//     //Recuperar por id
//     const nombre= $('#txtNombre').val();
//     const cedula= $('#txtCedula').val();
    
//     //cambiar/asignar
//     $('#txtNombre').val('otro fulano');
//     alert($('#txtNombre').val());
//     $('#txtNombre').val('Dario');
// });


//jquery
//zona segura

$(function(){
    //para prueba
    //$('input').css("background-color", "yellow")
    const nombre= $('#txtNombre').val();
    const cedula= $('#txtCedula').val();
    
    //cambiar/asignar
    $('#txtNombre').val('otro fulano');
    // alert($('#txtNombre').val());
    $('#txtNombre').val('Dario');

    //añadir evento click al boton
    $('#btnEnviar').on('click', function(){
       //cuando hiciste click, se ejecuta aqui
        //alert('Hiciste click');
        $('#btnEnviar').removeClass('btn-primary').addClass('btn-warning');
        //recuperar los valores del formulario
        const nombre= $('#txtNombre').val();
        const apellido= $('#txtApellido').val();
        const cedula= $('#txtCedula').val();
        if(!nombre.trim()){
            alert('complete este!!');
            $('#txtNombre').css('border-color','red').focus();
            return;
        }

        if(!apellido.trim()){
            alert('complete este!!');
            $('#txtApellido').css('border-color','red').focus();
            return;
        }

        if(!cedula.trim()){
            alert('complete este!!');
            $('#txtCedula').css('border-color','red').focus();
            return;
        }
        alert('buenisimo');
        
    });

});