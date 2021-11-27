import NSAU16 from '../imagenes/NSAU16.jpg'
import NSAU19 from '../imagenes/NSAU19.jpg'
import NSKB28U from '../imagenes/NSKB28U.jpg'
import NSMIC130 from '../imagenes/NSMIC130.jpg'
import NSMO35S from '../imagenes/NSMO35S.jpg'
import NSPA8B from '../imagenes/NSPA8B.jpg'
import NSPA11 from '../imagenes/NSPA11.jpg'
import NSWC300 from '../imagenes/NSWC300.jpg'
import NSAUG300C from '../imagenes/NSAUG300C.jpg'
import NSKB25L from '../imagenes/NSKB25L.jpg'
import NSBUG6L from '../imagenes/NSBUG6L.jpg'
import NSCAMICROUSH from '../imagenes/NSCAMICROUSH.jpg'
import NSCAMEUC from '../imagenes/NSCAMEUC.jpg'
import NSFUTE78B from '../imagenes/NSFUTE78B.jpg'
import NSUH113Q from '../imagenes/NSUH113Q.jpg'
import NSWIR303N from '../imagenes/NSWIR303N.jpg'
import NSWIREU3 from '../imagenes/NSWIREU3.jpg'
import NSLI10W from '../imagenes/NSLI10W.jpg'
import NSDEPH375 from '../imagenes/NSDEPH375.jpg'
import NSPI206 from '../imagenes/NSPI206.jpg'
import NSCALC2 from '../imagenes/NSCALC2.jpg'
import NSSOTV55 from '../imagenes/NSSOTV55.jpg'
import NSUSBLR30 from '../imagenes/NSUSBLR30.jpg'
import NSAC14 from '../imagenes/NSAC14.jpg'
import NSCA480 from '../imagenes/NSCA480.jpg'

