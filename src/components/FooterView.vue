<template>
  <div class="mt-20 bg-Gris_fond_pied_de_page ipad_mini:text-lg">
    
    <div class="mx-5 text-Gris pt-6 ">
      <h2 class="text-Gris ">Nous suivre</h2>
      <p class="text-sm ipad_mini:text-lg">Abonnez vous à la newsletter pour ne rien rater!</p>
      <InputView></InputView>

      <h2 class="mt-12">Nous contacter</h2>
      <div class="flex flex-col">
        <div class="flex">
          <MapIcon class="mr-2 w-6" />
          <p>43, faubourg de Besançon, 25200 Montbéliard</p>
        </div>
        <div class="flex">
          <PhoneIcon class="mr-2 w-6" />
          <p>07 82 75 09 19</p>
        </div>
        <div class="flex">
          <MailIcon class="mr-2 w-6" />
          <p>contact@jazzbar.net</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <img class="bg-right " src="/flammant.png" />
    </div>
    <div class="text-white text-center">
      <p>Jazz Bar © 2022 | Tous droits réservés</p>
    </div>
  </div>
</template>

<script>
import InputView from "./InputView.vue";

import { MapIcon, PhoneIcon, MailIcon } from "@heroicons/vue/outline";

export default {
  components: {
    InputView,
    MapIcon,
    PhoneIcon,
    MailIcon,
  },
};
</script>