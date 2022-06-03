<template>
 
    <HeaderView></HeaderView>
    <div class="bg-[url('/image_accueil.png')] bg-no-repeat bg-cover h-screen text-center">
      <h1 class="text-white pt-12 text-xl ipad_pro:text-5xl ipad_pro:mb-10"><span class="font-bold">JAZZ </span>BAR</h1>
      <p class="text-white font-semibold ipad_mini:text-lg  ipad_pro:text-4xl uppercase">Nous contacter</p>
    </div>  
    
    <p class="text-white font-roboto text-center ipad_mini:text-lg desktop:text-xl"> Nous contacter</p>

    <div class="ipad_pro:flex ipad_pro:justify-center ipad_pro:items-center ipad_pro:flex-col">
        <div class=" mx-10 mt-5 flex justify-center ipad_pro:w-700 ipad_pro:items-center ">
            <input
            v-model="input"
            type="text"
            placeholder="Nom.."
            class=" w-full bg-gris_foncé p-2 text-sm text-white placeholder-white border-2 border-white outline-none"
            />
        </div>

        <div class=" mx-10 mt-5 flex justify-center ipad_pro:w-700 ipad_pro:items-center ">
            <input
            v-model="input"
            type="text"
            placeholder="E-mail..."
            class=" w-full bg-gris_foncé p-2 text-sm text-white placeholder-white border-2 border-white outline-none"
            />
        </div>

         <div class=" mx-10 mt-5 flex justify-center ipad_pro:w-700 ipad_pro:items-center ">
            <input
            v-model="input"
            type="text"
            placeholder="Sujet.."
            class=" w-full bg-gris_foncé p-2 text-sm text-white placeholder-white border-2 border-white outline-none"
            />
        </div>
        <div class=" mx-10 mt-5 flex justify-center ipad_pro:w-700 ipad_pro:items-center ">
            <textarea
            v-model="input"
            type="text"
            placeholder="Message.."
            class=" w-full h-40 bg-gris_foncé p-2 text-sm text-white placeholder-white border-2 border-white outline-none"
            ></textarea> 
        </div>

        <div class="flex justify-center items-center ">
            <button >
                <div class=" border-2 p-2 mt-6 bg-gris_foncé ">
                <p class="text-white mx-2">Envoyer</p>
                </div>
            </button> 
        </div>
    </div>
    
       

     <Footer>
          <FooterView></FooterView>
    </Footer>
</template>

<script>
/* Import des composants*/
import HeaderView from '../components/HeaderView.vue'
import FooterView from '../components/FooterView.vue'



/* Import d'heroicons si besoin*/
import { MenuIcon } from "@heroicons/vue/outline";

/* Appel des composants */
export default {
  components: {
   HeaderView,
    FooterView,
},
};
</script>