export const stock =[
    {
        id: 1,
        price: 2000,
        name: "Auricular tipo vicha con microfono, de diversos colores",
        img: NSAU16,
        descripcion: "Diseño liviano y ajustable. / Sonidos graves de alta calidad. / Tamaño 40. / Impedancia 32OHM. / Longitud Cable 1.8",
        category: 'audioVideo',
        Stock: 10
    },
    {
        id: 2,
        price: 300,
        name: "Auricular mini tipo in-ear deviersos colores",
        img: NSAU19,
        descripcion: "Frecuencia: 20Hz. / Potencia: 2mW. / Cable: plano. / Conector: 3.5mm sterio. / Funcion Manos Libres",
        category:'audioVideo',
        Stock: 10
    },
    {
        id: 3,
        price: 1029,
        name: "Teclado USB de tinta durable y 9 teclas multimedia",
        descripcion: "Tamaño: 465x190x33mm. / Diseño de apariencia elegante. / Con silicona de alta calidad y buena elasticidad. / De estructura robusta y sendacion muy comoda al tacto. / 113 teclas. / cable USB 1,5M",
        img: NSKB28U,
        category: 'computacion',
        Stock: 10
    },
    {
        id: 4,
        price: 803,
        name: "Microfono para PC",
        descripcion: "Respuesta de frecuencia: 50MHz-13KHz. / Sensibilidad: 58+/3DB. /Directividad: omni. / Rango de funcionamiento: 2V-8V. / Longitud del cable 1,6m",
        img: NSMIC130,
        category:'audioVideo',
        Stock: 10
    },
    {
        id: 5,
        price: 485,
        name: "Mouse",
        descripcion: "Tamaño mediano. / Motor optico. / 1200DPI alta precision y exatitud. / Teclas silenciosa. / Cable USB standard de 1,4M",
        img: NSMO35S,
        category: 'computacion',
        Stock: 10
    },
    {
        id: 6,
        price: 11500,
        name: "Parlante Portatil Carrito con BT,TM y MP3 con luces",
        descripcion:"Funcion inalambrica BT. / Funcion radio FM. / Funcion LINE IN. / Potencia 9W RMS reales. / Impedancia 4Ohm. / Subwoofer de 8 pulgadas",
        img: NSPA8B,
        category: 'audioVideo',
        Stock: 10
    },
    {
        id: 7,
        price: 5600,
        name: "Parlante multimedia Portatil con FM y BT",
        descripcion:"Subwoofer de 5.25. / Tamaño de la bocina: 3 pulgadas. / Funcion ecualizador. / Soporta Pendrives USB y tarjetas SD",
        img: NSPA11,
        category: 'audioVideo',
        Stock: 10
    },
    {
        id: 8,
        price: 1500,
        name: "Camara Web 1080P con microfono",
        descripcion: "No lleva drivers. / Resolucion imagen: 2M. / Salida de video: 1920x1080P 30fps. / Formato de video: MPEG. / Posee microfono incorporado" ,
        img: NSWC300,
        category: 'audioVideo',
        Stock: 10
    },
    {
        id: 9,
        price: 3742,
        name: "Auricular gaming PS4 camuflado vincha con microfono",
        descripcion: "Diamitro del parlante: 40mm. / Impedancia: 32Ohm. / Sensivilidad: 105+/-3dB. / Diametro microfono: 6x5mm. / Interfaz Auricular: 3.5mm. / Incluye control de volumen" ,
        img: NSAUG300C,
        category: 'gaming',
        Stock: 10
    },
    {
        id: 10,
        price: 2500,
        name: "Teclado USB retroiluminado y 10 teclas multimedia",
        descripcion: "Teclas sensibles al tacto. / No necisita Drivers, / Tres colores de luz ajustable en el teclado. / Tres niveles de brillo de luz. / Tres efectos de iluminacion. / Conexion USB. / Longitud de cable 1.8m" ,
        img: NSKB25L,
        category: 'gaming',
        Stock: 10
    },
    {
        id: 11,
        price: 75000,
        name: "Butaca Gaming con leds RGB",
        descripcion: "Peso maximo soportado 110kg. / Permite reclinar hasta 135°. / Permite fijar el respaldo en 18 posiciones diferentes. / Gira 360°. / Apoya brazos recubiertos de PU. / 5 Ruedas dobles silenciosas",
        img: NSBUG6L,
        category: 'gaming',
        Stock: 10
    },
    {
        id: 12,
        price: 270,
        name: "Cable micro USB 2.0 OTG a USB H de 10cm",
        descripcion: "Ideal para conectarlo a un cable USB AM-AF y cargar o pasar datos de dispositivos tales como smarthphones. / Longitud de clable 10m. / Conector micro USB",
        img: NSCAMICROUSH,
        category: 'celularTablet',
        Stock: 10
    },
    {
        id: 13,
        price: 867,
        name: "Cable USB a USB C de 1m con malla de metal ",
        descripcion: "Ideal para pasar datos y cargar el celulares. / Disponibles en color plateado, rosa, gris. / Longitud de 1m" ,
        img: NSCAMEUC,
        category: 'celularTablet',
        Stock: 10
    },
    {
        id: 14,
        price: 2200,
        name: "Funda para tablet 7'-8' con teclado bluetooth",
        descripcion: "Teclado bluetooth 3.0 incluido. / Teclado desmontable. / con un soporte para inclinar la Tablet. / Soporta iOS, Android, Windows" ,
        img: NSFUTE78B,
        category: 'celularTablet',
        Stock: 10
    },
    {
        id: 15,
        price: 10100,
        name: "Hub USB de 10 puertos + 1QC 3.0 de carga rapida",
        descripcion: "Incluye 10 puertos USB 3.0. / Incluye 1 puerto de carga rápida. / Compatible con puertos USB 2.0 e inferiores. / Carcaza metelica" ,
        img: NSUH113Q,
        category: 'redCables',
        Stock: 10
    },
    {
        id: 16,
        price: 2230,
        name: "Wireless Router N 300Mbps repetidor 3 ant de 5dBi",
        descripcion: "Rango de frecuencia 2.4GHz. / Hasta 300Mbps velocidad inalámbrica. /Incluye tres antenas 5 dBi para una mayor cobertura. / Firmware con ayuda en español. / Soporta botón WPS ON/OFF" ,
        img: NSWIR303N,
        category: 'redCables',
        Stock: 10
    },
    {
        id: 17,
        price: 2060,
        name: "Wireless USB range extender 300Mbps repetidor",
        descripcion: "El extensor de rango inalámbrico se conecta a su router inalámbricamente, amplificando y extendiendo su señal. / Fácil configuración por medio de su celular sin necesidad de descargar ninguna APP. / Velocidad de WIFI de hasta 300Mbps. / Puede ser doblado 90º y mantenerse vertical respecto al piso para de esa manera obtener la mejor performance" ,
        img: NSWIREU3,
        category: 'redCables',
        Stock: 10
    },
    {
        id: 18,
        price: 6266,
        name: "Linterna 10W recargable 5V con power bank, luz secundaria",
        descripcion: "800 Lúmenes. / Distancia de iluminación 500m. / Apta para exterior. / Incluye 6 modos de iluminación (alta, baja, luz secundaria, baliza roja, flash y SOS). / Batería: 4400 mAh Li-ion recargable " ,
        img: NSLI10W,
        category: 'herramientas',
        Stock: 10
    },
    {
        id: 19,
        price: 390,
        name: "Destornillador Phillips PH0x75mm",
        descripcion: "Con practico mango antideslizante. / De cromo vanadio con la pinta imantada. / Medidas de la punta metal 3x75mm" ,
        img: NSDEPH375,
        category: 'herramientas',
        Stock: 10
    },
    {
    id: 20,
    price: 1152,
    name: "Pinza de punta 6",
    descripcion: "Incluye herramienta de corte. / Con un practico grip aislante. / Longitud 16cm" ,
    img: NSPI206,
    category: 'herramientas',
    Stock: 10
},
{
    id: 21,
    price: 840,
    name: "Calculadora digital 12 digitos a pilas o energia solar",
    descripcion: "Permite hasta 12 digitos. / Doble energia, funciona a energia solar o a pila. / Utiliza una pila AA" ,
    img: NSCALC2,
    category: 'hogarOficina',
    Stock: 10
},
{
    id: 22,
    price: 4400,
    name: "Soporte para TV de 17'-55' hasta 35kg",
    descripcion: "Soporte para TV de tamaño entre 17 y 55 pulgadas. / Soporta 35Kg. /  Desplazamiento vertical: +5° a -12°. / Desplazamiento horizontal: +90° a -90°. / Incluye burbuja de nivelación" ,
    img: NSSOTV55,
    category: 'hogarOficina',
    Stock: 10
},
{
    id: 23,
    price: 2700,
    name: "Lampara de luz de led USB multifunción, plegable, con bateria recargable",
    descripcion: "Temperatura del color: 5000~5500k (fría). / Incluye batería de litio recargable de 1200mA. / Incluye LCD, con hora, alarma de reloj, temperatura y calendario. / Cuerpo plegable, con cable USB de 1m. /Tiempo de funcionamiento aproximado entre 3 y 8 horas " ,
    img: NSUSBLR30,
    category: 'hogarOficina',
    Stock: 10
},
{
    id: 24,
    price: 2000,
    name: "Compresor de aire 12V para auto 9 L/Min",
    descripcion: "Presión de aire máxima 250ps. / Flujo de aire máximo 9 litros por minuto. / Flujo de aire máximo 9 litros por minuto. / Largo de la manguera:45cm. / Voltaje de funcionamiento 12V" ,
    img: NSAC14,
    category: 'vehiculos',
    Stock: 10
},
{
    id: 25,
    price: 2400,
    name: "Camara para automóvil int 720P",
    descripcion: "Resolución de video: 640*480/30fps. / Formato de video: MJPEG(AVI). / Resolución de imagen: 3M, 2M, 1.3M, VGA. / Angulo del lente: 90°. / Pantalla: LCD de 2.4 pulgadas / Almacenamiento: soporta tarjeta Micro SD hasta 32Gb " ,
    img: NSCA480,
    category: 'vehiculos',
    Stock: 10
},

]