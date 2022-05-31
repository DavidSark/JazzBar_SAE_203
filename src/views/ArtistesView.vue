<template>
 
    <HeaderView></HeaderView>
    <div class="bg-[url('/image_accueil.png')] bg-no-repeat bg-cover h-screen text-center">
      <h1 class="text-white pt-12 text-xl ipad_pro:text-5xl ipad_pro:mb-10"><span class="font-bold">JAZZ </span>BAR</h1>
      <p class="text-white font-semibold ipad_mini:text-lg  ipad_pro:text-4xl">Les Groupes d'artistes</p>
    </div>
    
    
    <div class="text-center text-white mx-10">
        <p class=" ipad_mini:text-lg desktop:text-xl">
            Retrouvez les artistes & leurs styles !
        </p>
    </div>

    <div class="flex justify-center mt-6">
        <div class="bg-Magenta_transparent w-auto h-auto flex justify-between items-center">
            <div class="w-20 h-28 ipad_pro:w-28 ipad_pro:h-36 desktop:w-36 desktop:h-44 bg-white m-4"> 

            </div>
            <div class="w-20 h-28 ipad_pro:w-28 ipad_pro:h-36 desktop:w-36 desktop:h-44 bg-white  m-4"> 

            </div>
            <div class="w-20 h-28 ipad_pro:w-28 ipad_pro:h-36 desktop:w-36 desktop:h-44 bg-white  m-4"> 

            </div>  

        </div>
    </div>

    
    <div class="flex justify-center mt-6">
        <div class="bg-Magenta_transparent w-auto h-auto flex justify-between items-center">
            <div class="w-20 h-28 ipad_pro:w-28 ipad_pro:h-36 desktop:w-36 desktop:h-44 bg-white m-4"> 

            </div>
            <div class="w-20 h-28 ipad_pro:w-28 ipad_pro:h-36 desktop:w-36 desktop:h-44 bg-white  m-4"> 

            </div>
            <div class="w-20 h-28 ipad_pro:w-28 ipad_pro:h-36 desktop:w-36 desktop:h-44 bg-white  m-4"> 

            </div>  

        </div>
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