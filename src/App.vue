<template>
  <WelcomePage :title="title" />
</template>

<script>
import WelcomePage from "./components/welcome-page";

export default {
  name: "App",
  components: {
    WelcomePage,
  },
  data() {
    return {
      title: "Welcome to Descarados!",
    };
  },
};
</script>
