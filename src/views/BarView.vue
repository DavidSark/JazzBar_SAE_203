<template>
 
    <HeaderView></HeaderView>
    <div class="bg-[url('/image_accueil.png')] bg-no-repeat bg-cover w- h-screen text-center">
      <h1 class="text-white pt-12 text-xl ipad_pro:text-5xl ipad_pro:mb-10"><span class="font-bold">JAZZ </span>BAR</h1>
      <p class="text-white font-semibold ipad_mini:text-lg  ipad_pro:text-4xl">Le Bar</p>
    </div>  
        
        <div class="flex justify-center my-14 mx-10">
          <div class="bg-Gris_fond_pied_de_page w-auto text-white desktop:bg-opacity-0">
            <h2 class="text-center font-semibold text-lg ipad_pro:text-xl">Le Bar</h2>
            <p class="p-3 ipad_pro:text-lg">Le Jazz Bar est le meilleur endroit pour se détendre, profiter d’une boisson fraiche et d’une bonne ambiance sonore ! </p>
            <p class="p-3 bgpu ipad_pro:text-lg">Profitez d’une soirée spéciale Jazz pour découvrir de nouveaux cocktails et surtout de nouveaux artistes talentueux.</p>
          </div>
        </div>

        <div class="flex flex-col justify-center items-center text-center mt-14 mx-10 ipad_mini:text-lg">
          <p class="text-white ">Perdu ?</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.019728701801!2d6.789026614968243!3d47.5090070027089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479216e8d2babf81%3A0xeba265d2a52e554a!2s43%20Fbg%20de%20Besan%C3%A7on%2C%2025200%20Montb%C3%A9liard!5e0!3m2!1sfr!2sfr!4v1654260987875!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <p class="text-white">Pas de panique ! Retrouvez votre chemin grace à la carte ci-dessous !</p>
          
         
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