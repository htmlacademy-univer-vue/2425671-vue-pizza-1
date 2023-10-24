<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <SectionTitle size="big">Конструктор пиццы</SectionTitle>
        <DoughComp :normalized-doughs="normalizedDoughs" />

        <SizeComp :normalized-sizes="normalizedSizes" />

        <div class="content__ingredients">
          <SheetCard class="ingredients">
            <template #title>Выберите ингредиенты</template>
            <SauceComp :normalized-sauces="normalizedSauces" />
            <IngredientsComp :normalized-ingredients="normalizedIngredients" />
          </SheetCard>
        </div>

        <PizzaComp />
      </div>
    </form>
  </main>
</template>

<script setup>
import doughs from "../mocks/dough.json"; // мок данные
import ingredients from "../mocks/ingredients.json";
import sauces from "../mocks/sauces.json";
import sizes from "../mocks/sizes.json";

import {
  // функции нормализацииb
  normalizeDough,
  normalizeSizes,
  normalizeIngredients,
  normalizeSauces,
} from "../common/helpers";

import {
  // общие компоненты
  SheetCard,
  SectionTitle,
  // NormalButton,
  // CounterInput,
  // TextInput,
} from "../common/components";

import {
  DoughComp,
  SizeComp,
  SauceComp,
  IngredientsComp,
  PizzaComp,
} from "../modules/constructor"; // компоненты конструктора пиццы

const normalizedDoughs = doughs.map((dough) => normalizeDough(dough));
const normalizedSizes = sizes.map((size) => normalizeSizes(size));
const normalizedSauces = sauces.map((sauce) => normalizeSauces(sauce));
const normalizedIngredients = ingredients.map((ingredient) =>
  normalizeIngredients(ingredient)
);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";
.content {
  padding-top: 20px;
}

.content__wrapper {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  width: 920px;
  margin: 0 auto;
  padding-right: 2.12%;
  padding-bottom: 30px;
  padding-left: 2.12%;
}

.content__ingredients {
  width: 527px;
  margin-top: 15px;
  margin-right: auto;
  margin-bottom: 15px;
}
</style>
