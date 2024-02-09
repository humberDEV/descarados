<template>
  <div class="game-card">
    <div class="card" :style="{ backgroundColor: card.color }">
      <p class="card-text">{{ card.text }}</p>
    </div>
    <v-btn class="next-card-button" @click="getNextCard">
      Siguiente Carta
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "GameCard",
  data() {
    return {
      cards: [
        {
          text: "Si tuvieras que apostar con tus amigos quién sería el más probable en tener una aventura con un profesor universitario, ¿a quién señalarías?",
        },
        {
          text: "¿Quién de tus amigos es más probable que tenga un fetiche extraño y nunca lo haya revelado?",
        },
        {
          text: "Si hubiera una película sobre la vida íntima de tus amigos, ¿quién sería el protagonista de las escenas más picantes?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya fingido un orgasmo?",
        },
        {
          text: "¿Quién de tus amigos es más probable que tenga un secreto vergonzoso relacionado con su pasado sexual?",
        },
        {
          text: "Si se hiciera un documental sobre la vida privada de tus amigos, ¿quién sería el centro de las teorías conspirativas?",
        },
        {
          text: "Si tus amigos estuvieran en una película de contenido adulto, ¿quién sería el actor más solicitado?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya tenido una cita a ciegas con alguien que conoció en línea?",
        },
        {
          text: "Si tus amigos fueran personajes de una novela erótica, ¿quién sería el protagonista de las escenas más explícitas?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya tenido un sueño erótico con otro miembro del grupo?",
        },
        {
          text: "Si hubiera una competencia de citas entre tus amigos, ¿quién sería el más probable en ganarla?",
        },
        {
          text: "Si tus amigos fueran personajes de una película para adultos, ¿quién sería el más probable en protagonizar la escena de trío?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya tenido una experiencia embarazosa en una cita?",
        },
        {
          text: "Si tus amigos estuvieran en una película de suspenso erótico, ¿quién sería el que sorprendería a todos con su lado oscuro?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya tenido una aventura de una noche con alguien que conoció en un bar?",
        },
        {
          text: "Si tus amigos fueran personajes de una novela romántica, ¿quién sería el protagonista de las escenas más apasionadas?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya sido descubierto en una situación comprometedora?",
        },
        {
          text: "Si tus amigos estuvieran en una serie de televisión sobre relaciones complicadas, ¿quién sería el protagonista de los triángulos amorosos?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya enviado un mensaje de texto a la persona equivocada con contenido íntimo?",
        },
        {
          text: "Si se hiciera una película sobre los secretos de tus amigos, ¿quién sería el personaje con el pasado más escandaloso?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya tenido una experiencia vergonzosa en un club nocturno?",
        },
        {
          text: "Si tus amigos estuvieran en una serie de televisión sobre infidelidades, ¿quién sería el que llevaría una doble vida?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya tenido un encuentro íntimo en un lugar público?",
        },
        {
          text: "Si se hiciera un reality show sobre la vida amorosa de tus amigos, ¿quién sería el participante más polémico?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya tenido una experiencia inolvidable durante un viaje?",
        },
        {
          text: "Si tus amigos estuvieran en una serie de televisión sobre pasiones prohibidas, ¿quiénes serían los protagonistas de los romances prohibidos?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya tenido una aventura con alguien comprometido?",
        },
        {
          text: "Si se hiciera una película sobre los secretos sexuales de tus amigos, ¿quién sería el que sorprendería a todos con sus confesiones?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya tenido una noche salvaje de la que no recuerda nada al día siguiente?",
        },
        {
          text: "Si tus amigos estuvieran en una serie de televisión sobre relaciones abiertas, ¿quiénes serían los que explorarían nuevos límites?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya tenido una experiencia vergonzosa en un lugar de trabajo?",
        },
        {
          text: "Si se hiciera un documental sobre los encuentros íntimos de tus amigos, ¿quién sería el más entrevistado?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya tenido un romance con un compañero de trabajo?",
        },
        {
          text: "Si tus amigos estuvieran en una serie de televisión sobre secretos familiares, ¿quién sería el protagonista de las revelaciones más impactantes?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya tenido una experiencia picante en un lugar inusual?",
        },
        {
          text: "Si se hiciera una película sobre las fantasías eróticas de tus amigos, ¿quién sería el que admitiría tener las más atrevidas?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya tenido un encuentro íntimo con un desconocido?",
        },
        {
          text: "Si tus amigos estuvieran en una serie de televisión sobre relaciones prohibidas, ¿quiénes serían los que lucharían por su amor a pesar de todos los obstáculos?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya tenido una experiencia embarazosa en una cita a ciegas?",
        },
        {
          text: "Si se hiciera un reality show sobre las aventuras amorosas de tus amigos, ¿quién sería el más probable en convertirse en el protagonista involuntario?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya tenido una experiencia vergonzosa en una fiesta?",
        },
        {
          text: "Si tus amigos estuvieran en una serie de televisión sobre deseos secretos, ¿quién sería el que finalmente se atrevería a confesarlos?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya tenido un encuentro íntimo con un vecino?",
        },
        {
          text: "¿Cuál de tus amigos es más probable que haya enviado un mensaje a su ex cuando estaba borracho y arrepentido?",
        },
        {
          text: "Si tus amigos tuvieran un concurso de peores citas, ¿quién sería el ganador?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya llorado después de una noche de sexo?",
        },
        {
          text: "Si tuvieras que apostar con tus amigos quién es el más probable en haber fingido un orgasmo, ¿a quién señalarías?",
        },
        {
          text: "¿Cuál de tus amigos es más probable que haya sido rechazado en público al intentar ligar?",
        },
        {
          text: "Si hubiera una película sobre los fracasos amorosos de tus amigos, ¿quién sería el protagonista?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya sido pillado viendo contenido para adultos en el trabajo?",
        },
        {
          text: "Si tus amigos fueran personajes de una telenovela, ¿quién sería el que siempre está envuelto en dramas amorosos?",
        },
        {
          text: "¿Cuál de tus amigos es más probable que haya confundido una cita romántica con una de negocios?",
        },
        {
          text: "Si hubiera una competición de ligues fallidos entre tus amigos, ¿quién sería el campeón?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya sido bloqueado en todas las redes sociales por un ex?",
        },
        {
          text: "Si tus amigos fueran personajes de una serie de comedia romántica, ¿quién sería el que siempre termina en situaciones vergonzosas?",
        },
        {
          text: "¿Cuál de tus amigos es más probable que haya sido sorprendido viendo contenido para adultos por su pareja?",
        },
        {
          text: "Si tuvieras que apostar con tus amigos quién es el más probable en haber sido plantado en una cita, ¿a quién señalarías?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya enviado un mensaje amoroso a la persona equivocada?",
        },
        {
          text: "Si se hiciera una película sobre las decepciones amorosas de tus amigos, ¿quién sería el protagonista trágico?",
        },
        {
          text: "¿Cuál de tus amigos es más probable que haya recibido un bofetón en una cita?",
        },
        {
          text: "Si se hiciera una encuesta sobre las peores parejas de tus amigos, ¿quiénes serían los más votados?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya sido descubierto espiando el móvil de su pareja?",
        },
        {
          text: "Si tus amigos fueran personajes de una serie de televisión sobre relaciones complicadas, ¿quiénes serían los protagonistas del episodio más dramático?",
        },
        {
          text: "¿Cuál de tus amigos es más probable que haya sido humillado públicamente por un ex en redes sociales?",
        },
        {
          text: "Si se hiciera un documental sobre los fracasos amorosos de tus amigos, ¿quién sería el más entrevistado?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya terminado llorando después de una pelea con su pareja?",
        },
        {
          text: "Si tus amigos fueran personajes de una telenovela, ¿quién sería el que siempre termina en triángulos amorosos complicados?",
        },
        {
          text: "¿Cuál de tus amigos es más probable que haya sido rechazado después de una declaración de amor pública?",
        },
        {
          text: "Si se hiciera una película sobre las obsesiones amorosas de tus amigos, ¿quién sería el protagonista acosador?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya tenido una discusión pública con su pareja?",
        },
        {
          text: "Si tus amigos fueran personajes de una serie de televisión sobre relaciones prohibidas, ¿quiénes serían los que se atreverían a desafiar las reglas?",
        },
        {
          text: "¿Cuál de tus amigos es más probable que haya roto a llorar después de una ruptura?",
        },
        {
          text: "Si se hiciera una encuesta sobre las rupturas más humillantes de tus amigos, ¿quién estaría en el primer lugar?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya terminado una relación después de una discusión en público?",
        },
        {
          text: "Si tus amigos fueran personajes de una serie de televisión sobre desamores, ¿quiénes serían los que siempre terminan con el corazón roto?",
        },
        {
          text: "¿Cuál de tus amigos es más probable que haya sido visto llorando en el baño de un bar después de una pelea con su pareja?",
        },
        {
          text: "Si se hiciera un documental sobre los desastres amorosos de tus amigos, ¿quién sería el más vergonzoso de todos?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya sido pillado engañando a su pareja?",
        },
        {
          text: "Si tus amigos fueran personajes de una serie de televisión sobre secretos oscuros, ¿quiénes serían los que guardan los peores secretos sentimentales?",
        },
        {
          text: "¿Cuál de tus amigos es más probable que haya sido dejado en un restaurante después de una discusión?",
        },
        {
          text: "Si se hiciera una encuesta sobre las infidelidades de tus amigos, ¿quiénes serían los más votados?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya terminado en el hospital después de una discusión con su pareja?",
        },
        {
          text: "Si tus amigos fueran personajes de una serie de televisión sobre venganzas amorosas, ¿quiénes serían los más vengativos?",
        },
        {
          text: "¿Cuál de tus amigos es más probable que haya hecho un escándalo en un bar después de una ruptura?",
        },
        {
          text: "Si se hiciera un reality show sobre los dramas amorosos de tus amigos, ¿quiénes serían los protagonistas de las peleas más épicas?",
        },
        {
          text: "¿Quién de tus amigos es más probable que haya publicado un video vergonzoso llorando por su ex?",
        },
        {
          text: "Si tus amigos fueran personajes de una telenovela, ¿quiénes serían los que siempre se enamoran de la persona equivocada?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en aprovecharse de alguien después de emborracharlo?",
        },
        {
          text: "Si tus amigos pudieran tener sexo con la pareja de otro sin ser descubiertos, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en robar dinero de la cartera de otro amigo cuando no está mirando?",
        },
        {
          text: "Si tus amigos tuvieran la oportunidad de engañar a su pareja sin ser descubiertos, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en utilizar a alguien para obtener beneficios personales y luego desecharlo?",
        },
        {
          text: "Si tus amigos pudieran obtener ventaja en una situación manipulando emocionalmente a otro, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en difundir un rumor falso y perjudicial sobre alguien más por venganza?",
        },
        {
          text: "Si tus amigos tuvieran la oportunidad de aprovecharse de una persona mayor para obtener una herencia, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en traicionar a un amigo cercano revelando sus secretos más oscuros?",
        },
        {
          text: "Si tus amigos pudieran obtener una ventaja en el trabajo saboteando el éxito de otro colega, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en aprovecharse de la vulnerabilidad emocional de otra persona para obtener sexo?",
        },
        {
          text: "Si tus amigos tuvieran la oportunidad de chantajear a alguien para obtener lo que quieren, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en aprovecharse de la generosidad de un familiar para obtener dinero?",
        },
        {
          text: "Si tus amigos pudieran obtener una promoción en el trabajo denunciando falsamente a un colega, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en manipular a alguien para que se sienta mal consigo mismo y así obtener lo que quiere?",
        },
        {
          text: "Si tus amigos tuvieran la oportunidad de obtener una ganancia financiera aprovechándose de la desgracia de otro, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en mentir sobre su pasado para impresionar a alguien y obtener sexo?",
        },
        {
          text: "Si tus amigos pudieran obtener una ventaja en un juego manipulando las reglas, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en seducir a la pareja de su amigo solo por diversión?",
        },
        {
          text: "Si tus amigos tuvieran la oportunidad de obtener un ascenso en el trabajo saboteando el trabajo de otro, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en engañar a su pareja con un familiar cercano?",
        },
        {
          text: "Si tus amigos pudieran tener sexo con la pareja de su mejor amigo/a sin que nadie lo supiera, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en robar el dinero de un amigo enfermo?",
        },
        {
          text: "Si tus amigos pudieran obtener una ventaja en el trabajo sobornando a su jefe, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en manipular a una persona vulnerable para su beneficio personal?",
        },
        {
          text: "Si tus amigos tuvieran la oportunidad de drogar a alguien para tener relaciones sexuales con ellos sin su consentimiento, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en chantajear a su pareja con información comprometedora para obtener lo que quiere?",
        },
        {
          text: "Si tus amigos pudieran obtener una gran suma de dinero fingiendo la muerte de un familiar, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en utilizar la enfermedad de un ser querido para obtener simpatía y beneficios?",
        },
        {
          text: "Si tus amigos tuvieran la oportunidad de arruinar la vida de alguien más para obtener lo que quieren, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en difundir fotos íntimas de un/a ex en venganza?",
        },
        {
          text: "Si tus amigos pudieran obtener una herencia más grande mintiendo sobre la relación con un familiar fallecido, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en explotar la debilidad emocional de una persona para obtener sexo?",
        },
        {
          text: "Si tus amigos tuvieran la oportunidad de manipular a alguien para que cometa un crimen en su nombre, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en sobornar a un/a profesor/a para obtener buenas calificaciones?",
        },
        {
          text: "Si tus amigos pudieran obtener una ganancia financiera explotando a personas necesitadas, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en mentir sobre una enfermedad grave para obtener simpatía y beneficios?",
        },
        {
          text: "Si tus amigos tuvieran la oportunidad de utilizar a un/a amigo/a como chivo expiatorio para evitar problemas, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en utilizar a sus hijos como herramienta para manipular a su pareja?",
        },
        {
          text: "Si tus amigos pudieran obtener una ventaja en una competición haciéndose pasar por discapacitados, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en fingir un secuestro para obtener un rescate?",
        },
        {
          text: "Si tus amigos pudieran obtener un descuento fingiendo una discapacidad, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en envenenar a un/a rival para eliminarlo del camino?",
        },
        {
          text: "Si tus amigos tuvieran la oportunidad de robar el premio de un concurso haciéndose pasar por víctimas, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en falsificar la firma de alguien para obtener beneficios personales?",
        },
        {
          text: "Si tus amigos pudieran obtener una herencia más grande fingiendo ser el/la hijo/a perdido/a de un multimillonario, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en fingir una enfermedad terminal para obtener donaciones?",
        },
        {
          text: "Si tus amigos tuvieran la oportunidad de obtener una beca universitaria mintiendo sobre su situación financiera, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en chantajear a alguien con información comprometedora para obtener favores?",
        },
        {
          text: "Si tus amigos pudieran obtener una ventaja en una negociación fingiendo una discapacidad, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en fingir ser víctima de violencia doméstica para obtener simpatía y beneficios?",
        },
        {
          text: "Si tus amigos tuvieran la oportunidad de obtener un descuento en una tienda fingiendo una discapacidad, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en fingir su propia muerte para obtener un seguro de vida?",
        },
        {
          text: "Si tus amigos pudieran obtener una herencia más grande fingiendo ser el/la único/a heredero/a de un millonario, ¿quién sería el primero en hacerlo?",
        },
        {
          text: "¿Quién de tus amigos sería más probable en fingir un secuestro para obtener un rescate?",
        },
      ],
      cardIndex: -1,
      card: { text: "", color: "" },
    };
  },
  methods: {
    getNextCard() {
      this.cardIndex = Math.floor(Math.random() * this.cards.length);
      this.card = this.cards[this.cardIndex];
    },
  },
};
</script>

<style scoped>
.game-card {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.card-text {
  font-size: 18px;
  color: white;
}

.next-card-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #41ead4;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
}

.next-card-button:hover {
  background-color: darken(#41ead4, 10%);
}
</style>
