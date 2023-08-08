"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlantillasBitacora = exports.status_tickets = void 0;
var status_tickets = [{
  "name": "cerrado",
  "time": false
}, {
  "name": "especial",
  "time": true
}, {
  "name": "agenda prolongada",
  "time": true
}, {
  "name": "validacion",
  "time": true
}, {
  "name": "visita tecnica",
  "time": false
}, {
  "name": "no contesta",
  "time": true
}, {
  "name": "noc",
  "time": false
}];
exports.status_tickets = status_tickets;
var PlantillasBitacora = [{
  'categoria': 'FonoWIN',
  'caso': ['Límite de minutos', 'Portabilidad', 'Sin acceso App FONOWIN', 'Sin E/R llamadas', 'Sin servicio', 'Solicitud de cambio de equipo'],
  'tipo': ['App FONOWIN', 'Equipo fijo'],
  'diagnostico': ['Credenciales erróneas', 'Equipo averiado', 'No tiene credenciales', 'Número duplicado', 'Potencia degradada', 'Problema de red', 'Problema físico', 'Sin configuración', 'Sin número en BBDD', 'Sin VLAN 20'],
  'solucion': ['Config._Cambio de WAN', 'Configuración VOIP', 'Consulta número telefónico', 'Corrección física en teléfono', 'Entrega de credenciales', 'Envío a B.O.', 'Envío a NOC', 'Envío a SGI', 'Envío a VT', 'Informativo dentro de plazo', 'Informativo equipos terceros', 'Informativo PORTABILIDAD', 'Número pendiente', 'Mal derivado - Cambio de número', 'Mal derivado - DGO', 'Mal derivado - GAMER', 'Mal derivado - Historial llamadas', 'Mal derivado - Límite de minutos', 'Mal derivado - Solicitud de BAJA', 'Mal derivado - Solicitud SVA FONOWIN', 'Mal derivado - SVA']
}, {
  'categoria': 'App_Web',
  'caso': ['Buffering', 'Capcha', 'Carga lenta', 'Sin acceso', 'Mal derivado - App/Web sin acceso general', 'Mal derivado - Cliente empresas', 'Mal derivado - DGO', 'Mal derivado - GAMER', 'Mal derivado - Perfil de velocidad erróneo', 'Mal derivado - Sin acceso a Mi Portal', 'Mal derivado - Solicitud cableado'],
  'tipo': ['*.gob.pe', '*.movistar', 'clarovideo.com', 'Correos Outlook', 'DGO (Externo)', 'IPTV', 'Pirata', 'rockstargames.com', 'Todas las web', 'Otros'],
  'diagnostico': ['Bloqueo de IP', 'Bloqueo de puertos', 'Bloqueo por INDECOPI', 'Caída/Mantenimiento Web', 'Equipo de empresa', 'Equipo desfasado', 'Equipo mal configurado', 'Geolocalizacion', 'MESH fuera de cobertura', 'Potencia degradada', 'Utiliza una VPN'],
  'solucion': ['Cambio de cable ethernet', 'Cambio de DNS', 'Cambio de WAN', 'Config. equipo cliente', 'Config. Hardware - Tarjeta de red', 'Config. puertos', 'Config. SSID-PW WiFi', 'Config._Cambio de WAN', 'Envio a NOC', 'Envío a VT', 'Informativo AP externo', 'Informativo CGNAT', 'Informativo Hardware - Equipo limitado', 'Informativo MESH WiFi - Cobertura', 'Informativo Web-App', 'Informativo WiFi - Bandas', 'Liberación de carga estática', 'MASIVO', 'Reinicio de ONT', 'Reselección de canales WiFi', 'Reset de fábrica ONT', 'Sincronización MESH', 'VAS']
}, {
  'categoria': 'Ancho_de_banda',
  'caso': ['Cableado', 'Inalámbrico', 'Total', 'Mal derivado - Cliente empresas', 'Mal derivado - DGO', 'Mal derivado - GAMER', 'Mal derivado - Informativo velocidad contratada', 'Mal derivado - Perfil de velocidad erróneo'],
  'tipo': ['Test de velocidad'],
  'diagnostico': ['Banda incorrecta', 'Cable Cat. 5', 'Equipo de empresa', 'Equipo desfasado', 'Fuera de cobertura', 'Geolocalización', 'Horas picos', 'MESH fuera de cobertura', 'ONT mal ubicado', 'Posicion de antenas ONT', 'Potencia degradada', 'Problema fisico en cable', 'Repetidor externo', 'Saturacion local del ancho de banda', 'Tarjeta de red 100mbps', 'Test a server no local', 'Test en consola', 'Test en TV', 'Utiliza una VPN', 'Web-test no confiable'],
  'solucion': ['Cambio de cable ethernet', 'Cambio de WAN', 'Cambio DNS', 'Config. equipo cliente', 'Config. SSID-PW WiFi', 'Config._Cambio de WAN', 'Corrección de antenas', 'Desactivación Band Steering', 'Envio a NOC', 'Envío a VT', 'Informativo AP Externo', 'Informativo Hardware - Equipo limitado', 'Informativo MESH WiFi - Cobertura', 'Informativo ONT - Blacklist_Whistelist', 'Informativo ONT - Consulta SSID', 'Informativo ONT - Información dispositivos conectados', 'Informativo test local', 'Informativo Web - Server/APP', 'Informativo WiFi - Bandas', 'Informativo WiFi - Cobertura', 'Liberación de carga estática', 'Reinicio de ONT', 'Reselección de canales WiFi', 'Reset de fábrica MESH', 'Reset de fábrica ONT', 'Sincronización MESH', 'VAS']
}, {
  'categoria': 'Ancho_de_banda',
  'caso': ['Cableado', 'Inalámbrico', 'Total', 'Mal derivado - Cliente empresas', 'Mal derivado - DGO', 'Mal derivado - GAMER', 'Mal derivado - Informativo velocidad contratada', 'Mal derivado - Perfil de velocidad erróneo'],
  'tipo': ['Específico', 'General'],
  'diagnostico': ['Band steering', 'Cable de red mayor a 100m.', 'Carga estática', 'Colision SSID', 'Equipo desfasado', 'Fuera de cobertura', 'Horas pico', 'Intercepcion de señal', 'Latencia correcta', 'ONT mal configurada', 'ONT mal ubicado', 'Posicion de antenas ONT', 'Potencia degradada', 'Problema de fibra', 'Problema en patchcord', 'Problema físico en cable ethernet', 'Problemas electricos', 'Repetidor externo', 'Saturacion de ONT', 'Saturacion de red inalambrica', 'Saturacion local del ancho de banda', 'Temperatura de la ONT'],
  'solucion': ['Cambio de cable ethernet', 'Cambio DNS', 'Config. equipo cliente', 'Config. Hardware - Tarjeta de red', 'Config. SSID-PW MESH', 'Config. SSID-PW WiFi', 'Config._Cambio de WAN', 'Configuracion WLAN', 'Corrección Patchcord', 'Correcion de posicion de antenas ONT', 'Desactivación Band Steering', 'Envío a NOC', 'Envío a VT', 'Informativo AP Externo', 'Informativo Hardware - Equipo limitado', 'Informativo MESH WiFi - Cobertura', 'Informativo WiFi - Bandas', 'Informativo WiFi - Cobertura', 'Liberación de carga estática', 'Reinicio de ONT', 'Reselección de canales WiFi', 'Reset de fábrica MESH', 'Reset de fábrica ONT', 'Sincronización MESH']
}];
exports.PlantillasBitacora = PlantillasBitacora;