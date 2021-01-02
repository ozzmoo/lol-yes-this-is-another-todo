<template>
  <div class="home">
    <h1 class="home__logo">Todo</h1>
    <p class="home__dscr">
      Я сделал это. Оно живое, но бесполезное. Половина вообще не работает. Но
      можно посмотреть шо да как с:
    </p>
    <router-link to="/todo"
      ><v-btn class="home__link" dark color="#69665C"
        >Get started</v-btn
      ></router-link
    >
    <img src="../assets/Girl.svg" alt="Girl" class="home__img" />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  &__logo {
    font-size: 3rem;
  }
  &__dscr {
    font-size: 1rem;
    text-align: center;
  }
}

a {
  text-decoration: none;
  color: white;
}
</style>