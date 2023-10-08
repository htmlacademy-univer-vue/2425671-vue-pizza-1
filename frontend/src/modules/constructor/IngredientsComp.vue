<template>
  <div class="ingredients__filling">
    <p>Начинка:</p>

    <ul class="ingredients__list">
      <li
        v-for="ingredient in normalizedIngredients"
        :key="ingredient.id"
        class="ingredients__item"
      >
        <AppDrag :transfer-data="ingredient"
        :draggable="getValue(ingredient.ingredient) < 3"
        >
          <span class="filling" :class="`filling--${ingredient.ingredient}`">{{
            ingredient.name
          }}</span></AppDrag
        >

        <CounterInput class="ingredients__counter" :ingredient="ingredient.ingredient" :count="getValue(ingredient.ingredient)" 
        @decrement="decrement(ingredient.ingredient, (getValue(ingredient.ingredient)-1))"
        @increment="increment(ingredient.ingredient, (getValue(ingredient.ingredient)+1))"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
  import { CounterInput, AppDrag } from "../../common/components";
  const props = defineProps({
    normalizedIngredients: {
      type: Object,
      required: true,
    },
    selectedIngredients: {
      type: Object,
      required: true,
    },
  });
  // @upgradeIngredientAmount="emits('upgradeIngredientAmount', upgradeIngredientAmount)"
  const emits = defineEmits(['upgradeIngredientAmount'])

  const getValue = (ingredient) => {
    return props.selectedIngredients[ingredient];
  };
  
  const decrement = (ingredient, count) => {
    emits('upgradeIngredientAmount', ingredient, count);
    console.log(ingredient);
    console.log(count);
  };

  const increment = (ingredient, count) => {
    emits('upgradeIngredientAmount', ingredient, count);
    console.log(ingredient);
    console.log(count);
  };
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";
.ingredients__filling {
  width: 100%;

  p {
    @include r-s16-h19;

    margin-top: 0;
    margin-bottom: 16px;
  }
}

.ingredients__list {
  @include clear-list;

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

.ingredients__item {
  width: 100px;
  min-height: 40px;
  margin-right: 17px;
  margin-bottom: 35px;
}

.ingredients__counter {
  width: 54px;
  margin-top: 10px;
  margin-left: 36px;
}

.filling {
  @include r-s14-h16;

  position: relative;

  display: block;

  padding-left: 36px;

  &::before {
    @include p_center-v;

    display: block;

    width: 32px;
    height: 32px;

    content: "";

    border-radius: 50%;
    background-color: $white;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80% 80%;
  }

  &--tomatoes::before {
    background-image: url("../../assets/img/filling/tomatoes.svg");
  }

  &--ananas::before {
    background-image: url("../../assets/img/filling/ananas.svg");
  }

  &--bacon::before {
    background-image: url("../../assets/img/filling/bacon.svg");
  }

  &--blue_cheese::before {
    background-image: url("../../assets/img/filling/blue_cheese.svg");
  }

  &--cheddar::before {
    background-image: url("../../assets/img/filling/cheddar.svg");
  }

  &--chile::before {
    background-image: url("../../assets/img/filling/chile.svg");
  }

  &--ham::before {
    background-image: url("../../assets/img/filling/ham.svg");
  }

  &--jalapeno::before {
    background-image: url("../../assets/img/filling/jalapeno.svg");
  }

  &--mozzarella::before {
    background-image: url("../../assets/img/filling/mozzarella.svg");
  }

  &--mushrooms::before {
    background-image: url("../../assets/img/filling/mushrooms.svg");
  }

  &--olives::before {
    background-image: url("../../assets/img/filling/olives.svg");
  }

  &--onion::before {
    background-image: url("../../assets/img/filling/onion.svg");
  }

  &--parmesan::before {
    background-image: url("../../assets/img/filling/parmesan.svg");
  }

  &--salami::before {
    background-image: url("../../assets/img/filling/salami.svg");
  }

  &--salmon::before {
    background-image: url("../../assets/img/filling/salmon.svg");
  }
}
</style>
