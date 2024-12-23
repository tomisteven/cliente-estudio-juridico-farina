import loan from "../../assets/loan.png";
import loan2 from "../../assets/loan2.jpg";
import honorarios1 from "../../assets/honorarios1.webp";
import honorarios2 from "../../assets/honorarios2.jpg";
import inocente from "../../assets/inocente.JPG";
import culpable from "../../assets/culpable.JPG";
import falsasdenuncias from "../../assets/falsasdenuncias.jpg";
import quehaceabogado from "../../assets/quehaceabogado.jpg";
import quehaceabogado2 from "../../assets/quehaceabogado2.jpg";

const noticias = [
  {
    titulo: "Caso Loan. Derecho penal y fracasos",
    fecha: "1 de Octubre de 2024",
    tituloTexto:
      "El caso “Loan” y los fracasos del Sistema Penal. “El rey está desnudo”",
    descripcion:
      "El derecho penal suele fracasar en la obtención de soluciones concretas. El sistema penal y su funcionamiento actual es una muestra de ello. Aqui una mirada de un abogado penalista sobre la realidad del caso Loan",
    link: "https://www.calp.org.ar/derecho-penal/",
    subTitulo: "Todavía no hay respuestas para esta pregunta.",
    subDescripcion1:
      "La desaparición de Loan mantiene expectante y angustiado a todo un país. Seguramente por la características del caso: hablamos de un niño de apenas 5 años de edad, humilde e inocente que, arrancado de las entrañas de su entorno más íntimo, habría sido entregado por sus propios familiares a una red de trata de personas, para ser sometido a prácticas innombrables.",
    subDescripcion2:
      "Pero cuando se observa el caso más detenidamente, notamos que hay otros elementos que perturban fuertemente a la sociedad: hablo de posibles entramados de corrupción política y policial, de zonas liberadas para cometer los delitos más aberrantes, de absoluta desprotección de los más vulnerables, y sobre todo, del miedo; miedo que se palpa y brota desde las palabras de toda la gente de Nueve de Julio (Corrientes), quienes con el avance del caso, se van dando cuenta de una realidad dolorosa: Loan son todos los niños; hoy fue él, mañana será cualquier otro.",
    subDescripcion3:
      "Sobre este punto quisiera que reflexionemos. No sobre las hipótesis del caso, los responsables, o los posibles finales; lo cierto es que hoy Loan sigue desaparecido y todos esperamos su encuentro con vida. Pero si quiero destacar algo sobre la sensación que percibe la gente del pueblo y en definitiva todos los argentinos, y esto tiene que ver con los fracasos del sistema penal.",
    subDescripcion4:
      "“El rey esta desnudo” dice el título de esta nota, y según el cuento, unos estafadores habían prometido a un poderoso rey coser las ropas y trajes más bellos para vestirlo, con la advertencia de que estaban hechos de una tela tan especial, que solo podía ser vista por personas dignas e inteligentes. Lo cierto es que nadie se atrevía a contarle la verdad al rey, nadie quería ser el tonto que no lograba ver la tela mágica, y así todos decían ver la ropa que no existía, incluso el propio rey. Solo un inocente niño despojado de toda esa mentira libremente gritó al verlo: “el rey está desnudo”!",
    subDescripcion5:
      "El caso de Loan, además de conmovernos profundamente, es también un motivo para reflexionar sobre nuestro sistema penal, es una buena manera de pensar sobre con qué ropa esta vestido nuestro sistema de justicia.",
    subDescripcion6:
      "Sabemos que el Estado tiene la potestad de avanzar sobre las libertades más preciadas de los ciudadanos; puede detener, puede incautar, puede interrogar, y puede encarcelar gente en prisiones. Todo esto siempre respetando el debido proceso, y sobre todo, justificado bajo el objetivo de la seguridad y la paz social. Concedemos ese poder al Estado para sentirnos seguros; seguros de que ante la comisión de un delito el autor será penado, y seguros en que por ese motivo también el delito será desalentado, habrá menos delitos.",
    subDescripcion7:
      "Ahora bien, evidentemente la realidad es otra. El sistema penal históricamente ha fracasado en muchos de sus objetivos: nunca ofreció verdaderas soluciones a las víctimas del delito más allá del padecimiento del imputado; las cifras de seguridad muestran que el fenómeno delictivo no se ha reducido, todo lo contrario; los procesos penales resultan cada vez más largos y dolorosos, aumentando escandalosamente el uso de la prisión preventiva y el hacinamiento carcelario; y los casos que procesa el sistema tienden a ser cada vez más simples y rutinarios, sin atender formas de criminalidad más compleja, concentrando el castigo en los sujetos de jerarquía más baja, casualmente los más vulnerables. No obstante esa realidad, todos los días vemos detenidos por consumir marihuana o su venta al menudeo, por el robo de un celular o una bicicleta, por lesiones leves o amenazas en una discusión de tránsito, por vender indumentaria o tecnología trucha; incluso estamos acostumbrados a ver cierta publicidad del propio Estado en estos actos mostrando cual trofeos algunos porros incautados, algunas zapatillas truchas, o algunos pibes detenidos por el robo de un celular, bajo operativos y movilizaciones policiales dignas de películas.",
    subDescripcion8:
      "odo eso esta bien, nadie dice que no debamos ocuparnos de los delitos menores contra la propiedad, que hay que permitir la falsificación de marcas o desatender el consumo de drogas; pero la pregunta es otra ¿Qué estamos haciendo realmente con todo ese poder y recursos que le damos al Estado? ¿Estamos ocupándonos realmente de combatir el narcotráfico? ¿Esas medidas repercuten realmente en los objetivos del sistema penal? Las bandas de criminalidad organizada, muchas veces multinacional, secuestros y extorsiones, toda la criminalidad económica, el cibercrimen, el terrorismo y la evasión empresarial, las causas de corrupción, y por supuesto, las grandes redes de trata de personas ¿sufren alguna consecuencia desde la persecución estatal? ¿Qué capacidad real puede mostrar el sistema penal frente a esto?, es prácticamente nula.",
    subDescripcion9:
      "Por eso me pregunto -desde la analogía del cuento- ¿será cierto que el sistema penal está vestido con las mejores ropas; trajes de eficiencia, de justicia y de seguridad como se pretende muchas veces mostrar? Tal vez, ante casos como el de Loan (y muchos otros similares) que exigen profesionalismo en las investigaciones y rigor en el manejo de información, se demuestra como en el cuento, que esa ropa que se nos pretende mostrar no existe, el sistema es totalmente incapaz de brindar alguna seguridad mínima ante los casos que producen más daño. Y además, en el mientras tanto, permanecemos silenciosamente asombrados ante la burocracia, ineficiencia y discriminación con que el sistema procesa los casos más simples y burdos.",
    subDescripcion10:
      "Ese miedo que expresa la gente de Nueve de Julio, la sensación genuina de que Loan mañana será otro niño, nos permite abrir los ojos a todos los argentinos y darnos cuenta de que lo único que el sistema penal nos está ofreciendo son ropas invisibles. Nos permite reflexionar sobre qué justicia penal queremos y qué destino queremos darle al poder de castigar del Estado. El caso de Loan nos transforma a todos en el niño del cuento, nos permite exclamar que “el rey está desnudo”.",
    datosContactoNombre: "Julián Farina Balbi",
    datosContactoCargo:
      "Abogado UNLP. Especialista en Prueba Penal por la U. de Castilla La Mancha. Director Legal en Estudio Farina Balbi",
    datosContactoTelefono:
      "https://api.whatsapp.com/send/?phone=5492214281440&text=Hola+Dr.+Farina+Balbi+necesito+hacer+una+consulta&type=phone_number&app_absent=0",
    datosContactoIG: "https://www.instagram.com/julianfarinabalbi",
    datosContactoMail: "drfarinabalbi@gmail.com",
    imagen: loan,
    imagen2: loan2,
    id: 11,
    slug: "caso-loan-derecho-penal-y-fracasos",
  },
  {
    titulo: "Cuanto cobra un Abogado Penalista por caso ? ",
    fecha: "14/10/2024",
    tituloTexto:
      "Valor de la consulta abogado penalista ¿ Cuanto se cobra por un caso penal ?",
    descripcion:
      "A pesar de lo que mucha gente cree, no todos los abogados penalistas, ni todos los casos penales deben costar una fortuna.",

    subDescripcion1:
      "Es un mito arraigado en nuestra sociedad creer que el asesoramiento en todo asunto penal conlleva el pago de elevadísimos honorarios profesionales para el abogado penalista. Esto no es, ni tiene por qué ser así.",
    subDescripcion2:
      "La defensa penal, contar con un abogado especialista en derecho penal, y con expertos por materia, como ser delitos sexuales, homicidios, robos, o violencia de género, ciertamente requiere de profesionales actualizados y comprometidos proactivamente con la defensa penal de la persona, pero el valor de los honorarios del abogado, también dependerá de las características del caso, la complejidad, la duración estimada, y las diferentes estrategias de defensa. El abogado penalista atiende diferentes escenarios en una excarcelación, una morigeración de prisión preventiva, o un juicio oral.",
    subDescripcion3:
      "Esto quiere decir que, un abogado penalista, un estudio especializado en derecho penal que realmente se encuentre a la altura de los intereses que defiende, necesariamente cobrará por su servicio un valor acorde a lo que brinda, pero no por ello tiene que ser algo inalcanzable para el común de la gente. No todos los casos llegan a juicio oral, y no todos los casos requieren de estrategias prolongadas en el tiempo.",
    subDescripcion4:
      "Muchas veces la mejor solución para un caso penal se encuentra al alcance de la mano, solo es necesario conocer suficientemente el proceso penal e interpretar correctamente la prueba para conseguirla.",
    subDescripcion5:
      "Además, para los casos más difíciles, siempre existe la posibilidad de dividir el presupuesto de la defensa penal en etapas, determinar cuotas para el trabajo del abogado penalista de acuerdo a cada etapa del proceso penal, y de esta manera ofrecer un presupuesto apropiado a cada cliente.",
    subDescripcion6:
      "En el Estudio Jurídico FARINA BALBI tenemos esta convicción, y estamos dispuestos a escuchar tu caso, para recién en ese momento poder contestarte con una solución y presupuesto ajustado a tu situación específica. Un caso nunca es igual a otro.",
    subDescripcion7:
      "Es obligación del abogado explicarte cada paso, su razón de ser, sus posibilidades de éxitos y sus alternativas, así como también el presupuesto y modalidades de pago. El proceso penal, la investigación penal, la prisión preventiva y las posibilidades de permanecer en libertad durante el proceso requieren del abogado penalista no solo profesionalidad en su desempeño, sino también lenguaje claro y explicaciones completas para que el cliente entienda efectivamente sus derechos.",
    subDescripcion8:
      "Te alentamos en no caer en falsas promesas. El abogado penalista no puede prometer resultados. Prometer una determinada resolución es una irresponsabilidad profesional. A lo máximo que podemos aspirar es a ofrecer un claro escenario de las posibilidades en juego y las probabilidades de cada una. Para mayor información te adjuntamos la ley de honorarios profesionales que rige en la provincia de Buenos Aires",
    subDescripcion9:
      "Allí figuran los honorarios mínimos que por cada tema regula la ley",
    subDescripcion10: "No dudes en contarnos tu caso, esperamos tu consulta!!",
    datosContactoNombre: "Julián Farina Balbi",
    datosContactoCargo:
      "Abogado UNLP. Especialista en Prueba Penal por la U. de Castilla La Mancha. Director Legal en Estudio Farina Balbi",
    datosContactoTelefono:
      "https://api.whatsapp.com/send/?phone=5492214281440&text=Hola+Dr.+Farina+Balbi+necesito+hacer+una+consulta&type=phone_number&app_absent=0",
    datosContactoIG: "https://www.instagram.com/julianfarinabalbi",
    datosContactoMail: "drfarinabalbi@gmail.com",
    imagen: honorarios1,
    imagen2: honorarios2,
    link: "https://normas.gba.gob.ar/documentos/BOa6XTk0.html",
    id: 12,
    slug: "cuanto-cobra-un-abogado-penalista-por-caso",
  },
  {
    titulo:
      "Inocente o Culpable: el `juego` del Proceso Penal. El caso de Daniel BUSSON ",
    fecha: "01/11/2024",
    tituloTexto:
      "Derecho penal - Falsa denuncia - Causas armadas - Corrupción policial",
    descripcion:
      "El caso de Daniel Bussón es un claro ejemplo de cómo el sistema penal puede fallar en su objetivo de condenar a los culpables y absolver a los inocentes. La historia de un joven que lleva 11 años preso siendo inocente.",

    subDescripcion1:
      "En la sociedad existen muchos mitos sobre la justicia, y aun más sobre el fuero penal. Uno de los más arraigados es el de pensar que las condenas (y por qué no también las absoluciones) son siempre acertadas, correctas; que el sistema no se equivoca. Nada podría ser más falso!",
    subDescripcion2:
      "Solo si empezamos a entender la debilidad de esa creencia será posible comenzar a controlar con más rigor los procesos y decisiones de los jueces criminales; vale agregar: decisiones que atraviesan a las personas en su sentir más humano; lo que está en juego aquí es la vida y la libertad de las personas.",
    subDescripcion3:
      "Pero hay más. El problema no es solo que el sistema en su conjunto es sumamente falible, imperfecto y dependiente de la debilidad del conocimiento de los seres humanos de carne y hueso como cualquiera de nosotros; como cualquiera que está leyendo estas líneas; sino que además, depende fuertemente de un proceso prolongado de investigación burocrática, en el que intervienen muchos actores, todos diversos y con diferentes intereses. Estos actores le ponen al proceso sus matices, sus características, y muchas veces sus vicios y defectos.",
    subDescripcion4:
      "Abogados, víctimas, familiares, fiscales, policías, peritos, jueces de grado, jueces revisores, cortes, etc. Cada uno tiene diferentes funciones en este “juego” y también cada uno ve su lado de la moneda, muchas veces opacando su contracara.",
    subDescripcion5:
      "Pero afortunadamente, al menos en teoría, se supone que ese “juego” tiene ciertas reglas básicas que son aceptadas y compartidas por todos los jugadores. Tal vez la más importante de ellas es la que establece un “principio de oro”, el objetivo del proceso es condenar a todos los culpables, pero a ningún inocente. Partimos de una base que todos los jugadores deben defender: ¡No queremos condenar inocentes! Si la trampa viene por este lado, entonces el juego pierde todo sentido.",
    subDescripcion6:
      "Esta introducción sirve para repensar la función de la policía, los valores que debe respetar en la investigación, y la actividad de los funcionarios judiciales en su control.",
    subDescripcion7:
      "Justamente esta parte del juego es la que tuvo gravísimas fallas en el caso de Daniel Busson. Como abogado penalista Director de FARINA BALBI Estudio Jurídico, conocí a Lucía, la compañera de Daniel Bussón, cuando por redes me pidió una opinión del caso. Ella sostuvo una titánica tarea de difundir la injusticia sufrida por Daniel en su causa. Luego tuve el privilegio de asesorar a la defensa del coimputado, y a la propia Lucia para conseguir la libertar de Daniel. Pero veamos como “este juego” lo perjudicó a Daniel de por vida:",
    subDescripcion8:
      "Daniel tiene hoy 33 años, y fue detenido siendo un pibe de 23. Fue condenado a prisión perpetua en 2017, y hoy lleva 11 años preso siendo inocente. En su causa, “el juego” que presentamos arriba se jugó muy mal. La policía lo detuvo sin razón aparente, llevándolo a una rueda de reconocimiento sin justificación o nexo que lo involucre con el hecho. Los testigos que apuntan a Daniel habían declarado originalmente que no podían reconocer a nadie, pero sin embargo, la policía los llevó igual a intentar identificar a alguien, en esa rueda se contaminó a los testigos con información y no hubo ningún control de garantías. Como si fuera poco, uno de los policías intervinientes hoy se encuentra condenado a 9 años de prisión por cometer el delito de corrupción en otra causa similar.Como si fuera poco, uno de los policías intervinientes hoy se encuentra condenado a 9 años de prisión por cometer el delito de corrupción en otra causa similar.",
    subDescripcion9:
      "De la prueba surgían otras líneas de investigación: se secuestró una moto con las características que habían dado varios testigos, sin embargo no se profundizó y ni se logró descartar. Todo este cuadro de duda, fue además receptado por uno de los jueces, ya que el fallo no fue unánime, sino que para uno de ellos correspondía la libertad.",
    subDescripcion10:
      "Al día de hoy la Corte nacional está revisando la situación de Daniel. Pero estas líneas no las escribo en soledad, todo lo contrario. Su pedido de justicia ha sido acompañado por reconocidas organizaciones dedicadas a detectar este tipo de injusticias: Comisión por la Memoria, Innocence Project, Cels, Pensamiento Penal, Apdh, Serpaj, entre otras.",
    subDescripcion11:
      "Un día me dijo un conocido profesor al saber de mi pasión por el derecho penal: “Mira Julián… el derecho penal es muy ingrato”. Estoy seguro que en sus palabras había mucho de verdad, también algo de advertencia casi paternalista. Tenía toda la razón! Pero también hay muchas satisfacciones en esta lucha.Las pequeñas victorias que uno siente arrebatar a la injusticia, acá valen el doble. Conocer a Lucía y a Daniel, sin dudas fue un trago agridulce, sentí propio su dolor e incertidumbre, pero hoy, habiendo podido aportar un granito de arena en su causa desde mi asesoramiento, y sabiendo el enorme apoyo que lograron, puedo decir que se ha convertido en una victoria, una grande. Ojala que “el ultimo jugador” note la violación de las reglas de juego ocurridas en la causa de Daniel, y termine esta partida con una solución justa, SU LIBERTAD.",
    datosContactoNombre: "Julián Farina Balbi",
    datosContactoCargo:
      "Abogado UNLP. Especialista en Prueba Penal por la U. de Castilla La Mancha. Director Legal en Estudio Farina Balbi",
    datosContactoTelefono:
      "https://api.whatsapp.com/send/?phone=5492214281440&text=Hola+Dr.+Farina+Balbi+necesito+hacer+una+consulta&type=phone_number&app_absent=0",
    datosContactoIG: "https://www.instagram.com/julianfarinabalbi",
    datosContactoMail: "drfarinabalbi@gmail.com",
    imagen: inocente,
    imagen2: culpable,
    link: "https://www.pagina12.com.ar/526477-la-condena-a-perpetua-plantada-por-la-policia",
    id: 13,
    slug: "caso-daniel-busson-inocente-o-culpable",
  },
  {
    titulo:
      "¿Cómo actuar ante falsas denuncias? Experiencia y Asesoramiento de un abogado penalista en La Plata",
    fecha: "20/11/2024",
    tituloTexto:
      "Defensa penal en casos de falsas denuncias.",
    descripcion:
      "¿Qué es una falsa denuncia? ¿Qué hago si me denuncian falsamente? El derecho penal y la justicia penal, se supone que deben ocuparse de atender los conflictos más graves: los hechos que afectan lo que más preciamos. Esto se vé claramente en los delitos contra la vida, contra la libertad, la propiedad o la libertad sexual.",

    subDescripcion1:
      "Pero además, debería recurrirse al derecho penal, a la fuerza del sistema penal solamente cuando existe un daño a ese bien protegido, y no existe una solución más pacífica posible. Dicho esto, la denuncia penal, es una de las formas principales que el Estado tiene para iniciar una investigación penal. La otra es la actuación de la policía en la prevención de los delitos, que al tomar conocimiento del hecho actúa e informa al fiscal para que tome intervención.",
    subDescripcion2:
      "Pero no puede olvidarse que la facultad y derecho de denunciar que tiene todo ciudadano mayor de 16 años, descansa en un mandato de buena fé, de colaboración con la justicia. En camio, quien denuncia un delito a sabiendas de su falsedad está cometiendo un hecho delictivo en sí mismo. Pero ¿Qué es una falsa denuncia? La falsa denuncia es un delito tipificado en el código penal. Pero hay que comprender algunas diferencias: una cosa es una denuncia formulada de buena fé, que por cualquier motivo no puede llegar a acreditarse, o incluso el fiscal decide su archivo. Vale decir que el hecho denunciado no puede probarse o bien el denunciado no ha tenido participación delictiva.",
    subDescripcion3:
      "Otra cosa muy distinta es la que refiere al delito de falsa denuncia. Para hablar de este delito, es necesario que se sigan estos pasos: que un particular haga una denuncia en contra de una persona determinada, que esa denuncia se apoye en un hecho inexistente o del que no he tenido participación el sujeto indicado (falsedad), sobre todo, que el denunciante realice el acto conociendo la falsedad que afirma ante la justicia, engañando a los funcionarios para hacerlos creer que el relato es verdadero; y finalmente debe constituir una denuncia en sentido estricto -identificar al autor, el hecho, el delito y dirigirse con las formalidades necesarias ante la autoridad con competencia para ello. Vale decir que exclamar, contar o referir a alguien de un hecho falso no constituye el delito mientras no se formule formalmente ante la administración.",
    subDescripcion4:
      "¿Que hago si me denunciaron falsamente? ¿Qué debo hacer ante una falsa denuncia? Lo primero es actuar con mucha calma, pero al mismo tiempo, rápidamente consultar un abogado penalista, o estudio jurídico penal especializado en esta materia.",
    subDescripcion5:
      "Un abogado penalista experto en falsas denuncias podrá mostrarte las formas más viables y rápidas de demostrar el delito. Esto quiere decir que es imprescindible tomar acción rápido. Cuando toda la fuerza del derecho penal se vuelca sobre una persona inocente, peligra seriamente su libertad, y las únicas emociones cercanas son funestas, es muy difícil encontrar tranquilidad o esperanza, y a ese escenario de terror se le suman todos los padecimientos de la familia, los seres queridos y la condena social que la gente y los medios suelen aplicar sin ningún remordimiento. Esto ocurre en todos los casos en que un inocente se ve injustamente sometido a esta maquinaria de encarcelar. Pero en el caso de las falsas denuncias es aun peor, porque el acto generador, el inicio proviene de la mala fé de otra persona, de la intención conciente de engañar al sistema penal y con ello causar directa o indirectamente un grave perjuicio al imputado.",
    subDescripcion6:
      "Todo esto se ve además impulsado por la falta de atención que la justicia pone a estos casos. El delito de falsa denuncia tiene penas muy bajas! de 2 meses a 1 año de prisión, o incluso solo multa. Son casos que raramente son denunciados y mucho menos perseguidos, así la condena por una falsa denuncia es una rareza. ",
    subDescripcion7:
      "Por eso, si temes ser víctima de una denuncia falsa o estás enfrentando una, recuerda que actuar rápido marca la diferencia. Las pruebas y los testimonios se desvanecen con el tiempo, y un abogado penalista experto en estos temas puede ayudarte a estructurar tu defensa desde el primer momento.Enfrentar una falsa denuncia es muy duro, pero no estás solo! Mi objetivo es ayudarte a superar esta etapa con claridad y justicia. ",
    subDescripcion8:
      "Si tenes dudas, necesitas orientación o estás atravesando un caso así, no dudes en escribirme para que analicemos tu caso juntos.",
    subDescripcion9:
      "Descubre cómo un abogado penalista puede ayudarte a enfrentar acusaciones falsas. Contactame para hablar de tu caso! La Plata, Provincia de Buenos Aires y CABA. ",
    datosContactoNombre: "Julián Farina Balbi",
    datosContactoCargo:
      "Abogado UNLP. Especialista en Prueba Penal por la U. de Castilla La Mancha. Director Legal en Estudio Farina Balbi",
    datosContactoTelefono:
      "https://api.whatsapp.com/send/?phone=5492214281440&text=Hola+Dr.+Farina+Balbi+necesito+hacer+una+consulta&type=phone_number&app_absent=0",
    datosContactoIG: "https://www.instagram.com/julianfarinabalbi",
    datosContactoMail: "drfarinabalbi@gmail.com",
    imagen: falsasdenuncias,
    /* imagen2: culpable, */
    link: "https://www.lanacion.com.ar/editoriales/deleznables-falsas-denuncias-nid22092022/",
    id: 14,
    slug: "como-actuar-ante-falsas-denuncias",
  },
  {
    titulo:
      "¿ Qué hace un ABOGADO PENALISTA ?",
    fecha: "22/12/2024",
    tituloTexto:
      "¿Qué diferencia hay entre un abogado y un abogado penalista?",
    descripcion:
      "Un estudio jurídico penal debe contar con abogados especialistas en todas las ramas del dereco penal.",

    subDescripcion1:
      "El abogado penalista se ocupa de la defensa y representación de víctimas en todos los delitos del Código Penal argentino.",
    subDescripcion2:
      "Abogado penalista es el profesional del derecho que se desempeña en el fuero penal. Nuestra organización de justicia, en la Nación argentina y las provincias se encuentra dividida por fueros, estas son ramas del derecho específicas que se apegan a un tipo de temas determinado. El derecho penal en general se corresponde con el fuero penal o criminal y correccional. También esta el fuero civil, comercial, de familia, laboral, etc.",
    subDescripcion3:
      "En la provincia de Buenos Aires, los delitos correccionales son aquellos que tienen prevista una pena de hasta 6 años; los que superan ese límite son delitos criminales. Ambos tienen diferencias principalmente en la forma de juzgamiento, los primeros ante un juez correccional, y los segundos ante un Tribunal Oral compuesto por tres jueces penales.",
    subDescripcion4:
      "Un estudio jurídico especializado en derecho penal debe contar con profesionales abogados expertos en las distintas ramas del derecho penal y procesal penal. La demanda de servicios de este siglo exige a los penalistas un grado de especialización superior en cada uno de las sub categorías que conforman el derecho penal, por ejemplo: delitos contra las personas, delitos de género, delitos patrimoniales, o bien en el aspecto procesal: excarcelaciones, morigeraciones a la prisión preventiva, recursos de apelación y casación, o juicio por jurados.",
    subDescripcion5:
      "Un buen abogado penalista debe poder ofrecer respuestas eficiente en todos los delitos tipificados en el Código Penal. Cada uno de ellos implica diferentes estrategias de defensa, maneras de trabajar y grados de complejidad.",
    subDescripcion6:
      "Lo más importante a tener en cuenta es que el abogado penalista es un profesional que debe tener una mirada conglobante de todo el proceso penal, y trabajar en conjunto con profesionales de otras disciplinas. Esto es: el abogado penalista interviene desde los primeros minutos de la investigación, antes de que exista una declaración indagatoria o un imputado penalmente. Y además se desempeña defendiendo a su cliente en un gran número de actos procesales, como declaraciones testimoniales, indagatorias, pericias, reconocimientos de personas, de cosas, etc.",
    subDescripcion7:
      "Por otro lado, cualquier abogado especialista en derecho penal, hoy debe trabajar con un equipo interdisciplinario. La actualidad del proceso penal exige que, para ofrecer a nuestros clientes un servicio de defensa penal de alta calidad, sea imprescindible tener un equipo de profesionales a nuestro lado: peritos en psicología, psiquiatría, medicina, informática, mecánica, son solo algunos de los más frecuentes. Por ultimo, el abogado penalista es un profesional que acompaña al cliente en los momentos más difíciles de su vida. Esto requiere dos cosas, además de una alta capacitación profesional: primero empatía con la situación que atraviesa la otra persona, escuchar atentamente su realidad y comprometerse con sus vivencias personales; segundo explicar cada uno de los detalles de la estrategia de defensa y la realidad procesa en lenguaje claro y entendible. La comunicación eficiente, que el cliente entienda su realidad en el proceso penal es clave para que tenga una defensa efectiva y eficiente. ",
    subDescripcion8:
      "Si estás pasando por un proceso penal, o buscando un abogado penalista, no dejes de tener en cuenta estas explicaciones, y ante cualquier asesórate rápidamente. No olvides que lo más importante es la confianza que tenes con tu abogado. Al fin de cuentas será quien te acompañará hasta las últimas consecuencias.",
    datosContactoNombre: "Julián Farina Balbi",
    datosContactoCargo:
      "Abogado UNLP. Especialista en Prueba Penal por la U. de Castilla La Mancha. Director Legal en Estudio Farina Balbi",
    datosContactoTelefono:
      "https://api.whatsapp.com/send/?phone=5492214281440&text=Hola+Dr.+Farina+Balbi+necesito+hacer+una+consulta&type=phone_number&app_absent=0",
    datosContactoIG: "https://www.instagram.com/julianfarinabalbi",
    datosContactoMail: "drfarinabalbi@gmail.com",
    imagen: quehaceabogado,

   imagen2: quehaceabogado2,
    link: "https://servicios.infoleg.gob.ar/infolegInternet/anexos/15000-19999/16546/texact.htm",
    id: 15,
    slug: "que-hace-un-abogado-penalista",
  },
];

export default noticias;
