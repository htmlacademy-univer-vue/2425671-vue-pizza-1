<template>
  <main class="layout">
    <div class="layout__sidebar sidebar">
      <a href="index.html" class="logo layout__logo">
        <img
          src="../assets/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </a>

      <!-- <a class="layout__link layout__link--active" href="#">История заказов</a>
      <a class="layout__link" href="#">Мои данные</a> -->

      <router-link class="layout__link layout__link--active" to="/user/orders"
        >История заказов</router-link
      >
      <router-link class="layout__link" to="/user/profile"
        >Мои данные</router-link
      >
    </div>

    <div class="layout__content">
      <div class="layout__title">
        <!-- <h1 class="title title--big">История заказов</h1> -->
        <SectionTitle size="big">История заказов</SectionTitle>
      </div>

      <section class="sheet order">
        <div class="order__wrapper">
          <div class="order__number">
            <b>Заказ #11199929</b>
          </div>

          <div class="order__sum">
            <span>Сумма заказа: 1 564 ₽</span>
          </div>

          <div class="order__button">
            <button type="button" class="button button--border">Удалить</button>
          </div>
          <div class="order__button">
            <button type="button" class="button">Повторить</button>
          </div>
        </div>

        <ul class="order__list">
          <li class="order__item">
            <div class="product">
              <img
                src="../assets/img/product.svg"
                class="product__img"
                width="56"
                height="56"
                alt="Капричоза"
              />
              <div class="product__text">
                <h2>Капричоза</h2>
                <ul>
                  <li>30 см, на тонком тесте</li>
                  <li>Соус: томатный</li>
                  <li>
                    Начинка: грибы, лук, ветчина, пармезан, ананас, бекон, блю
                    чиз
                  </li>
                </ul>
              </div>
            </div>

            <p class="order__price">782 ₽</p>
          </li>
          <li class="order__item">
            <div class="product">
              <img
                src="../assets/img/product.svg"
                class="product__img"
                width="56"
                height="56"
                alt="Капричоза"
              />
              <div class="product__text">
                <h2>Моя любимая</h2>
                <ul>
                  <li>30 см, на тонком тесте</li>
                  <li>Соус: томатный</li>
                  <li>Начинка: грибы, лук, ветчина, пармезан, ананас</li>
                </ul>
              </div>
            </div>

            <p class="order__price">2х782 ₽</p>
          </li>
        </ul>

        <ul class="order__additional">
          <li>
            <img
              src="../assets/img/cola.svg"
              width="20"
              height="30"
              alt="Coca-Cola 0,5 литра"
            />
            <p>
              <span>Coca-Cola 0,5 литра</span>
              <b>56 ₽</b>
            </p>
          </li>
          <li>
            <img
              src="../assets/img/sauce.svg"
              width="20"
              height="30"
              alt="Острый соус"
            />
            <span>Острый соус <br />30 ₽</span>
          </li>
          <li>
            <img
              src="../assets/img/potato.svg"
              width="20"
              height="30"
              alt="Картошка из печи"
            />
            <p>
              <span>Картошка из печи</span>
              <b>170 ₽</b>
            </p>
          </li>
        </ul>

        <p class="order__address">
          Адрес доставки: Тест (или если адрес новый - писать целиком)
        </p>
      </section>

      <section class="sheet order">
        <div class="order__wrapper">
          <div class="order__number">
            <b>Заказ #11199929</b>
          </div>

          <div class="order__sum">
            <span>Сумма заказа: 1 564 ₽</span>
          </div>

          <div class="order__button">
            <button type="button" class="button button--border">Удалить</button>
          </div>
          <div class="order__button">
            <button type="button" class="button">Повторить</button>
          </div>
        </div>

        <ul class="order__list">
          <li class="order__item">
            <div class="product">
              <img
                src="../assets/img/product.svg"
                class="product__img"
                width="56"
                height="56"
                alt="Капричоза"
              />
              <div class="product__text">
                <h2>Капричоза</h2>
                <p>
                  30 см, на тонком тесте<br />
                  Соус: томатный<br />
                  Начинка: грибы, лук, ветчина, пармезан, ананас
                </p>
              </div>
            </div>

            <p class="order__price">782 ₽</p>
          </li>
          <li class="order__item">
            <div class="product">
              <img
                src="../assets/img/product.svg"
                class="product__img"
                width="56"
                height="56"
                alt="Капричоза"
              />
              <div class="product__text">
                <h2>Моя любимая</h2>
                <p>
                  30 см, на тонком тесте<br />
                  Соус: томатный<br />
                  Начинка: грибы, лук, ветчина, пармезан, ананас
                </p>
              </div>
            </div>

            <p class="order__price">2х782 ₽</p>
          </li>
        </ul>

        <ul class="order__additional">
          <li>
            <img
              src="../assets/img/cola.svg"
              width="20"
              height="30"
              alt="Coca-Cola 0,5 литра"
            />
            <p>
              <span>Coca-Cola 0,5 литра</span>
              <b>56 ₽</b>
            </p>
          </li>
          <li>
            <img
              src="../assets/img/sauce.svg"
              width="20"
              height="30"
              alt="Острый соус"
            />
            <p>
              <span>Острый соус</span>
              <b>30 ₽</b>
            </p>
          </li>
          <li>
            <img
              src="../assets/img/potato.svg"
              width="20"
              height="30"
              alt="Картошка из печи"
            />
            <p>
              <span>Картошка из печи</span>
              <b>170 ₽</b>
            </p>
          </li>
        </ul>

        <p class="order__address">
          Адрес доставки: Тест (или если адрес новый - писать целиком)
        </p>
      </section>
    </div>
  </main>
</template>

<script setup>
import { SectionTitle } from "../common/components";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.order {
  margin-bottom: 32px;
  padding-top: 0;
}

.order__wrapper {
  display: flex;
  align-items: center;

  padding: 6px 16px;

  border-bottom: 1px solid rgba($green-500, 0.1);

  b {
    @include b-s14-h16;
  }

  span {
    @include b-s14-h16;
  }

  button {
    padding: 8px 26px;
  }
}

.order__number {
  margin-right: auto;
}

.order__sum {
  margin-right: 16px;
}

.order__button {
  margin-left: 16px;
}

.order__list {
  @include clear-list;

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  margin-top: 24px;
  padding-right: 10px;
  padding-left: 10px;
}

.order__item {
  display: flex;

  width: 310px;
  margin-right: 33px;
  margin-bottom: 32px;
}

.order__price {
  @include b-s16-h19;

  margin: 0;

  white-space: nowrap;
}

.order__additional {
  @include clear-list;

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  margin-bottom: 5px;
  padding-left: 80px;

  li {
    @include b-s11-h16;

    width: 130px;
    margin-right: 24px;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
  }

  img {
    float: left;

    margin-right: 7px;
  }

  b {
    display: block;
  }
}

.order__address {
  @include l-s11-h13;

  margin: 0;
  padding: 16px 10px;

  border-top: 1px solid rgba($green-500, 0.1);
}
</style>