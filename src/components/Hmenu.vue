<template>
  <div class="menu">
    <div class="center">
      <router-link style="text-decoration: none; color: inherit" to="/menu"
        ><p>Meny</p></router-link
      >
      <hr />
      <router-link style="text-decoration: none; color: inherit" to="/about"
        ><p>Vårt Kaffe</p></router-link
      >
      <hr />
      <router-link style="text-decoration: none; color: inherit" to="/profile"
        ><p>Min profil</p></router-link
      >
      <hr />
      <router-link style="text-decoration: none; color: inherit" to="/status"
        ><p id="last">Orderstatus</p></router-link
      >
    </div>
  </div>
</template>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap");
router-link {
  text-decoration: none;
}
.menu {
  position: fixed;
  height: 812px;
  width: 375px;
  background: #2f2926;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  overflow: hidden;
}
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 311px;
  height: 279px;
}

p {
  color: white;
  font-family: PT serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;
  margin-top: 0;
  margin-bottom: 0;
}
#last {
  margin-bottom: 0;
}

hr {
  margin: 0;
  border: 0;
  width: 48px;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
}
</style>
