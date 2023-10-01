<template>
    <main class="content">
    <form action="#" method="post">

      <div class="content__wrapper">
        <Title size="big">Конструктор пиццы</Title>

        <div class="content__dough">

          <Sheet class="dough">
            <template #title>Выберите тесто</template>
              <label v-for="dough in normalizedDoughs" :key="dough.id" class="dough__input" :class="`dough__input--${dough.doughSize}`">
                <input type="radio" name="dought" :value="dough.doughSize" class="visually-hidden" checked>
                <b>{{dough.name}}</b>
                <span>{{dough.description}}</span>
              </label>

          </Sheet>

        </div>

        <div class="content__diameter">
          <Sheet class="diameter">
            <template #title>Выберите размер</template>
              <label v-for="size in normalizedSizes" :key="size.id" class="diameter__input" :class="`diameter__input--${size.size}`">
                <input type="radio" name="diameter" :value="size.size" class="visually-hidden">
                <span>{{size.name}}</span>
              </label>
          </Sheet>
        </div>

        <div class="content__ingredients">
          <Sheet class="ingredients">
            <template #title>Выберите ингредиенты</template>

              <div class="ingredients__sauce">
                <p>Основной соус:</p>

                <label v-for="sauce in normalizedSauces" :key="sauce.id" class="radio ingredients__input">
                  <input type="radio" name="sauce" :value="sauce.sauce" checked>
                  <span>{{sauce.name}}</span>
                </label>
              </div>

              <div class="ingredients__filling">
                <p>Начинка:</p>

                <ul class="ingredients__list">
                  <li v-for="ingredient in normalizedIngredients" :key="ingredient.id" class="ingredients__item">
                    <span class="filling" :class="`filling--${ingredient.ingredient}`">{{ingredient.name}}</span>

                    <CounterInput class="ingredients__counter"/>
                  </li>
                  
                </ul>

              </div>

          </Sheet>
        </div>

        <div class="content__pizza">
          <TextInput name="pizza_name" label="Название пиццы" placeholder="Введите название пиццы"/>

          <div class="content__constructor">
            <div class="pizza pizza--foundation--big-tomato">
              <div class="pizza__wrapper">
                <div class="pizza__filling pizza__filling--ananas"></div>
                <div class="pizza__filling pizza__filling--bacon"></div>
                <div class="pizza__filling pizza__filling--cheddar"></div>
              </div>
            </div>
          </div>

          <div class="content__result">
            <p>Итого: 0 ₽</p>
            <NormalButton label="Готовьте!"/>
          </div>
        </div>

      </div>

    </form>
  </main>
</template>

<script setup>
    import doughs from '../mocks/dough.json';
    import ingredients from '../mocks/ingredients.json';
    import misc from '../mocks/misc.json';
    import sauces from '../mocks/sauces.json';
    import sizes from '../mocks/sizes.json';

    import {normalizeDough, normalizeSizes, normalizeIngredients, normalizeSauces} from '../common/helpers';
    import {Sheet, Title, NormalButton, CounterInput, TextInput} from '../common/components';

    const normalizedDoughs = doughs.map(dough => normalizeDough(dough))
    const normalizedSizes = sizes.map(size => normalizeSizes(size))
    const normalizedSauces = sauces.map(sauce => normalizeSauces(sauce))
    const normalizedIngredients = ingredients.map(ingredient => normalizeIngredients(ingredient))
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

.content__dough {
  width: 527px;
  margin-top: 15px;
  margin-right: auto;
  margin-bottom: 15px;
}

