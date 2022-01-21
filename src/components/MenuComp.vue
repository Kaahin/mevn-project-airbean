<template>
  <div class="menu">
    <img src="@/assets/header_top.svg" alt="decoration top" />
    <div class="cart" @click="toogleOrder">
      <img src="@/assets/cart.svg" alt="cart for items" />
    </div>

    <div class="order"  :style="[toogle ? { height: '0px' } : { height: '658.96px' }]">
      <h1 class="header" id="order-top">Din beställning</h1>
      <div class="list">
        <ul class="items" id="order-ul">
          <li class="item" id="order-li">
            <div class="item-text" id="order-text">
              <h2 class="item-header" id="order-header">Bryggkaffe</h2>
              <p class="item-subheader">49 kr</p>
            </div>
            <hr class="dot-line" />
            <div class="item-amount">
              <h3 class="item-header" id="order-amount">{{ amount.amount }}</h3>
            </div>
          </li>
        </ul>
        <div class="item" id="cost">
          <div class="item-text" id="order-text">
            <h2 class="item-header" id="order-header">Total</h2>
            <p class="item-subheader">inkl moms + drönarleverans</p>
          </div>

          <div class="item-amount">
            <h3 class="item-header" id="order-amount">
              {{ amountItems * price[1] }} kr
            </h3>
          </div>
        </div>
      </div>
    </div>
    <h1 class="header menu">Meny</h1>
    <ul class="items">
      <li class="item" v-for="(item, index) in items" :key="index">
        <img
          class="add"
          src="@/assets/add.svg"
          alt="add btn"
          @click="actionInc"
        />
        <div class="item-text">
          <h2 class="item-header">{{ item }}</h2>
          <p class="item-subheader">{{ itemDescr[index] }}</p>
        </div>
        <div class="item-price">
          <h2 class="item-header">{{ price[index] }} kr</h2>
        </div>
      </li>
    </ul>
    <img src="@/assets/header_bottom.svg" alt="decoration bottom" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { ActionTypes, MutationTypes, useStore } from "../store";

const store = useStore();
const amount = ref(store.state);
const inc = () => {
  store.commit(MutationTypes.INC_AMOUNT, 1);
};
const amountItems = computed(() => store.getters.addAmount);

const actionDecr = () => {
  store.dispatch(ActionTypes.INC_AMOUNT, -1);
};
const actionInc = () => {
  store.dispatch(ActionTypes.INC_AMOUNT, 1);
};

let toogle = ref(false);
const toogleOrder = () => {
  toogle.value = !toogle.value;
};
onMounted(() => {
  toogleOrder();
});

const items: string[] = [
  "Bryggkaffe",
  "Caffé Doppio",
  "Cappuccino",
  "Latte Macchiato",
  "Kaffe Latte",
  "Cortado",
];
const itemDescr: string[] = [
  "Bryggd på månadens böner",
  "Bryggd på månadens böner",
  "Bryggd på månadens böner",
  "Bryggd på månadens böner",
  "Bryggd på månadens böner",
  "Bryggd på månadens böner",
];
const price: number[] = [49, 49, 49, 49, 49, 39];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&family=Work+Sans&display=swap");
.add:active {
  width: 110%;
  height: 110%;
}
.menu {
  position: relative;
  width: 375px;
  height: 812px;

  background: #f3e4e1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.cart {
  position: absolute;
  margin: 0px 0px 37px 283px;
}
.order {
  position: absolute;
  width: 341px;
  height: 658.96px;
  margin-top: 92px;
  z-index: 5;
  background: #ffffff;
  transition: 0.5s;
  animation: backwards;
  overflow: hidden;
}
.list {
  width: 311px;
  height: 319px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 13px;
  margin-right: 17px;
}
.dot-line {
  border-top: 1px dotted #2f2926;
  width: 70%;
}

.header {
  width: 311px;
  height: 60px;
  margin: 0px 0px 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  

  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 50.4px;
  color: #2f2926;
}

#order-top {
  height: 34px;
  font-size: 32px;
  line-height: 38.4px;
  margin: 69.96px 15px 42px 15px;
}
#order-ul {
  margin-bottom: 87px;
  overflow-y: scroll;
}
#order-li {
  width: 296px;
  height: 40px;
}
#cost {
  height: 64px;
}
.item-amount {
  text-align: right;
}
.items {
  width: 311px;
  height: 474px;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 66px;
}
.item {
  width: 311px;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.item-header,
.item-price {
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  line-height: 27.6px;
}
.item-header,
.item-subheader {
  color: #2f2926;
}
.item-subheader {
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15.6px;
}
.item-text {
  width: 194.44px;
  height: 46px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.item-price {
  width: 76.75px;
  height: 46px;
  text-align: right;
}

.item-header,
.item-subheader {
  margin: 0px;
}

.item-header {
}
</style>