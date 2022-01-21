<template>
  <div class="landing">
    <div class="center">
      <div class="logo">
        <img src="@/assets/Ellipse.svg" alt="ellipse" class="logo ellipse" />
        <img src="@/assets/Vector.svg" alt="symbol" class="logo vector" />
      </div>
      <div class="text">
        <h1 class="text header">air bean</h1>
        <p class="text subtitle">dronedelivered coffe</p>
      </div>
    </div>
    <div class="decoration">
      <div class="left">
        <img src="@/assets/header_left.svg" alt="decoration left side" />
      </div>
      <div class="right">
        <img src="@/assets/header_right.svg" alt="decoration right side" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rufina:wght@700&family=Work+Sans&display=swap");
.landing {
  width: 375px;
  height: 812px;
  background: #38846d;
  position: relative;
}

.decoration {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.center {
  height: 149px;
  width: 257px;
  position: absolute;
  margin: 320px 60px 343px 58px;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
.ellipse {
  position: absolute;
}
.vector {
  position: relative;
}
.text {
  font-style: normal;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.header {
  font-family: Rufina;
  font-weight: bold;
  font-size: 42px;
  line-height: 52px;
  margin: 0px 0px 3px 0px;
}
.subtitle {
  font-family: Work Sans;
  font-weight: normal;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 0.3em;
  margin: 0px;
}
</style>