.content__diameter {
  width: 373px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.content__ingredients {
  width: 527px;
  margin-top: 15px;
  margin-right: auto;
  margin-bottom: 15px;
}

.content__pizza {
  width: 373px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.content__constructor {
  width: 315px;
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;
}

.content__result {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 25px;

  p {
    @include b-s24-h28;

    margin: 0;
  }

  button {
    margin-left: 12px;
    padding: 16px 45px;
  }
}

.diameter__input {
  margin-right: 8.7%;
  margin-bottom: 20px;
  padding-top: 7px;
  padding-bottom: 6px;

  cursor: pointer;

  span {
    @include r-s16-h19;

    position: relative;

    padding-left: 46px;

    &::before {
      @include p_center_v;

      width: 36px;
      height: 36px;

      content: "";
      transition: 0.3s;

      border-radius: 50%;
      background-color: $green-100;
      background-image: url("../assets/img/diameter.svg");
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  &:nth-child(3n) {
    margin-right: 0;
  }

  &--small {
    span::before {
      background-size: 18px;
    }
  }

  &--normal {
    span::before {
      background-size: 29px;
    }
  }

  &--big {
    span::before {
      background-size: 100%;
    }
  }

  &:hover {
    span::before {
      box-shadow: $shadow-regular;
    }
  }

  input {
    &:checked + span::before {
      box-shadow: $shadow-large;
    }
  }
}


.dough__input {
  position: relative;

  margin-right: 8%;
  margin-bottom: 20px;
  padding-left: 50px;

  cursor: pointer;

  b {
    @include r-s16-h19;

    &::before {
      @include p_center-v;

      width: 36px;
      height: 36px;

      content: "";
      transition: 0.3s;

      border-radius: 50%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }

  span {
    @include l-s11-h13;

    display: block;
  }

  &--light {
    b {
      &::before {
        background-image: url("../assets/img/dough-light.svg");
      }
    }
  }

  &--large {
    b {
      &::before {
        background-image: url("../assets/img/dough-large.svg");
      }
    }
  }

  &:hover {
    b::before {
      box-shadow: $shadow-regular;
    }
  }

  input {
    &:checked + b::before {
      box-shadow: $shadow-large;
    }
  }
}


.ingredients__sauce {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  margin-bottom: 14px;

  p {
    @include r-s16-h19;

    margin-top: 0;
    margin-right: 16px;
    margin-bottom: 10px;
  }
}

.ingredients__input {
  margin-right: 24px;
  margin-bottom: 10px;
}

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

.radio {
  cursor: pointer;

  span {
    @include r-s16-h19;

    position: relative;

    padding-left: 28px;

    &:before {
      @include p_center-v;

      display: block;

      box-sizing: border-box;
      width: 20px;
      height: 20px;

      content: "";
      transition: 0.3s;

      border: 1px solid $purple-400;
      border-radius: 50%;
      background-color: $white;
    }
  }

  &:hover {
    input:not(:checked):not(:disabled) + span {
      &:before {
        border-color: $purple-800;
      }
    }
  }

  input {
    display: none;

    &:checked + span {
      &:before {
        border: 6px solid $green-500;
      }
    }

    &:disabled {
      & + span {
        &:before {
          border-color: $purple-400;
          background-color: $silver-200;
        }
      }

      &:checked + span {
        &:before {
          border: 6px solid $purple-400;
        }
      }
    }
  }
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
    background-image: url("../assets/img/filling/tomatoes.svg");
  }

  &--ananas::before {
    background-image: url("../assets/img/filling/ananas.svg");
  }

  &--bacon::before {
    background-image: url("../assets/img/filling/bacon.svg");
  }

  &--blue_cheese::before {
    background-image: url("../assets/img/filling/blue_cheese.svg");
  }

  &--cheddar::before {
    background-image: url("../assets/img/filling/cheddar.svg");
  }

  &--chile::before {
    background-image: url("../assets/img/filling/chile.svg");
  }

  &--ham::before {
    background-image: url("../assets/img/filling/ham.svg");
  }

  &--jalapeno::before {
    background-image: url("../assets/img/filling/jalapeno.svg");
  }

  &--mozzarella::before {
    background-image: url("../assets/img/filling/mozzarella.svg");
  }

  &--mushrooms::before {
    background-image: url("../assets/img/filling/mushrooms.svg");
  }

  &--olives::before {
    background-image: url("../assets/img/filling/olives.svg");
  }

  &--onion::before {
    background-image: url("../assets/img/filling/onion.svg");
  }

  &--parmesan::before {
    background-image: url("../assets/img/filling/parmesan.svg");
  }

  &--salami::before {
    background-image: url("../assets/img/filling/salami.svg");
  }

  &--salmon::before {
    background-image: url("../assets/img/filling/salmon.svg");
  }
}

.pizza {
  position: relative;

  display: block;

  box-sizing: border-box;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &--foundation--big-creamy {
    background-image: url("../assets/img/foundation/big-creamy.svg");
  }

  &--foundation--big-tomato {
    background-image: url("../assets/img/foundation/big-tomato.svg");
  }

  &--foundation--small-creamy {
    background-image: url("../assets/img/foundation/small-creamy.svg");
  }

  &--foundation--small-tomato {
    background-image: url("../assets/img/foundation/small-tomato.svg");
  }
}

.pizza__wrapper {
  width: 100%;
  padding-bottom: 100%;
}

.pizza__filling {
  $bl: &;
  position: absolute;
  top: 0;
  left: 0;

  display: block;

  width: 100%;
  height: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &::before,
  &::after {
    display: none;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    content: '';

    background-image: inherit;
  }

  &--second {
    &::before {
      display: block;

      transform: rotate(45deg);
    }
  }

  &--third {
    &::before {
      display: block;

      transform: rotate(45deg);
    }

    &::after {
      display: block;

      transform: rotate(-45deg);
    }
  }

  &--ananas,
  &--ananas.pizza__filling--second::before,
  &--ananas.pizza__filling--third::after {
    background-image: url("../assets/img/filling-big/ananas.svg");
  }

  &--bacon,
  &--bacon.pizza__filling--second::before,
  &--bacon.pizza__filling--third::after {
    background-image: url("../assets/img/filling-big/bacon.svg");
  }

  &--blue_cheese,
  &--blue.pizza__filling--second::before,
  &--blue.pizza__filling--third::after {
    background-image: url("../assets/img/filling-big/blue_cheese.svg");
  }

  &--cheddar,
  &--cheddar.pizza__filling--second::before,
  &--cheddar.pizza__filling--third::after {
    background-image: url("../assets/img/filling-big/cheddar.svg");
  }

  &--chile,
  &--chile.pizza__filling--second::before,
  &--chile.pizza__filling--third::after {
    background-image: url("../assets/img/filling-big/chile.svg");
  }

  &--ham,
  &--ham.pizza__filling--second::before,
  &--ham.pizza__filling--third::after {
    background-image: url("../assets/img/filling-big/ham.svg");
  }

  &--jalapeno,
  &--jalapeno.pizza__filling--second::before,
  &--jalapeno.pizza__filling--third::after {
    background-image: url("../assets/img/filling-big/jalapeno.svg");
  }

  &--mozzarella,
  &--mozzarella.pizza__filling--second::before,
  &--mozzarella.pizza__filling--third::after {
    background-image: url("../assets/img/filling-big/mozzarella.svg");
  }

  &--mushrooms,
  &--mushrooms.pizza__filling--second::before,
  &--mushrooms.pizza__filling--third::after {
    background-image: url("../assets/img/filling-big/mushrooms.svg");
  }

  &--olives,
  &--olives.pizza__filling--second::before,
  &--olives.pizza__filling--third::after {
    background-image: url("../assets/img/filling-big/olives.svg");
  }

  &--onion,
  &--onion.pizza__filling--second::before,
  &--onion.pizza__filling--third::after {
    background-image: url("../assets/img/filling-big/onion.svg");
  }

  &--parmesan,
  &--parmesan.pizza__filling--second::before,
  &--parmesan.pizza__filling--third::after {
    background-image: url("../assets/img/filling-big/parmesan.svg");
  }

  &--salami,
  &---salami.pizza__filling--second::before,
  &---salami.pizza__filling--third::after {
    background-image: url("../assets/img/filling-big/salami.svg");
  }

  &--salmon,
  &--salmon.pizza__filling--second::before,
  &--salmon.pizza__filling--third::after {
    background-image: url("../assets/img/filling-big/salmon.svg");
  }

  &--tomatoes,
  &--tomatoes.pizza__filling--second::before,
  &--tomatoes.pizza__filling--third::after {
    background-image: url("../assets/img/filling-big/tomatoes.svg");
  }
}

</style>