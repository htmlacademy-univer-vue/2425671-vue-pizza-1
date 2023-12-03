import { defineStore } from "pinia";
import resources from "@/services/resources";

import {
  // функции нормализации
  normalizeDough,
  normalizeSizes,
  normalizeIngredients,
  normalizeSauces,
} from "@/common/helpers";

export const useDataStore = defineStore("data", {
  state: () => ({
    // dough: doughs.map((dough) => normalizeDough(dough)),
    // ingredients: ingredients.map((ingredient) =>
    //   normalizeIngredients(ingredient)
    // ),
    // misc: miscs,
    // sauce: sauces.map((sauce) => normalizeSauces(sauce)),
    // sizes: sizes.map((size) => normalizeSizes(size)),

    dough: [],
    ingredients: [],
    misc: [],
    sauce: [],
    sizes: [],
  }),
  actions: {
    async fetchdata() {
      const res1 = await resources.dough.getDoughs();
      console.log(res1.data)
      if (res1.__state !== "success") {
        return;
      } else {
        this.dough = res1.data.map((dough) => normalizeDough(dough));
      }

      const res2 = await resources.ingredient.getIngredients();
      console.log(res2.data)
      if (res1.__state !== "success") {
        return;
      } else {
        this.ingredients = res2.data.map((ingredient) =>
           normalizeIngredients(ingredient));
      }

      const res3 = await resources.misc.getMiscs();
      console.log(res3.data)
      if (res1.__state !== "success") {
        return;
      } else {
        this.misc = res3.data;
      }

      const res4 = await resources.sauce.getSauces();
      console.log(res4.data)
      if (res1.__state !== "success") {
        return;
      } else {
        this.sauce = res4.data.map((sauce) => normalizeSauces(sauce));
      }

      const res5 = await resources.size.getSizes();
      console.log(res5.data)
      if (res1.__state !== "success") {
          return;
      } else {
        this.sizes = res5.data.map((size) => normalizeSizes(size));
      }
    }
  },
});
