<template>
  <div class="ingredients__sauce">
    <p>Основной соус:</p>

    <label
      v-for="sauce in normalizedSauces"
      :key="sauce.id"
      class="radio ingredients__input"
    >
      <input
        type="radio"
        name="sauce"
        :value="sauce.sauce"
        :checked="sauce.sauce === modelValue.sauce"
        @input="
          emit('update:modelValue', {
            ...sauce,
            sauce: $event.target.value,
            price: sauce.price,
          })
        "
      />
      <span>{{ sauce.name }}</span>
    </label>
  </div>
</template>

<script setup>
defineProps({
  normalizedSauces: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

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
</style>
