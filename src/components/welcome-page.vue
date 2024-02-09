<template>
  <div class="welcome-page">
    <div class="content" v-if="!showGame">
      <h1
        class="title"
        :style="{
          color: $CONSTANTS.ACCENT,
        }"
      >
        Descarados!
      </h1>
      <p class="subtitle">¿Quién es el más descarado?</p>
      <div class="buttons">
        <v-btn
          class="start-button"
          :style="{
            backgroundColor: $CONSTANTS.SECONDARY,
            color: $CONSTANTS.WHITE,
          }"
          @click="startGame()"
        >
          Empezar a Jugar
        </v-btn>
        <v-btn
          class="receive-button"
          :style="{
            backgroundColor: $CONSTANTS.PRIMARY,
            color: $CONSTANTS.WHITE,
          }"
        >
          Reglas
        </v-btn>
      </div>
    </div>
    <GameCard v-else />
  </div>
</template>

<script>
import GameCard from "./game-card";
export default {
  name: "WelcomePage",
  components: {
    GameCard,
  },
  data() {
    return {
      showGame: false,
    };
  },
  methods: {
    startGame() {
      this.showGame = true;
    },
  },
};
</script>

<style scoped>
.welcome-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  text-align: center;
  animation: fadeIn 1s ease-out;
}

.logo {
  max-width: 200px;
}

.title {
  font-size: 36px;
  margin-top: 20px;
}

.subtitle {
  font-size: 24px;
  margin-top: 10px;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 5em;
}

.receive-button,
.start-button {
  padding: 0.5em 1em;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.receive-button:hover,
.start-button:hover {
  background-color: darken(#41ead4, 10%);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
