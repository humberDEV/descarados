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
        { text: "¡Felicidades! Eres el más descarado.", color: "#ffcc00" },
        {
          text: "¡Ups! Parece que necesitas ser un poco más descarado.",
          color: "#ff6666",
        },
        { text: "¡Eres el rey de la descaradez!", color: "#66ff99" },
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
