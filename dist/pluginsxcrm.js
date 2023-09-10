function CrmProcessShortly(type = 1) {
    if (type === 1) {
        document.getElementById("cb_tipi_caso_soporte").value = "36"
        mostrar_div();
        setTimeout(
            () => {
                document.getElementById("cb_tipo_tipi_cerrado").value = "244"
                ajax_select_motivo();
                setTimeout(
                    () => {
                        document.getElementById("cb_motivo_tipi_cerrado").value = "635"
                        document.getElementById("txt_descripcion_caso").value = "se agenda llamada"
                        document.getElementById("bt_guardar").click()
                        // document.getElementById("boton_enviar_validacion").click()
                    }, 15)
            }, 15)
    }
}
// http://172.27.201.14/pages/ajax/ws_atc_informacion_ont.php?mac=48575443D0956BA8