<template>
  <div class="about">
    <div class="position">
    <div class="text">
      <h1 class="header">Vårt Kaffe</h1>
      <div class="content">
        <div class="upper">
          Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
          grounds dripper, crema, strong whipped, variety extra iced id lungo
          half and half mazagran. Pumpkin spice.
        </div>
        <br />
        <div class="lower">
          Que dark fair trade, spoon decaffeinated, barista wings whipped, as
          rich aftertaste, con panna milk black, arabica white rich beans single
          shot extra affogato. So affogato macchiato sit extraction instant
          grinder seasonal organic, turkish single shot, single origin, and
          robusta strong to go so dripper. Viennese froth, grounds
          caramelization skinny aromatic cup kopi-luwak, fair trade flavour,
          frappuccino medium, café au lait flavour cultivar ut bar instant
          kopi-luwak.
        </div>
        <br />
        <div class="lower">
          Roast id macchiato, single shot siphon mazagran milk fair trade est
          aroma a half and half and, so, galão iced to go, whipped as cream cup
          pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half
          and half at, that, percolator macchiato trifecta and body as arabica
          dripper. In galão black java milk sit trifecta, robusta, acerbic café
          au lait instant shop latte. Seasonal bar shop filter aroma id, crema,
          affogato viennese cultivar aftertaste, seasonal, percolator cream
          black, galão flavour, milk aromatic turkish skinny crema.
        </div>
      </div>
      <div class="owner">
        <img src="@/assets/Owner.svg" alt="description of the owner" />
      </div>
    </div>
    <img src="@/assets/header_bottom.svg" alt="decoration bottom" />
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap");
.about {
  position: relative;
  width: 392px;
  height: 812px;
  overflow-y: scroll;

  background: #f3e4e1;
}
.position {
  display: flex;
  flex-direction: column;
}
.header {
  width: 311px;
  height: 60px;
  text-align: left;
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: #2f2926;
  margin-top: 0px;
  margin-bottom: 17px;
}
.text {
  position: absolute;
  height: 801px;
  width: 311px;
  margin: 140px 32px 47px 32px;
  position: relative;
}
.content {
  width: 311px;
  height: 584px;
  margin-bottom: 14px;
}
.upper {
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22.4px;
}
.lower {
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 19.2px;
}
.owner {
  width: 311px;
  height: 126px;
}
</style>