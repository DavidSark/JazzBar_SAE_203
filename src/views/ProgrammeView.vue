<template>
 
    <HeaderView></HeaderView>
    <div class="bg-[url('/image_accueil.png')] bg-no-repeat bg-cover h-screen text-center">
      <h1 class="text-white pt-12 text-xl ipad_pro:text-5xl ipad_pro:mb-10"><span class="font-bold">JAZZ </span>BAR</h1>
      <p class="text-white font-semibold ipad_mini:text-lg  ipad_pro:text-4xl">Programme de la semaine</p>
    </div>

    <div class="text-center text-white mx-10">
        <p class=" ipad_mini:text-lg desktop:text-xl">
            Tout au long de la semaine, retrouvez  ses différents dérivés du Jazz 
        </p>
    </div>
    <div class="mt-10 relative -z-1">
        <div class="bg-Magenta_transparent mb-12 ipad_mini:text-lg ipad_pro:text-lg desktop:text-xl">
            <p class="text-white text-center uppercase ">
                Style Jazz New Orleans
            </p>
        </div>
        <div class="bg-Violet_transparent mt-6 rotate-minus3 ipad_mini:text-lg ipad_mini:rotate-minus2  mb-12 ipad_pro:text-lg desktop:text-xl">
            <p class="text-white text-center uppercase">
                Style Jazz Rock
            </p>
        </div>
        <div class="bg-Bleu_transparent mt-6 rotate-2 ipad_mini:text-lg ipad_mini:rotate-1 mb-12 ipad_pro:text-lg desktop:text-xl">
            <p class="text-white text-center uppercase">
                Style Jazz Soul Jazz
            </p>
        </div>
        <div class="bg-Jaune_orange_transparent transparent mt-6  mb-12 ipad_mini:text-lg ipad_pro:text-lg desktop:text-xl ">
            <p class="text-white text-center uppercase">
                Style Jazz Post-Modern
            </p>
        </div>
         <div class="bg-Magenta_transparent mt-6 rotate-minus3  mb-12 ipad_mini:text-lg ipad_pro:text-lg desktop:text-xl">
            <p class="text-white text-center uppercase">
                Style Jazz European Jazz
            </p>
        </div>
        <p class="text-white text-center ipad_mini:text-lg desktop:text-xl">
            Un style en particulier vous intéresse ? 
           Cliquez dessus pour plus d’informations !
        </p>
    </div>
    
    <Footer>
          <FooterView></FooterView>
    </Footer>
</template>

<script>
/* Import des composents*/
import HeaderView from '../components/HeaderView.vue'
import FooterView from '../components/FooterView.vue'



/* Import d'heroicons si besoin*/
import { MenuIcon } from "@heroicons/vue/outline";

/* Appel des composents */
export default {
  components: {
   HeaderView,
    FooterView,
},
};
</script>