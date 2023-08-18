export const procesos = [{
        "nombre": "Flujo de Luces verdes (Sin internet)",
        "code_name": "noNet_ponOK",
        "listado": [{
                "id": "ip_olt_nook",
                "desc": "Figura ip en smart OLT"
            },
            {
                "id": "send_vas",
                "desc": "[NO] Solicitar el envio de VAS al ONT"
            },
            {
                "id": "conf_wan_manual",
                "desc": "[NO] Se configura WAN con el cliente"
            },
            {
                "id": "acces_iprouter_fail",
                "desc": "[NO] Cliente no puede ingresar a la ip del router"
            },
            {
                "id": "reset_factory_ont",
                "desc": "[NO] Se reinicia de fabrica"
            },
            {
                "id": "config_manual",
                "desc": "[NO] Se configura el router con el cliente"
            },
            {
                "id": "configIP_manual",
                "desc": "[SI] Se agrega al smart wifi manualmente"
            },
            {
                "id": "connectect_by",
                "desc": "Tiene problemas mediante->"
            },
            {
                "id": "cat_eth",
                "desc": "[LAN] Se valida que el cable es de win o cat 5e +"
            },
            {
                "id": "duplex_state",
                "desc": "[LAN] Se valida estado del cable ethernet"
            },
            {
                "id": "status_ports",
                "desc": "[LAN] Se prueba en diferentes puertos de la ONT "
            },
            {
                "id": "others_device_lan",
                "desc": "[LAN] se prueba con otros dispositivos"
            },
            {
                "id": "validate_conband",
                "desc": "[WIFI] Se verifica la banda que esta conectada"
            },
            {
                "id": "wlan_optimo",
                "desc": "[WIFI] considerar alcances optimos<br>5Ghz -> 3m / 2.4Ghz -> 4m"
            },
            {
                "id": "others_device_wifi",
                "desc": "[WIFI] se prueba con otros dispositivos"
            },
            {
                "id": "create_wan",
                "desc": "se crea nueva wan"
            },
            {
                "id": "reboot_lan",
                "desc": "[LAN] se desactiva y se vuelve a activar la conexion LAN"
            },
            {
                "id": "validate_iprimary",
                "desc": "[LAN] se valida ip primaria en ONT"
            },
            {
                "id": "dns_config",
                "desc": "[LAN] se configura dns en ONT"
            },
            {
                "id": "reboot_wlan",
                "desc": "[WIFI] se desactiva y se vuelve a activar la conexion WLAN"
            },
            {
                "id": "zone_config",
                "desc": "[WIFI] se configura la zona horaria"
            },
            {
                "id": "advance_config_wifi",
                "desc": "[WIFI] se configura las opciones avanzadas 2.4Ghz / 5Ghz"
            },
            {
                "id": "chg_conf_wifi",
                "desc": "[WIFI] se cambia la SSID y la contraseña de la red wifi"
            },
            {
                "id": "validate_smrtwifi",
                "desc": "se revisa la issue list y event list"
            },
            {
                "id": "validate_smrtwifi2",
                "desc": "se verifica que no este en black list"
            },
            {
                "id": "validate_smrtwifi3",
                "desc": "se revisa las topologias"
            },
            {
                "id": "gen_tkt_",
                "desc": "se hace la prueba de manera cableada por ultima vez / se envia vas a ONT y se configura la wan con el cliente"
            },
            {
                "id": "gen_tkt_no",
                "desc": "[SI] se valida servicio ok"
            },
            {
                "id": "gen_tkt_si",
                "desc": "[NO] se agenda VT interno"
            },
            {
                "id": "end_call",
                "desc": "Se hace pregunta de aseguramiento / se envia a encuesta / fin llamada"
            }
        ]
    },
    {
        "nombre": "Servicios especiales",
        "code_name": "serv_esp",
        "listado": [{
                "id": "problem_type",
                "desc": "El problema se presenta en -> _____"
            },
            {
                "id": "web_app_p1",
                "desc": "[WEB/APP] Se valida que si puede ingresar con otros dispositivos conectados a la red de win"
            },
            {
                "id": "web_app_p2",
                "desc": "[WEB/APP] Se valida que si puede ingresar con otro operador"
            },
            {
                "id": "vpn_p1",
                "desc": "[VPN] Se valida que si puede ingresar con otros dispositivos conectados a la red de win"
            },
            {
                "id": "vpn_p2",
                "desc": "[VPN] Se valida que si puede ingresar con otro operador"
            },
            {
                "id": "vpn_p3",
                "desc": "[VPN] Se valida que las credenciales estan vigentes"
            },
            {
                "id": "create_wan",
                "desc": "se genera nuevas wan (max __)[NO TE OLVIDES DE ELIMINARLOS AL TERMINAR LA LLAMADA]"
            },
            {
                "id": "validate_chgip",
                "desc": "se verifica que se cambio la ip"
            },
            {
                "id": "dns_config_ont",
                "desc": "Se cambia DNS en ONT"
            },
            {
                "id": "dns_config_dvc_p1",
                "desc": "[WEB/APP] Se cambia DNS en dispositivo"
            },
            {
                "id": "dns_config_dvc_p2",
                "desc": "[WEB/APP] Limpiar cache de DNS del dispositivo"
            },
            {
                "id": "dns_config_dvc_p3",
                "desc": "[WEB/APP] Limpiar cache de DNS del navegador"
            },
            {
                "id": "reinstall_app",
                "desc": "[APP] Desistalar y volver a instalar"
            },
            {
                "id": "validate_smrtwifi2",
                "desc": "se verifica que no este en black list [EVIDENCIA]"
            },
            {
                "id": "print_error",
                "desc": "[VPN] Realizar tracert en cmd [EVIDENCIA]"
            },
            {
                "id": "gen_tkt_si",
                "desc": "[NO] se agenda NOC para tratamiento"
            },
            {
                "id": "gen_tkt_no",
                "desc": "[SI] se valida servicio ok"
            },
            {
                "id": "end_call",
                "desc": "Se hace pregunta de aseguramiento / se envia a encuesta / fin llamada"
            }
        ]
    },
    {
        "nombre": "Lentitud / ancho de banda",
        "code_name": "slowed_net",
        "listado": [{
                "id": "validate_plan_plus",
                "desc": "se verifica el plan asignado en smart OLT"
            },
            {
                "id": "problem_type",
                "desc": "El problema se presenta en -> _____"
            },
            {
                "id": "cat_eth",
                "desc": "[LAN] Se valida que el cable es de win o cat 5e +"
            },
            {
                "id": "duplex_state",
                "desc": "[LAN] Se valida estado del cable ethernet y jumper"
            },
            {
                "id": "direct_con_ont-lan",
                "desc": "[LAN]se valida conexion directa a la ONT"
            },
            {
                "id": "no_vpn-lan",
                "desc": "[LAN] Se valida sin conexion a VPN [SOLICITA LA IP PUBLICA PARA DESCARTAR]"
            },
            {
                "id": "validate_eth_port",
                "desc": "[LAN] Se valida el valor de la EthPort"
            },
            {
                "id": "validate_netcard",
                "desc": "[LAN] se valida la configuracion de tarjeta de red"
            },
            {
                "id": "validate_conband",
                "desc": "[WIFI] se verifica a que esta conectada a la banda __Ghz"
            },
            {
                "id": "wlan_optimo",
                "desc": "[WIFI] considerar alcances optimos<br>5Ghz -> 3m / 2.4Ghz -> 4m"
            },
            {
                "id": "direct_con_ont-wifi",
                "desc": "[WIFI]Validar conexion directa a ONT. No repetidores No mesh"
            },
            {
                "id": "no_vpn-wifi",
                "desc": "[WIFI] Se valida sin conexion a VPN [SOLICITA LA IP PUBLICA PARA DESCARTAR]"
            },
            {
                "id": "cone_type",
                "desc": "NAT type cambiado a Full Cone NAT"
            },
            {
                "id": "zone_config",
                "desc": "se configura la zona horaria del cliente"
            },
            {
                "id": "dns_config",
                "desc": "se configura la DNS en ONT"
            },
            {
                "id": "reboot_lan",
                "desc": "[LAN] se reinicia los puertos LAN"
            },
            {
                "id": "conf_ext_wifi",
                "desc": "[WIFI] se cambia el dominio regulatorio, canales y periodo"
            },
            {
                "id": "chg_conf_wifi",
                "desc": "[WIFI] se cambia la SSID y contraseña [HAZLO C/ CONCENTIMIENTO DEL CLIENTE]"
            },
            {
                "id": "reboot_wlan",
                "desc": "[WIFI] Reinicia las redes WLAN"
            },
            {
                "id": "quick_diag-new",
                "desc": "[CL NEW]Se aplica diagnostico rapido"
            },
            {
                "id": "validate_smrtwifi3-new",
                "desc": "[CL NEW]Se revisa las topologias"
            },
            {
                "id": "opt_wifi-new",
                "desc": "[CL NEW]Se valida la optimizacion del WIFI"
            },
            {
                "id": "validate_smrtwifi",
                "desc": "[CL OLD]se revisa la issue list y event list"
            },
            {
                "id": "quick_diag-old",
                "desc": "[CL OLD]Se aplica diagnostico rapido"
            },
            {
                "id": "opt_wifi-old",
                "desc": "[CL OLD]Se valida la optimizacion del WIFI"
            },
            {
                "id": "kpi_view",
                "desc": "[CL OLD]Se revisa la KPI view"
            },
            {
                "id": "validate_smrtwifi3-old",
                "desc": "[CL OLD]Se revisa las topologias"
            },
            {
                "id": "zone_cobert_validate",
                "desc": "[CL OLD]Se revisa las coberturas"
            },
            {
                "id": "con_cld",
                "desc": "[CL OLD]Se revisa la calidad de conexion"
            },
            {
                "id": "test_velocidad",
                "desc": "[CL OLD]Se realiza test de velocidad"
            },
            {
                "id": "list_validate_",
                "desc": "El inconveniente lo esta presentando en __"
            },
            {
                "id": "wifi_last_test",
                "desc": "[WIFI]se valida test con 1 dispositivo conectado a maximo 2 metros de la ONT[VALIDA EN TIEMPO REAL LA VELOCIDAD EN SMART OLT]"
            },
            {
                "id": "validate_testoncore",
                "desc": "[LAN] Se valida el uso del procesador mientras se realiza el test[VALIDA EN TIEMPO REAL LA VELOCIDAD EN SMART OLT]"
            },
            {
                "id": "validate_hardware",
                "desc": "[LAN] Se valida con otros dispositivos / se valida las caracteristicas minimas [ i3 y 4GB de RAM]"
            },
            {
                "id": "ignore_this",
                "desc": "[HACER ESTO CON CADA DISPONIBLE PARA DESCARTAR LADO CLIENTE / SI NINGUNO LOGRA LA VELOCIDAD SOLICITAR MODELO Y MARCA PARA DESCARTAR DESFASADO]algun dispositivo paso el test?"
            },
            {
                "id": "se_logro_no",
                "desc": "[SI][NO/TODOS SON DESFASADOS] se educa al cliente y se cierra el ticket"
            },
            {
                "id": "gen_tkt_si",
                "desc": "[NO/Min 1 no es desfasado][POTENCIA OK] se agenda NOC"
            },
            {
                "id": "se_logro_si",
                "desc": "[NO/Min 1 no es desfasado][POTENCIA OKn't] Se genera VT interna"
            },
            {
                "id": "gen_tkt_no",
                "desc": "[SI] se valida servicio ok"
            },
            {
                "id": "end_call",
                "desc": "Se hace pregunta de aseguramiento / se envia a encuesta / fin llamada"
            }
        ]
    },
    {
        "nombre": "Flujo de intermitencia",
        "code_name": "intermitencia",
        "listado": [{
                "id": "validate_plan_plus",
                "desc": "se verifica el plan asignado en smart OLT"
            },
            {
                "id": "problem_type",
                "desc": "El problema se presenta en -> _____"
            },
            {
                "id": "cat_eth",
                "desc": "[LAN] Se valida que el cable es de win o cat 5e +"
            },
            {
                "id": "duplex_state",
                "desc": "[LAN] Se valida estado del cable ethernet y jumper"
            },
            {
                "id": "direct_con_ont-lan",
                "desc": "[LAN]se valida conexion directa a la ONT"
            },
            {
                "id": "no_vpn-lan",
                "desc": "[LAN] Se valida sin conexion a VPN [SOLICITA LA IP PUBLICA PARA DESCARTAR]"
            },
            {
                "id": "validate_conband",
                "desc": "[WIFI] se verifica a que esta conectada a la banda __Ghz"
            },
            {
                "id": "wlan_optimo",
                "desc": "[WIFI] considerar alcances optimos<br>5Ghz -> 3m / 2.4Ghz -> 4m"
            },
            {
                "id": "direct_con_ont-wifi",
                "desc": "[WIFI]Validar conexion directa a ONT. No repetidores No mesh"
            },
            {
                "id": "no_vpn-wifi",
                "desc": "[WIFI] Se valida sin conexion a VPN [SOLICITA LA IP PUBLICA PARA DESCARTAR]"
            },
            {
                "id": "cone_type",
                "desc": "NAT type cambiado a Full Cone NAT"
            },
            {
                "id": "zone_config",
                "desc": "se configura la zona horaria del cliente"
            },
            {
                "id": "dns_config",
                "desc": "se configura la DNS en ONT"
            },
            {
                "id": "reboot_lan",
                "desc": "[LAN] se reinicia los puertos LAN"
            },
            {
                "id": "conf_ext_wifi",
                "desc": "[WIFI] se cambia el dominio regulatorio, canales y periodo"
            },
            {
                "id": "chg_conf_wifi",
                "desc": "[WIFI] se cambia la SSID y contraseña [HAZLO C/ CONCENTIMIENTO DEL CLIENTE]"
            },
            {
                "id": "reboot_wlan",
                "desc": "[WIFI] Reinicia las redes WLAN"
            },
            {
                "id": "nerf_ont",
                "desc": "Se desenergiza la ONT"
            },
            {
                "id": "quick_diag-new",
                "desc": "[CL NEW]Se aplica diagnostico rapido"
            },
            {
                "id": "validate_smrtwifi3-new",
                "desc": "[CL NEW]Se revisa las topologias"
            },
            {
                "id": "opt_wifi-new",
                "desc": "[CL NEW]Se valida la optimizacion del WIFI"
            },
            {
                "id": "validate_smrtwifi",
                "desc": "[CL OLD]se revisa la issue list y event list"
            },
            {
                "id": "quick_diag-old",
                "desc": "[CL OLD]Se aplica diagnostico rapido"
            },
            {
                "id": "opt_wifi-old",
                "desc": "[CL OLD]Se valida la optimizacion del WIFI"
            },
            {
                "id": "kpi_view",
                "desc": "[CL OLD]Se revisa la KPI view"
            },
            {
                "id": "validate_smrtwifi3-old",
                "desc": "[CL OLD]Se revisa las topologias"
            },
            {
                "id": "zone_cobert_validate",
                "desc": "[CL OLD]Se revisa las coberturas"
            },
            {
                "id": "con_cld",
                "desc": "[CL OLD]Se revisa la calidad de conexion"
            },
            {
                "id": "list_validate_",
                "desc": "El inconveniente lo esta presentando en __"
            },
            {
                "id": "list_validate_only_1",
                "desc": "[WIFI_LAN-PC]Una PC/Laptop mediante WiFi || Uno o todos los  dispositivo estan directo al modem"
            },
            {
                "id": "list_validate_only_2",
                "desc": "[WIFI-CEL]Un telf movil mediante WiFi"
            },
            {
                "id": "dns_config",
                "desc": "[WIFI_LAN-PC]Se agrega DNS al dispositivo"
            },
            {
                "id": "ping_validate",
                "desc": "[WIFI_LAN-PC] Se manda ping a 8.8.8.8"
            },
            {
                "id": "validate_specs_cl",
                "desc": "[WIFI_LAN-PC]Se valida las especs de los dispositivos / se valida el uso de CPU y RAM"
            },
            {
                "id": "render_god_",
                "desc": "[WIFI_LAN-PC]El dispositivo tiene ____ rendimiento"
            },
            {
                "id": "render_god_si",
                "desc": "[WIFI_LAN-PC][SI]Se deriva a NOC[EVIDENCIAS DE LA TOPOLOGIA AL TERMINAR LA ATENCION]"
            },
            {
                "id": "render_god_no",
                "desc": "[NO]Se educa al cliente y se cierra el ticket[EVIDENCIAS DE LA TOPOLOGIA AL TERMINAR LA ATENCION]"
            },
            {
                "id": "list_validate_all_1",
                "desc": "[WIFI-ALL] Todos los dispositivos se conectan mediante WiFi"
            },
            {
                "id": "gen_tkt_si",
                "desc": "[WIFI-ALL] se agenda VT externo"
            },
            {
                "id": "gen_tkt_no",
                "desc": "[SI] se valida servicio ok"
            },
            {
                "id": "end_call",
                "desc": "Se hace pregunta de aseguramiento / se envia a encuesta / fin llamada"
            }
        ]
    },
    {
        "nombre": "Mesh",
        "code_name": "mesh_nofunc",
        "listado": [

        ]
    }
]
//  [
//     {
//         "nombre": "Flujo de Luces verdes (Sin internet)",
//         "code_name": "noNet_ponOK",
//         "listado": [
//             {
//                 "ip_olt_nook": "Figura ip en smart OLT"
//             },
//             {
//                 "send_vas": "[NO] Solicitar el envio de VAS al ONT"
//             },
//             {
//                 "conf_wan_manual": "[NO] Se configura WAN con el cliente"
//             },
//             {
//                 "acces_iprouter_fail": "[NO] Cliente no puede ingresar a la ip del router"
//             },
//             {
//                 "reset_factory_ont": "[NO] Se reinicia de fabrica"
//             },
//             {
//                 "config_manual": "[NO] Se configura el router con el cliente"
//             },
//             {
//                 "configIP_manual": "[SI] Se agrega al smart wifi manualmente"
//             },
//             {
//                 "connectect_by": "Tiene problemas mediante->"
//             },
//             {
//                 "cat_eth": "[LAN] Se valida que el cable es de win o cat 5e +"
//             },
//             {
//                 "duplex_state": "[LAN] Se valida estado del cable ethernet"
//             },
//             {
//                 "status_ports": "[LAN] Se prueba en diferentes puertos de la ONT "
//             },
//             {
//                 "others_device_lan": "[LAN] se prueba con otros dispositivos"
//             },
//             {
//                 "validate_conband": "[WIFI] Se verifica la banda que esta conectada"
//             },
//             {
//                 "wlan_optimo": "[WIFI] considerar alcances optimos<br>5Ghz -> 3m / 2.4Ghz -> 4m"
//             },
//             {
//                 "others_device_wifi": "[WIFI] se prueba con otros dispositivos"
//             },
//             {
//                 "create_wan": "se crea nueva wan"
//             },
//             {
//                 "reboot_lan": "[LAN] se desactiva y se vuelve a activar la conexion LAN"
//             },
//             {
//                 "validate_iprimary": "[LAN] se valida ip primaria en ONT"
//             },
//             {
//                 "dns_config": "[LAN] se configura dns en ONT"
//             },
//             {
//                 "reboot_wlan": "[WIFI] se desactiva y se vuelve a activar la conexion WLAN"
//             },
//             {
//                 "zone_config": "[WIFI] se configura la zona horaria"
//             },
//             {
//                 "advance_config_wifi": "[WIFI] se configura las opciones avanzadas 2.4Ghz / 5Ghz"
//             },
//             {
//                 "chg_conf_wifi": "[WIFI] se cambia la SSID y la contraseña de la red wifi"
//             },
//             {
//                 "validate_smrtwifi": "se revisa la issue list y event list"
//             },
//             {
//                 "validate_smrtwifi2": "se verifica que no este en black list"
//             },
//             {
//                 "validate_smrtwifi3": "se revisa las topologias"
//             },
//             {
//                 "gen_tkt_": "se hace la prueba de manera cableada por ultima vez / se envia vas a ONT y se configura la wan con el cliente"
//             },
//             {
//                 "gen_tkt_no": "[SI] se valida servicio ok"
//             },
//             {
//                 "gen_tkt_si": "[NO] se agenda VT interno"
//             },
//             {
//                 "end_call": "Se hace pregunta de aseguramiento / se envia a encuesta / fin llamada"
//             }
//         ]
//     },
//     {
//         "nombre": "Servicios especiales",
//         "code_name": "serv_esp",
//         "listado": [
//             {
//                 "problem_type": "El problema se presenta en -> _____"
//             },
//             {
//                 "web_app_p1": "[WEB/APP] Se valida que si puede ingresar con otros dispositivos conectados a la red de win"
//             },
//             {
//                 "web_app_p2": "[WEB/APP] Se valida que si puede ingresar con otro operador"
//             },
//             {
//                 "vpn_p1": "[VPN] Se valida que si puede ingresar con otros dispositivos conectados a la red de win"
//             },
//             {
//                 "vpn_p2": "[VPN] Se valida que si puede ingresar con otro operador"
//             },
//             {
//                 "vpn_p3": "[VPN] Se valida que las credenciales estan vigentes"
//             },
//             {
//                 "create_wan": "se genera nuevas wan (max __)[NO TE OLVIDES DE ELIMINARLOS AL TERMINAR LA LLAMADA]"
//             },
//             {
//                 "validate_chgip": "se verifica que se cambio la ip"
//             },
//             {
//                 "dns_config_ont": "Se cambia DNS en ONT"
//             },
//             {
//                 "dns_config_dvc_p1": "[WEB/APP] Se cambia DNS en dispositivo"
//             },
//             {
//                 "dns_config_dvc_p2": "[WEB/APP] Limpiar cache de DNS del dispositivo"
//             },
//             {
//                 "dns_config_dvc_p3": "[WEB/APP] Limpiar cache de DNS del navegador"
//             },
//             {
//                 "reinstall_app": "[APP] Desistalar y volver a instalar"
//             },
//             {
//                 "validate_smrtwifi2": "se verifica que no este en black list [EVIDENCIA]"
//             },
//             {
//                 "print_error": "[VPN] Realizar tracert en cmd [EVIDENCIA]"
//             },
//             {
//                 "gen_tkt_si": "[NO] se agenda NOC para tratamiento"
//             },
//             {
//                 "gen_tkt_no": "[SI] se valida servicio ok"
//             },
//             {
//                 "end_call": "Se hace pregunta de aseguramiento / se envia a encuesta / fin llamada"
//             }
//         ]
//     },
//     {
//         "nombre": "Lentitud / ancho de banda",
//         "code_name": "slowed_net",
//         "listado": [
//             {
//                 "validate_plan_plus": "se verifica el plan asignado en smart OLT"
//             },
//             {
//                 "problem_type": "El problema se presenta en -> _____"
//             },
//             {
//                 "cat_eth": "[LAN] Se valida que el cable es de win o cat 5e +"
//             },
//             {
//                 "duplex_state": "[LAN] Se valida estado del cable ethernet y jumper"
//             },
//             {
//                 "direct_con_ont-lan": "[LAN]se valida conexion directa a la ONT"
//             },
//             {
//                 "no_vpn-lan": "[LAN] Se valida sin conexion a VPN [SOLICITA LA IP PUBLICA PARA DESCARTAR]"
//             },
//             {
//                 "validate_eth_port": "[LAN] Se valida el valor de la EthPort"
//             },
//             {
//                 "validate_netcard": "[LAN] se valida la configuracion de tarjeta de red"
//             },
//             {
//                 "validate_conband": "[WIFI] se verifica a que esta conectada a la banda __Ghz"
//             },
//             {
//                 "wlan_optimo": "[WIFI] considerar alcances optimos<br>5Ghz -> 3m / 2.4Ghz -> 4m"
//             },
//             {
//                 "direct_con_ont-wifi": "[WIFI]Validar conexion directa a ONT. No repetidores No mesh"
//             },
//             {
//                 "no_vpn-wifi": "[WIFI] Se valida sin conexion a VPN [SOLICITA LA IP PUBLICA PARA DESCARTAR]"
//             },
//             {
//                 "cone_type": "NAT type cambiado a Full Cone NAT"
//             },
//             {
//                 "zone_config": "se configura la zona horaria del cliente"
//             },
//             {
//                 "dns_config": "se configura la DNS en ONT"
//             },
//             {
//                 "reboot_lan": "[LAN] se reinicia los puertos LAN"
//             },
//             {
//                 "conf_ext_wifi": "[WIFI] se cambia el dominio regulatorio, canales y periodo"
//             },
//             {
//                 "chg_conf_wifi": "[WIFI] se cambia la SSID y contraseña [HAZLO C/ CONCENTIMIENTO DEL CLIENTE]"
//             },
//             {
//                 "reboot_wlan": "[WIFI] Reinicia las redes WLAN"
//             },
//             {
//                 "quick_diag-new": "[CL NEW]Se aplica diagnostico rapido"
//             },
//             {
//                 "validate_smrtwifi3-new": "[CL NEW]Se revisa las topologias"
//             },
//             {
//                 "opt_wifi-new": "[CL NEW]Se valida la optimizacion del WIFI"
//             },
//             {
//                 "validate_smrtwifi": "[CL OLD]se revisa la issue list y event list"
//             },
//             {
//                 "quick_diag-old": "[CL OLD]Se aplica diagnostico rapido"
//             },
//             {
//                 "opt_wifi-old": "[CL OLD]Se valida la optimizacion del WIFI"
//             },
//             {
//                 "kpi_view": "[CL OLD]Se revisa la KPI view"
//             },
//             {
//                 "validate_smrtwifi3-old": "[CL OLD]Se revisa las topologias"
//             },
//             {
//                 "zone_cobert_validate": "[CL OLD]Se revisa las coberturas"
//             },
//             {
//                 "con_cld": "[CL OLD]Se revisa la calidad de conexion"
//             },
//             {
//                 "test_velocidad": "[CL OLD]Se realiza test de velocidad"
//             },
//             {
//                 "list_validate_": "El inconveniente lo esta presentando en __"
//             },
//             {
//                 "wifi_last_test": "[WIFI]se valida test con 1 dispositivo conectado a maximo 2 metros de la ONT[VALIDA EN TIEMPO REAL LA VELOCIDAD EN SMART OLT]"
//             },
//             {
//                 "validate_testoncore": "[LAN] Se valida el uso del procesador mientras se realiza el test[VALIDA EN TIEMPO REAL LA VELOCIDAD EN SMART OLT]"
//             },
//             {
//                 "validate_hardware": "[LAN] Se valida con otros dispositivos / se valida las caracteristicas minimas [ i3 y 4GB de RAM]"
//             },
//             {
//                 "ignore_this": "[HACER ESTO CON CADA DISPONIBLE PARA DESCARTAR LADO CLIENTE / SI NINGUNO LOGRA LA VELOCIDAD SOLICITAR MODELO Y MARCA PARA DESCARTAR DESFASADO]algun dispositivo paso el test?"
//             },
//             {
//                 "se_logro_no": "[SI][NO/TODOS SON DESFASADOS] se educa al cliente y se cierra el ticket"
//             },
//             {
//                 "gen_tkt_si": "[NO/Min 1 no es desfasado][POTENCIA OK] se agenda NOC"
//             },
//             {
//                 "se_logro_si": "[NO/Min 1 no es desfasado][POTENCIA OKn't] Se genera VT interna"
//             },
//             {
//                 "gen_tkt_no": "[SI] se valida servicio ok"
//             },
//             {
//                 "end_call": "Se hace pregunta de aseguramiento / se envia a encuesta / fin llamada"
//             }
//         ]
//     },
//     {
//         "nombre": "Flujo de intermitencia",
//         "code_name": "intermitencia",
//         "listado": [
//             {
//                 "validate_plan_plus": "se verifica el plan asignado en smart OLT"
//             },
//             {
//                 "problem_type": "El problema se presenta en -> _____"
//             },
//             {
//                 "cat_eth": "[LAN] Se valida que el cable es de win o cat 5e +"
//             },
//             {
//                 "duplex_state": "[LAN] Se valida estado del cable ethernet y jumper"
//             },
//             {
//                 "direct_con_ont-lan": "[LAN]se valida conexion directa a la ONT"
//             },
//             {
//                 "no_vpn-lan": "[LAN] Se valida sin conexion a VPN [SOLICITA LA IP PUBLICA PARA DESCARTAR]"
//             },
//             {
//                 "validate_conband": "[WIFI] se verifica a que esta conectada a la banda __Ghz"
//             },
//             {
//                 "wlan_optimo": "[WIFI] considerar alcances optimos<br>5Ghz -> 3m / 2.4Ghz -> 4m"
//             },
//             {
//                 "direct_con_ont-wifi": "[WIFI]Validar conexion directa a ONT. No repetidores No mesh"
//             },
//             {
//                 "no_vpn-wifi": "[WIFI] Se valida sin conexion a VPN [SOLICITA LA IP PUBLICA PARA DESCARTAR]"
//             },
//             {
//                 "cone_type": "NAT type cambiado a Full Cone NAT"
//             },
//             {
//                 "zone_config": "se configura la zona horaria del cliente"
//             },
//             {
//                 "dns_config": "se configura la DNS en ONT"
//             },
//             {
//                 "reboot_lan": "[LAN] se reinicia los puertos LAN"
//             },
//             {
//                 "conf_ext_wifi": "[WIFI] se cambia el dominio regulatorio, canales y periodo"
//             },
//             {
//                 "chg_conf_wifi": "[WIFI] se cambia la SSID y contraseña [HAZLO C/ CONCENTIMIENTO DEL CLIENTE]"
//             },
//             {
//                 "reboot_wlan": "[WIFI] Reinicia las redes WLAN"
//             },
//             {
//                 "nerf_ont": "Se desenergiza la ONT"
//             },
//             {
//                 "quick_diag-new": "[CL NEW]Se aplica diagnostico rapido"
//             },
//             {
//                 "validate_smrtwifi3": "[CL NEW]Se revisa las topologias"
//             },
//             {
//                 "opt_wifi-new": "[CL NEW]Se valida la optimizacion del WIFI"
//             },
//             {
//                 "validate_smrtwifi": "[CL OLD]se revisa la issue list y event list"
//             },
//             {
//                 "quick_diag-old": "[CL OLD]Se aplica diagnostico rapido"
//             },
//             {
//                 "opt_wifi-old": "[CL OLD]Se valida la optimizacion del WIFI"
//             },
//             {
//                 "kpi_view": "[CL OLD]Se revisa la KPI view"
//             },
//             {
//                 "validate_smrtwifi3": "[CL OLD]Se revisa las topologias"
//             },
//             {
//                 "zone_cobert_validate": "[CL OLD]Se revisa las coberturas"
//             },
//             {
//                 "con_cld": "[CL OLD]Se revisa la calidad de conexion"
//             },
//             {
//                 "list_validate_": "El inconveniente lo esta presentando en __"
//             },
//             {
//                 "list_validate_only_1": "[WIFI_LAN-PC]Una PC/Laptop mediante WiFi || Uno o todos los  dispositivo estan directo al modem"
//             },
//             {
//                 "list_validate_only_2": "[WIFI-CEL]Un telf movil mediante WiFi"
//             },
//             {
//                 "dns_config-end": "[WIFI_LAN-PC]Se agrega DNS al dispositivo"
//             },
//             {
//                 "ping_validate": "[WIFI_LAN-PC] Se manda ping a 8.8.8.8"
//             },
//             {
//                 "validate_specs_cl": "[WIFI_LAN-PC]Se valida las especs de los dispositivos / se valida el uso de CPU y RAM"
//             },
//             {
//                 "render_god_": "[WIFI_LAN-PC]El dispositivo tiene ____ rendimiento"
//             },
//             {
//                 "render_god_si": "[WIFI_LAN-PC][SI]Se deriva a NOC[EVIDENCIAS DE LA TOPOLOGIA AL TERMINAR LA ATENCION]"
//             },
//             {
//                 "render_god_no": "[NO]Se educa al cliente y se cierra el ticket[EVIDENCIAS DE LA TOPOLOGIA AL TERMINAR LA ATENCION]"
//             },
//             {
//                 "list_validate_all_1": "[WIFI-ALL] Todos los dispositivos se conectan mediante WiFi"
//             },
//             {
//                 "gen_tkt_si": "[WIFI-ALL] se agenda VT externo"
//             },
//             {
//                 "gen_tkt_no": "[SI] se valida servicio ok"
//             },
//             {
//                 "end_call": "Se hace pregunta de aseguramiento / se envia a encuesta / fin llamada"
//             }
//         ]
//     }

// ]