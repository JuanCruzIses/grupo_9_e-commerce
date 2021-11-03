const libros = [
    {
        id: 1,
        titulo: "VIEJAS DEUDAS",
        autor: "José L. San Román",
        precio: 850.00,
        paginas: 208,
        categorias: "Policial",
        editorial: 'PUCK',
        sinopsis: "Un juez es hallado muerto en su casa, en lo que parece un crimen en ocasión de robo. No será fácil para el subcomisario Muran descubrir lo que realmente ha ocurrido. Dos historias paralelas transcurren entre los violentos años setenta y nuestro pasado reciente. Hay viejas deudas por saldar. Martín Muran sabe que cuanto más tiempo pase, menos probabilidades tiene de resolver un caso. En pocos días recorre lugares, interroga a sospechosos y acude a personas de confianza que lo ayudan a completar el rompecabezas. Siendo muy joven, en una encrucijada de su vida y sin medios económicos, había decidido ingresar a la academia de policía porque necesitaba un sueldo para sostenerse y además le daban la oportunidad de estudiar. Sin embargo, pronto se dio cuenta de que era un rastreador y un cazador nato, y se enamoró de su profesión. En pocos años se transformó en uno de los mejores detectives de homicidios. Muran es un hombre de piel dura, que no transa con el crimen, aunque a veces esto implique lidiar con sus superiores y con el establishment y hasta poner en riesgo su propia vida.",
        img: 'viejas-deudas.jpg'
    },
    {
        id: 2,
        titulo: "Á(R)MAME",
        autor: "Luz Larenn",
        precio: 1270.00,
        paginas: 304,
        categorias: "Policial",
        editorial: 'BOOKET',
        sinopsis: "Dos mujeres, dos tiempos, un mismo crimen. Sin familia ni amigos y con licencia por estrés, la psicóloga Audrey Jordan se desliza lenta pero segura a la depresión. Hasta que un día, cuando menos se lo espera, un mensaje anónimo y el asesinato de una joven extrañamente parecida a ella le dan la posibilidad de asumir una nueva identidad. ¿Es posible reinventarnos? ¿Puede un giro del destino borrar nuestras acciones y elecciones, y las de nuestros padres? ¿O siempre habrá algo oscuro y persistente que nos persiga? Un thriller que no puede dejar de leerse y mantiene al lector en vilo, narrado con ritmo muy ágil y diálogos inteligentes. Una novela que sostiene el suspenso y la intriga, que se cruzan con conflictos personales que acechan desde el pasado, hasta un final sorprendente.",
        img: 'armame.jpg'
    },
    {
        id: 3,
        titulo: "ASESINATO EN EL ORIENTE EXPRESS",
        autor: "Christie, Agatha",
        precio: 1000.00,
        paginas: 200,
        categorias: "Policial",
        editorial:'BOOKET',
        sinopsis: "Un grupo de viajeros se ven atrapados en el Orient Express en plena tormenta de nieve. Entre ellos pronto se descubre un cadáver. El asesino tiene que ser uno de los presentes. Al detective más famoso de la historia le corresponde averiguar quién ha cometido el crimen.",
        img:'asesinato-oriente.jpg'
    },
    {
        id: 4,
        titulo: "EL ARCHIVO DE SHERLOCK HOLMES",
        autor: "Arthur Conan Doyle",
        precio: 1130.00,
        paginas: 352,
        editorial: "PUCK",
        categorias: "Policial",
        sinopsis: "Sherlock Holmes es el detective más famoso de todos los tiempos. Alto, delgado, terriblemente inteligente, el solitario inglés sólo hallaba remedio a su aburrimiento resolviendo los casos policiales más complejos. El archivo de Sherlock Holmes (1927) es el último libro del gran detective, que sigue sorprendiendo con sus brillantes deducciones. Reúne los relatos “La aventura del cliente ilustre”, “La aventura del soldado de la piel decolorada”, “La aventura de la piedra preciosa de Mazarino”, “La aventura de Los Tres Gabletes”, “El vampiro de Sussex”, “La aventura de los tres Garrideb”, “El problema del puente de Thor”,  “La aventura del hombre que reptaba”, “La aventura de la melena del león”, “La aventura de la inquilina del velo”, “La aventura de Shoscombe Old Place” y “La aventura del fabricante de colores retirado”.",
        img:'archivo-sherlock.jpg'
    },
    {
        id: 5,
        titulo: "AL FINAL MUEREN LOS DOS",
        autor: "Silvera, Adam",
        precio: 1750.00,
        paginas: 352,
        editorial: "PUCK",
        categorias: "Juvenil",
        sinopsis: "Imagina un mundo en el que una organización les avisa a las personas la inminencia de su muerte. Imagina que empezó la cuenta regresiva. Imagina cómo vivirías tu vida en solo un día. ¿Estarías listo para decir adiós? Al final mueren los dos es un canto a la fuerza arrolladora de la vida; que transformará para siempre tu forma de comprender el tiempo; la amistad y el amor.",
        img:'al-final-mueren.jpg'            
    },
    {
        id: 6,
        titulo: "RENEGADOS",
        autor: "Meyer, Marissa",
        precio: 1399.00,
        paginas: 584,
        editorial: "VRYA",
        categorias: "Juvenil",
        sinopsis: "Identidades secretas; poderes extraordinarios. Ella quiere venganza; él justicia. Los Renegados son un sindicato de prodigios; humanos con habilidades extraordinarias; quienes surgieron de las ruinas de una sociedad destrozada y establecieron paz y orden donde reinaba el caos. Como campeones de la justicia; ellos son un símbolo de esperanza y coraje para todos; excepto para los villanos que alguna vez derrocaron. Nova tiene una razón para odiar a los Renegados; y tiene como misión la venganza. A medida que se acerca a su objetivo; conoce a Adrian; un Renegado que cree en la justicia y en Nova. Pero la lealtad de ella pertenece a un villano que tiene el poder de destruirlos a ambos. De la autora No. 1 de The New York Times; Marissa Meyer; llega un mundo pleno de aventuras; pasión; peligros y traiciones.",
        img:'renegados.jpg'
    },
    {
        id: 7,
        titulo: "HARRY POTTER Y LA PIEDRA FILOSOFAL",
        autor: "Rowling, J. K.",
        precio: 1899.00,
        paginas: 288,
        editorial: "SALAMANDRA BOLSILLO",
        categorias: "Juvenil",
        sinopsis: "Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Se siente muy triste y solo; hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el colegio interno Hogwarts de magia y hechicería. A partir de ese momento; la suerte de Harry da un vuelco espectacular. En esa escuela tan especial aprenderá encantamientos; trucos fabulosos y tácticas de defensa contra las malas artes. Se convertirá en el campeón escolar de quidditch; especie de fútbol aéreo que se juega montado sobre escobas; y hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Pero; sobre todo; conocerá los secretos que le permitirán cumplir con su destino. Pues; aunque no lo parezca a primera vista; Harry no es un chico común y corriente. ¡Es un verdadero mago!",
        img:'harry-potter.jpg'
    },
    {
        id: 8,
        titulo: "CAOS",
        autor: 'Tajes, Magali',
        precio: 1999.00,
        paginas: 240,
        editorial: "SUDAMERICANA",
        categorias: "Juvenil",
        sinopsis: "¿Cuántos muros se tienen que saltar para llegar a un puente? ¿Cuántos universos hay que dejar morir para que nazca el propio? Caos. Una fiesta; varias habitaciones; tres tiempos: pasado errático; presente mágico; futuro incierto. Puertas que abren mundos y cierran miedos. Cinco colores jugando a adivinar de qué color pintás la vida. Historias dentro de historias. Disfraces desnudos. La risa como revolución. Miradas que buscan ojos en los que reconocerse. Espejos y corazones rotos. Caos. Mucho caos. Todas las personas que habitan en mí sacando a bailar a las que habitan en vos. ¡Que empiece la fiesta!",
        img:'caos.jpg'
    }
]


const productDetailController = {

    productDetail: (req, res) => {
        res.render('productDetail', { libros, title: 'Detalle de Producto', id: (req.params.id - 1)})
    }
}

module.exports = productDetailController;