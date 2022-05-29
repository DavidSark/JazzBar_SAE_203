<template>
  <main>
    <HeaderView></HeaderView>
    <div class="bg-[url('/img/image_accueil.png')] bg-no-repeat bg-cover w-screen h-screen text-center">
      <h1 class="text-white pt-12 text-xl ipad_pro:text-5xl ipad_pro:mb-10"><span class="font-bold">JAZZ </span>BAR</h1>
      <p class="text-white font-semibold ipad_pro:text-4xl">Le Jazz bar à ne pas manquer </p>
    </div>
   
      <!-- <div class="bg-[url('/img/open.jpg')] bg-no-repeat right-0 h-64 mt-20"></div> -->
        <div class="flex justify-center my-20 mx-10">
          <div class="bg-Gris_fond_pied_de_page w-auto text-white">
            <h2 class="text-center font-semibold text-lg ipad_pro:text-xl">Le Jazz Bar ouvre ses portes </h2>
            <p class="p-3 ipad_pro:text-lg">Du mardi au jeudi de 18h à Minuit & le venredi au samedi de 18h à 02h.</p>
            <p class="p-3 ipad_pro:text-lg">Détendez-vous autour d’un verre accompagné de musique Jazz.</p>
          </div>
        </div>

        <div class="flex justify-center">
          <div class="bg-white h-0.5 w-72"></div>
        </div>

        <div class="text-center mt-20">
          <p class="text-white">Chaque soir, un programme différent !</p>
          <img class="w-screen" src="../../img/image_fond_1.png"/>
          <p class="text-white">Du Ragtime à la Soul-Jazz en passant par le Jazz-Rock, retrouvez toutes les variantes du Jazz </p>
        </div>
      
        
    
  </main>

  
</template>

<script>
/* Import des composents*/
import HeaderView from '../components/HeaderView.vue'


/* Import d'heroicons si besoin*/
import { MenuIcon } from "@heroicons/vue/outline";



/* Appel des composents */
export default {
  components: {
    MenuIcon,
    HeaderView,
    BoutonView,
},
};
</script>