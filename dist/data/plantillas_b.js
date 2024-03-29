export const PlantillasBitacora = [{
        'categoria': 'FONOWIN',
        'proceso': {
            'caso': [
                'Límite de minutos', 'Portabilidad', 'Sin acceso App FONOWIN', 'Sin E/R llamadas', 'Sin servicio', 'Solicitud de cambio de equipo', 'Mal derivado - Cambio de número', 'Mal derivado - DGO', 'Mal derivado - GAMER', 'Mal derivado - Historial llamadas', 'Mal derivado - Límite de minutos', 'Mal derivado - Numero pendiente', 'Mal derivado - sin SVA', 'Mal derivado - Solicitud de BAJA', 'Mal derivado - Solicitud SVA FONOWIN',
            ],
            'tipo': [
                'App FONOWIN', 'Equipo fijo',
            ],
            'diagnostico': [
                'Credenciales erróneas', 'Equipo averiado', 'No tiene credenciales', 'Número duplicado', 'Potencia degradada', 'Problema de red', 'Problema físico', 'Sin configuración', 'Sin número en BBDD', 'Sin VLAN 20',
            ],
            'solucion': [
                'Config._Cambio de WAN', 'Configuración VOIP', 'Consulta número telefónico', 'Corrección física en teléfono', 'Entrega de credenciales', 'Envío a B.O.', 'Envío a NOC', 'Envío a SGI', 'Envío a VT', 'Informativo dentro de plazo', 'Informativo equipos terceros', 'Informativo PORTABILIDAD', 'Número pendiente',
            ]
        }
    },
    {
        'categoria': 'App-Web',
        'proceso': {
            'caso': [
                'Buffering', 'Capcha', 'Carga lenta', 'Sin acceso', 'No realiza llamadas VoWiFi', 'Mal derivado - App/Web sin acceso general', 'Mal derivado - Cliente empresas', 'Mal derivado - DGO', 'Mal derivado - GAMER', 'Mal derivado - Perfil de velocidad erróneo', 'Mal derivado - Sin acceso a Mi Portal', 'Mal derivado - Solicitud cableado',
            ],
            'tipo': [
                '*.gob.pe', '*.movistar', 'clarovideo.com', 'Correos Outlook', 'DGO (Externo)', 'IPTV', 'Pirata', 'rockstargames.com', 'Todas las web', 'Otros',
            ],
            'diagnostico': [
                'Bloqueo de IP', 'Bloqueo de puertos', 'Bloqueo por INDECOPI', 'Caída/Mantenimiento Web', 'Equipo de empresa', 'Equipo desfasado', 'Equipo mal configurado', 'Geolocalizacion', 'MESH fuera de cobertura', 'Potencia degradada', 'Utiliza una VPN',
            ],
            'solucion': [
                'Cambio de cable ethernet', 'Cambio de DNS', 'Cambio de WAN', 'Config. equipo cliente', 'Config. Hardware - Tarjeta de red', 'Config. puertos', 'Config. SSID-PW WiFi', 'Config._Cambio de WAN', 'Envio a NOC', 'Envío a VT', 'Informativo AP externo', 'Informativo CGNAT', 'Informativo Hardware - Equipo limitado', 'Informativo MESH WiFi - Cobertura', 'Informativo Web-App', 'Informativo WiFi - Bandas', 'Liberación de carga estática', 'MASIVO', 'Reinicio de ONT', 'Reselección de canales WiFi', 'Reset de fábrica ONT', 'Sincronización MESH', 'VAS',
            ]
        }
    },
    {
        'categoria': 'Ancho_de_Banda',
        'proceso': {
            'caso': [
                'Cableado', 'Inalámbrico', 'Total', 'Mal derivado - Cliente empresas', 'Mal derivado - DGO', 'Mal derivado - GAMER', 'Mal derivado - Informativo velocidad contratada', 'Mal derivado - Perfil de velocidad erróneo',
            ],
            'tipo': [
                'Test de velocidad',
            ],
            'diagnostico': [
                'Banda incorrecta', 'Cable Cat. 5', 'Equipo de empresa', 'Equipo desfasado', 'Fuera de cobertura', 'Geolocalización', 'Horas picos', 'MESH fuera de cobertura', 'ONT mal ubicado', 'Posicion de antenas ONT', 'Potencia degradada', 'Problema fisico en cable', 'Repetidor externo', 'Saturacion local del ancho de banda', 'Tarjeta de red 100mbps', 'Test a server no local', 'Test en consola', 'Test en TV', 'Utiliza una VPN', 'Web-test no confiable',
            ],
            'solucion': [
                'Cambio de cable ethernet', 'Cambio de WAN', 'Cambio DNS', 'Config. equipo cliente', 'Config. SSID-PW WiFi', 'Config._Cambio de WAN', 'Corrección de antenas', 'Desactivación Band Steering', 'Envio a NOC', 'Envío a VT', 'Informativo AP Externo', 'Informativo Hardware - Equipo limitado', 'Informativo MESH WiFi - Cobertura', 'Informativo ONT - Blacklist_Whistelist', 'Informativo ONT - Consulta SSID', 'Informativo ONT - Información dispositivos conectados', 'Informativo test local', 'Informativo Web - Server/APP', 'Informativo WiFi - Bandas', 'Informativo WiFi - Cobertura', 'Liberación de carga estática', 'Reinicio de ONT', 'Reselección de canales WiFi', 'Reset de fábrica MESH', 'Reset de fábrica ONT', 'Sincronización MESH', 'VAS',
            ]
        }
    },
    {
        'categoria': 'Intermitencia',
        'proceso': {
            'caso': [
                'Cableado', 'Inalámbrico', 'Total', 'Mal derivado - Cliente empresas', 'Mal derivado - DGO', 'Mal derivado - GAMER',
            ],
            'tipo': [
                'Específico', 'General',
            ],
            'diagnostico': [
                'Band steering', 'Cable de red mayor a 100m.', 'Carga estática', 'Colision SSID', 'Equipo desfasado', 'Fuera de cobertura', 'Horas pico', 'Intercepcion de señal', 'Latencia correcta', 'ONT mal configurada', 'ONT mal ubicado', 'Posicion de antenas ONT', 'Potencia degradada', 'Problema de fibra', 'Problema en patchcord', 'Problema físico en cable ethernet', 'Problemas electricos', 'Repetidor externo', 'Saturacion de ONT', 'Saturacion de red inalambrica', 'Saturacion local del ancho de banda', 'Temperatura de la ONT',
            ],
            'solucion': [
                'Cambio de cable ethernet', 'Cambio DNS', 'Config. equipo cliente', 'Config. Hardware - Tarjeta de red', 'Config. SSID-PW MESH', 'Config. SSID-PW WiFi', 'Config._Cambio de WAN', 'Configuracion WLAN', 'Corrección Patchcord', 'Correcion de posicion de antenas ONT', 'Desactivación Band Steering', 'Envío a NOC', 'Envío a VT', 'Informativo AP Externo', 'Informativo Hardware - Equipo limitado', 'Informativo MESH WiFi - Cobertura', 'Informativo WiFi - Bandas', 'Informativo WiFi - Cobertura', 'Liberación de carga estática', 'Reinicio de ONT', 'Reselección de canales WiFi', 'Reset de fábrica MESH', 'Reset de fábrica ONT', 'Sincronización MESH',
            ]
        }
    },
    {
        'categoria': 'MESH',
        'proceso': {
            'caso': [
                'Ancho de banda', 'Intermitencia', 'Perdida total', 'Mal derivado - AP Externo', 'Mal derivado - Cliente empresas', 'Mal derivado - DGO', 'Mal derivado - GAMER', 'Mal derivado - Solicitud entrega de MESH',
            ],
            'tipo': [
                'Luz blanca sin acceso a internet', 'Luz roja', 'No enciende', 'No sincroniza', 'Personalizar redes',
            ],
            'diagnostico': [
                'Fallo fisico del mesh', 'Fuera de cobertura', 'Mesh externo', 'No sincroniza', 'Cable averiado', 'Sin acceso al mesh',
            ],
            'solucion': [
                'Cambio de cable ethernet', 'Config. SSID-PW MESH', 'Config. SSID-PW WiFi', 'Config._Cambio de WAN', 'Informativo MESH WiFi - Bandas', 'Informativo MESH WiFi - Cobertura', 'Reinicio de ONT', 'Reset de fábrica MESH', 'Sincronización MESH', 'Diferenciar redes ONT_MESH',
            ]
        }
    },
    {
        'categoria': 'CCTV',
        'proceso': {
            'caso': [
                'Sin conexión', 'Sin vista local (Monitor)', 'Sin vista remota (Apps)', 'Mal derivado - Cliente empresas', 'Mal derivado - DGO', 'Mal derivado - GAMER',
            ],
            'tipo': [
                'CCTV Análoga', 'CCTV IP',
            ],
            'diagnostico': [
                'CCTV Mal configurado', 'CGNAT no permite la visión', 'Potencia degradada', 'Sin conexión',
            ],
            'solucion': [
                'Apertura de puertos', 'Config. Gateway', 'Config. Peer to peer (P2P)', 'Envío a VT', 'Informativo CGNAT',
            ]
        }
    },
    {
        'categoria': 'Gamer',
        'proceso': {
            'caso': [
                'Apertura de puertos', 'Consulta NAT', 'Descarga - Subida', 'Hosting', 'Latencias', 'Lentitud', 'Packet Loss', 'Sin acceso', 'Streaming', 'Mal derivado - Cliente empresas', 'Mal derivado - DGO', 'Mal derivado - GAMER',
            ],
            'tipo': [
                'CoD', 'Dota 2', 'FIFA', 'Fortnite', 'Free Fire', 'GTA V', 'LoL', 'Valorant ', '\<Ingresar juego \>',
            ],
            'diagnostico': [
                'Banda incorrecta', 'CGNAT no permite hosting', 'Equipo limitado', 'Error DNS', 'Fuera de cobertura', 'Latencia correcta', 'MASIVO Server', 'NAT correcta', 'Potencia degradada', 'Uiliza VPN',
            ],
            'solucion': [
                'Cambio de cable ethernet', 'Cambio DNS', 'Config._Cambio de WAN', 'Desactivación Band Steering', 'Habilitación de puertos', 'Informativo Hardware - Equipo limitado', 'Informativo latencias', 'Informativo test local', 'Informativo WiFi - Bandas', 'Informativo WiFi - Cobertura', 'Reselección de canales WiFi', 'VAS',
            ]
        }
    },
    {
        'categoria': 'Lentitud',
        'proceso': {
            'caso': [
                'Cableado', 'Inalámbrico', 'Total', 'Mal derivado - Cliente empresas', 'Mal derivado - DGO', 'Mal derivado - GAMER', 'Mal derivado - Perfil de velocidad erróneo',
            ],
            'tipo': [
                'Celulares - Tablets', 'Consolas', 'General', 'Laptops', 'PC', 'TV',
            ],
            'diagnostico': [
                'Banda incorrecta', 'Cat. 5', 'Equipo limitado', 'Error DNS', 'Fuera de cobertura', 'Geolocalizacion', 'Horas picos', 'MASIVO', 'MESH fuera de cobertura', 'ONT mal ubicado', 'Posicion de antenas ONT', 'Potencia degradada', 'Repetidor externo', 'Saturacion local del ancho de banda', 'Utiliza una VPN',
            ],
            'solucion': [
                'Cambio de cable ethernet', 'Cambio DNS', 'Config. equipo cliente', 'Config. SSID-PW WiFi', 'Config._Cambio de WAN', 'Desactivación Band Steering', 'Envío a NOC', 'Envío a VT', 'Habilitación de puertos', 'Informativo AP Externo', 'Informativo CGNAT', 'Informativo Hardware - Equipo limitado', 'Informativo Latencias', 'Informativo WiFi - Bandas', 'Informativo WiFi - Cobertura', 'Liberación de carga estática', 'MASIVO', 'Reinicio de ONT', 'Reselección de canales WiFi', 'Reset de fábrica ONT', 'Sincronización MESH', 'VAS',
            ]
        }
    },
    {
        'categoria': 'Pérdida_Total',
        'proceso': {
            'caso': [
                'Total', 'Parcial', 'Mal derivado - Cliente empresas', 'Mal derivado - DGO', 'Mal derivado - GAMER', 'Mal derivado - Desmatriculado', 'Mal derivado - Patchcord dañado por cliente', 'Mal derivado - Solicitud cableado', 'Mal derivado - Suspendido', 'Mal derivado - LOS en ROJO',
            ],
            'tipo': [
                'General', 'Cableado', 'Wi - Fi',
            ],
            'diagnostico': [
                'Cable averiado', 'Cable de red mayor a 100m.', 'Colision SSID', 'Equipo averiado', 'Equipo de empresa', 'Error DNS', 'Fuera de cobertura', 'Gateway erróneo', 'MASIVO', 'Potencia degradada', 'Problema de fibra', 'Problema de red', 'Problema eléctrico', 'Repetidor externo', 'Sin VLAN_WAN', 'WLAN_LAN desactivado',
            ],
            'solucion': [
                'Cambio de cable ethernet', 'Cambio DNS', 'Config. equipo cliente', 'Config. SSID-PW WiFi', 'Config._Cambio de WAN', 'Corrección eléctrica', 'Corrección Patchcord', 'Envío a NOC', 'Envío a VT', 'Habilitar LAN', 'Habilitar WLAN', 'Informativo AP Externo', 'Informativo Hardware - Equipo limitado', 'Informativo WiFi - Cobertura', 'Liberación de carga estática', 'MASIVO', 'Reinicio de ONT', 'Reset de fábrica ONT', 'Sincronización MESH', 'VAS',
            ]
        }
    },
    {
        'categoria': 'OTROS',
        'proceso': {
            'caso': [
                'Configuraciones', 'Informativo', 'Mal derivado', 'No amerita soporte', 'Otros',
            ],
            'tipo': [
                'Equipos terceros', 'MESH', 'ONT', 'WINBOX', 'Otros',
            ],
            'diagnostico': [
                'Consulta comercial', 'Inconveniente', 'Solicitud', 'Otros', 'Registro erroneo'
            ],
            'solucion': [
                'Cambio de MESH', 'Cambio de ONT', 'Cambio SSID_PW WiFi', 'Características del plan', 'Cliente ocupado, indica que llamara', 'Contrato SVA', 'Credenciales de acceso ONT', 'Desactivar WLAN_LAN', 'Entrega de equipos', 'Envío a VT por FID/REC', 'Exige VT', 'Facturación', 'IP pública', 'Reactivación del servicio', 'Reclamos', 'Registro erroneo_DNI incorrecto', 'Reubicación de ONT', 'Sin acceso a Mi Portal', 'Solicitud Cableado', 'Solicitud de BAJA', 'Solicitud DOWNGRADE', 'Solucionado sin soporte', 'Whitelist_Blacklist', 'Winbox',
            ]
        }
    },
]