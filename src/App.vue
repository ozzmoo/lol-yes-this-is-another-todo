<template>
  <v-app>
    <v-container>
      <div id="nav"></div>
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    donetasks: false,
  }),
};
</script>

<style lang="scss">
@import "./assets/Fonts/AdobeClean-Light/style.css";
@import "./assets/Fonts/AdobeClean-Bold/style.css";
@import "./assets/Fonts/AdobeClean-Regular/style.css";
* {
  font-family: "Adobe Clean";
  color: #6a675d;
}

body {
  background-color: #fafafa;
}
</style>
