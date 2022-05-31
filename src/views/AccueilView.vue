<template>
  <main>
    <HeaderView></HeaderView>
    <div class="bg-[url('/img/image_accueil.png')] bg-no-repeat bg-cover  h-screen text-center">
      <h1 class="text-white pt-12 text-xl ipad_pro:text-5xl ipad_pro:mb-10"><span class="font-bold">JAZZ </span>BAR</h1>
      <p class="text-white font-semibold ipad_mini:text-lg  ipad_pro:text-4xl">Le Jazz bar à ne pas manquer </p>
    </div>
   
      <!-- <div class="bg-[url('/img/open.jpg')] bg-no-repeat right-0 h-64 mt-20"></div> -->
        <div class="flex justify-center my-14 mx-10">
          <div class="bg-Gris_fond_pied_de_page w-auto text-white">
            <h2 class="text-center font-semibold text-lg ipad_pro:text-xl">Le Jazz Bar ouvre ses portes </h2>
            <p class="p-3 ipad_pro:text-lg">Du mardi au jeudi de 18h à Minuit & le venredi au samedi de 18h à 02h.</p>
            <p class="p-3 ipad_pro:text-lg">Détendez-vous autour d’un verre accompagné de musique Jazz.</p>
          </div>
        </div>

        <div class="flex justify-center">
          <div class="bg-white h-0.5 w-72"></div>
        </div>

        <div class="flex flex-col justify-center items-center text-center mt-14 mx-10 ipad_pro:mx-72 ipad_mini:text-lg">
          <p class="text-white mb-10 ">Chaque soir, un programme différent !</p>
          <img class="" src="../../img/image_fond_1.png"/>
          <p class="text-white">Du Ragtime à la Soul-Jazz en passant par le Jazz-Rock, retrouvez toutes les variantes du Jazz </p>
          
          <RouterLink to="/programme">
            <div class="border-2 inline-block p-4 mt-6 ">
              <p class="text-white p-1 mx-3"> En savoir plus</p>
            </div> 
          </RouterLink>
        </div>
      
        <div class="flex justify-center">
          <div class="bg-white h-0.5 w-72 mt-14"></div>
        </div>
                
        <div class="flex flex-col justify-center items-center text-center mt-14 mx-10 ipad_pro:mx-72 ipad_mini:text-lg">
          <p class="text-white mb-10 ">Le programme change, les artistes aussi !</p>
          <img class="" src="../../img/image_fond_2.png"/>
          <p class="text-white ">Des artistes plus incroyables les uns que les autres seront présents!
          Découvrez qui sera là !</p>
          <RouterLink to="/artistes">
            <div class="border-2 inline-block p-4 mt-6 ">
              <p class="text-white p-1 mx-3">Découvrez les artistes</p>
            </div> 
          </RouterLink>
        
        </div>

         

        <div class="flex justify-center">
          <div class="bg-white h-0.5 w-72 mt-14"></div>
        </div>

          <div class="flex flex-col justify-center items-center text-center mt-14 mx-10  ipad_pro:mx-72 ipad_mini:text-lg">
          <p class="text-white mb-10">Une petite soif ?</p>
          <img class="" src="../../img/image_fond_3.png"/>
          <p class="text-white">Tout au long de la soirée profitez de nos boissons et cocktails !</p>

          <RouterLink to="/programme">
            <div class="border-2 inline-block p-4 mt-6 ">
              <p class="text-white p-1 mx-3">En savoir plus</p>
            </div> 
          </RouterLink>
        </div>
        
        <Footer>
          <FooterView></FooterView>
        </Footer>
        

  
  </main>

  
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
    MenuIcon,
    HeaderView,
    FooterView,
},
};
</script>