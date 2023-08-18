"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlantillasCalidad = void 0;
var PlantillasCalidad = [{
  "type": "Cableado",
  "data": {
    "Perdida_de_conexion": "Cliente no cuenta con internet, potencia {potencia_onu}dBm/{potencia_olt}dBm, se envia VAS, cable categoría 6, no tiene fisuras, se prueba en diferentes puertos PC y ONT, se prueba con diferentes dispositivos, se configura nueva wan, reinicio de router, se desactiva y activa la conexión LAN, se verifica la IP primaria, se cambia las DNS en la ONT, se valida SW, se asigna Ip fija y DNS en el equipo, se dio reset de fábrica, ya cuenta con servicio, cliente conforme, se cierra ticket",
    "Lentitud": "Cliente con problemas de lentitud por cable de red, potencia        -20dBm/-24dBm, cable categoría 6, no tiene fisuras, se prueba en diferentes        puertos PC y ONT, se prueba con diferentes dispositivos, se desconectaron        los repetidores, no cuenta con VPN, Eth Port 1000 mbps, tarjeta de red 1.0Gb        full duplex, se configura full cone NAT, zona horaria, se cambia las DNS en la        ONT, se reinicio las LAN, se valida SW, se valida procesador de la PC del        cliente, se valida en otros dispositivos, se valida características de la PC, se        dio reset de fábrica, ya no cuenta con lentitud, cliente conforme, se cierra        ticket.        "
  }
}];
exports.PlantillasCalidad = PlantillasCalidad;