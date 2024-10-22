var questions = [
    {
      num: 1,
      quest: "Por sus siglas en inglés Airport Collaborative Decision Making y traducción a español, ¿Que es A-CDM? ",
      answer: "Toma de decisiones colaborativas en el aeropuerto",
      options: [
        "Aeropuerto colaborativo y toma de decisiones",
        "Aeropuerto común de modelo operativo",
        "Toma de decisiones colaborativas en el aeropuerto",
        "Intercambio de datos de información de aviación",
      ]
    },
    {
      num: 2,
      quest: "Señala 1 beneficio que NO trae la implementación de este nuevo modelo operativo A-CDM",
      answer: "Garantizar que la aeronave esté lista para push-back",
      options: [
        "Garantizar que la aeronave esté lista para push-back",
        "Mejor administración del GDP",
        "Reducción de cambios de posiciones de parqueo a última hora",
        "Cumplimiento de itinerarios "
      ]
    },
    {
      num: 3,
      quest: "De la terminología A-CDM que recibiste y que has conocido hasta el momento, selecciona la lista de las más usadas",
      answer: "SOBT-EOBT-AOBT-ATOT-SIBT-EIBT-ALDT-AIBT",
      options: [
        "TWR-VTT-VDGS-TDZ-TTOT-ACGT-APP-ARDT",
        "SOBT-EOBT-AOBT-ATOT-SIBT-EIBT-ALDT-AIBT",
        "STD-ETD-ATD-AMS-AIDX-ASBT-ATIS-AIBT-SOBT",
        "NOTAM-PDS-ALDT-CAT-BOG-TSAT-COBT-CTOT",
      ]
    },
    {
      num: 4,
      quest: "Selecciona el hito que NO corresponde para el caso de los vuelos que vienen desde cualquier origen hacia BOG",
      answer: "AOBT - OUT: tiempo actual de retirada de calzos y movimiento del avión",
      options: [
        "ATOT - OFF: tiempo actual de despegue en ATO origen",
        "ALDT-ON: Tiempo actual de aterrizaje",
        "AOBT - OUT: tiempo actual de retirada de calzos y movimiento del avión",
        "AIBT-IN: tiempo actual de puesta de calzos y apertura de puerta(bodega/pax)",
      ]
    },
    {
      num: 5,
      quest: "Selecciona el hito que NO corresponde para el caso de los vuelos que salen de BOG hacia cualquier destino:",
      answer: "ALDT-ON: Tiempo actual de aterrizaje",
      options: [
        "ATOT-OFF: tiempo actual de despegue",
        "TOBT: Hora objetivo de retirada de calzos y movimiento del avion",
        "ASBT: Tiempo actual de comienzo de abordaje",
        "ALDT-ON: Tiempo actual de aterrizaje",
      ]
    },
    {
      num: 6,
      quest: "¿TOBT, hora en que el operador aéreo prevé que la aeronave estará lista para abandonar la posición de estacionamiento?",
      answer: "Verdadero",
      options: [
        "Verdadero",
        "Falso",
      ]
    },    
    {
      num: 7,
      quest: "Uno de los elementos conceptuales A-CDM es la conexión red ATFM, que es la encargada de:",
      answer: "Gestionar y balancear la demanda y capacidad del espacio aéreo",
      options: [
        "Gestionar y balancear la demanda y capacidad del espacio aéreo",
        "Garantizar que la aeronave esté lista para push-back",
        "Reducir cambios de posiciones de parqueo",
        "Calcular automáticamente la secuencia de salida de los aviones",
      ]
    },
    {
      num: 8,
      quest: "¿Cuáles son los tipos de condición adversa establecidos por A-CDM?",
      answer: "Reducción de la capacidad y suspensión de la operación",
      options: [
        "Caída y reinicio del sistema radar",
        "Extravío o deterioro de equipaje y retraso de vuelos",
        "Reducción de la capacidad y suspensión de la operación",
        "Acumulación del tráfico aéreo y verificación de seguridad de los aviones",
      ]
    },
    {
      num: 9,
      quest: "¿Cuál es la herramienta que calcula de forma automática la secuencia de salida de los aviones de la posición?",
      answer: "PDS (secuenciador de salidas)",
      options: [
        "VDGS(pantalla guía instalado en las posiciones de estacionamiento de avión)",
        "PDS (secuenciador de salidas)",
        "TSAT (hora objetivo de aprobación de puesta en marcha)",
        "AMS (Solución de gestión aeroportuaria)",
      ]
    },
    {
      num: 10,
      quest: "Selecciona la sigla que identifica el momento en que el operador aéreo prevé que la aeronave estará lista para abandonar la posición de estacionamiento en no más de 5 minutos después de haber recibido la autorización de Torre de Control.",
      answer: "TOBT (hora objetivo de retirada de calzos y movimiento del avión)",
      options: [
        "TOBT (hora objetivo de retirada de calzos y movimiento del avión)",
        "ASBT (tiempo actual de comienzo de abordaje)",
        "ACGT (tiempo actual de comienzo del proceso de servicio en tierra)",
        "TOBT (hora actual de retirada de calzos y movimiento del avión)",
      ]
    },
    {
      num: 11,
      quest: "Para el intercambio y actualización de información operacional en la plataforma A-CDM es necesario establecer conexión de red ATFM, entre: ",
      answer: "El Aeropuerto el Dorado (A-CDM) y la oficina de gestión de afluencia de tráfico aéreo - ATFM (Harmony)",
      options: [
        "CCO de OPAIN y Aerolíneas",
        "El proveedor de servicio en tierra y la oficina de gestión de afluencia de tráfico aéreo - ATFM (Harmony)",
        "El Aeropuerto el Dorado (A-CDM) y la oficina de gestión de afluencia de tráfico aéreo - ATFM (Harmony)",
      ]
    },
    {
      num: 12,
      quest: "Selecciona la sigla que identifica la hora asignada por torre de control a la aeronave para abandonar la posición de estacionamiento, si esta cumple con su TOBT, ",
      answer: "TSAT (Hora objetivo de aprobación de puesta en marcha)",
      options: [
        "TSAT (Hora objetivo de aprobación de puesta en marcha)",
        "ATOT (Tiempo actual de despegue)",
        "AIBT (Tiempo actual de puesta de calzos y apertura de puerta)",
        "ARDT (Tiempo actual de aeronave lista)",
      ]
    },
    {
      num: 13,
      quest: "Una de las responsabilidades del proveedor de servicio en tierra bajo el modelo operativo A-CDM en la operación de Copa y Wingo es registrar: ",
      answer: "Hito 8 – ACGT: Tiempo de comienzo del proceso de servicio en tierra",
      options: [
        "Hito 11 – ASBT: Tiempo actual de comienzo de abordaje",
        "Hito 9 – TOBT: Confirmación final de TOBT",
        "Hito 8 – ACGT: Tiempo de comienzo del proceso de servicio en tierra",
        "Hito 1 - Activación del plan de vuelo"         
      ]
    },
    {
      num: 14,
      quest: "Una vez emitido el TSAT (30 min antes de la salida del vuelo EOBT) se establece un número máximo de 3 cambios del TOBT para evitar ser eliminado de la secuencia de salida aportada por el sistema, esto es:",
      answer: "Verdadero",
      options: [
        "Verdadero",
        "Falso"        
      ]
    },
    {
      num: 15,
      quest: "En condiciones normales y si la operación está por itinerario, el TOBT es igual al STD, pero si se presentan demoras o irregularidades, el TOBT es igual al:",
      answer: "ETD",
      options: [
        "TOFF",
        "STA",
        "ETD",
        "TDOWN"        
      ]
    },
    {
      num: 16,
      quest: "El concepto de “Aeronave lista” implica:",
      answer:"Todas las anteriores",
      options: [
        "Puertas cerradas",
        "Puente o escaleras han sido retiradas",
        "Tractor de remolque conectado",
        "Todas las anteriores"
      ]
    },
    {
      num: 17,
      quest: "¿Con cuánto tiempo de anticipación requiere la plataforma A-CDM confirmar de forma manual la TOBT (hora objetivo de retirada de calzos y movimiento del avión)?",
      answer: "40 mins",
      options: [
        "60 mins",
        "20 mins",
        "40 mins", 
        "3 mins"
      ]
    },
    {
      num: 18,
      quest: "El nuevo modelo operativo está basado en el desempeño de la operación por 16 hitos y como aerolínea integrada somos responsables de entregar a la plataforma A-CDM:",
      answer: "7 Hitos",
      options: [
        "7 Hitos",
        "16 hitos",
        "2 hitos",
        "9 hitos"
      ]
    },
    {
      num: 19,
      quest: "Cuál será el canal de comunicación para la ejecución de los vuelos de la operación de CM y P5 bajo el modelo operativo A-CDM:",
      answer: "Grupo de chat en Teams",
      options: [
        "Verbal",
        "Correo electrónico",
        "Grupo de chat en Teams",
        "Llamada telefónica"      
      ]
    },
    {
      num: 20,
      quest: "Seleccione las 4 fases del flujo del modelo operativo A-CDM en el aeropuerto el Dorado: ",
      answer: "Comprobación de datos, llegada del vuelo al ATO el dorado, tránsito del vuelo en el ATO el Dorado, salida del vuelo desde el ATO el Dorado hacia su destino.",
      options: [
        "Comprobación de datos // llegada del vuelo al ATO el dorado // tránsito del vuelo en el ATO el Dorado // salida del vuelo desde el ATO el Dorado hacia su destino.",
        "Despegue del vuelo de origen a BOG // Activación del Plan de vuelo // Inicio de abordaje y Despegue del vuelo desde el ATO el Dorado.",
        "Activación del plan de vuelo // llegada de vuelo al ATO el Dorado // confirmación del TOBT y Emisión del TSAT.", 
        "Confirmación del TOBT, emisión del TSAT // solicitud de salida de posición // aprobación de salida de posición." 
      ]
    },
  ]


export default questions;