<template>
 
    <HeaderView></HeaderView>
    <div class="bg-[url('/img/image_accueil.png')] bg-no-repeat bg-cover h-screen text-center">
      <h1 class="text-white pt-12 text-xl ipad_pro:text-5xl ipad_pro:mb-10"><span class="font-bold">JAZZ </span>BAR</h1>
      <p class="text-white font-semibold ipad_mini:text-lg  ipad_pro:text-4xl uppercase">Les concerts</p>
    </div>  
    
        <p class="text-white font-roboto text-center ipad_mini:text-lg desktop:text-xl"> Retrouvez les concerts</p>

    
       <div class="mt-10 relative ">
        <div class="bg-Magenta_transparent w-screen mb-12 ipad_mini:text-lg ipad_pro:text-lg desktop:text-xl">
             <div class="flex justify-center">
                
                <div class="flex flex-col justify-center items-center">
                    <div class="flex justify">
                        <p class="text-white text-center uppercase ">
                            Style Jazz New Orleans
                        </p>
                    </div>
                    <div class="flex">
                        <ClockIcon class="text-white w-4 mr-2 ipad_mini:w-7 desktop:w-10"></ClockIcon>
                        <p class="text-white">Début à 19h45</p>
                    </div>
                    <div class="flex justify-center items-center">
                        <p class="text-white m-0"><span class="font-bold">JUI</span> 05</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-Violet_transparent mt-6 rotate-minus3 ipad_mini:text-lg ipad_mini:rotate-minus2 w-screen mb-12 ipad_pro:text-lg desktop:text-xl">
             <div class="flex justify-center">
                
                <div class="flex flex-col justify-center items-center">
                    <div class="flex justify">
                        <p class="text-white text-center uppercase ">
                            Style Jazz Rock
                        </p>
                    </div>
                    <div class="flex">
                        <ClockIcon class="text-white w-4 mr-2 ipad_mini:w-7 desktop:w-10"></ClockIcon>
                        <p class="text-white">Début à 21h00</p>
                    </div>
                    <div class="flex justify-center items-center">
                        <p class="text-white m-0"><span class="font-bold">JUI</span> 06</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-Bleu_transparent mt-6 rotate-2 w-screen ipad_mini:text-lg ipad_mini:rotate-1 mb-12 ipad_pro:text-lg desktop:text-xl">
            <div class="flex justify-center">
                
                <div class="flex flex-col justify-center items-center">
                    <div class="flex justify">
                        <p class="text-white text-center uppercase ">
                            Style Jazz Soul Jazz
                        </p>
                    </div>
                    <div class="flex">
                        <ClockIcon class="text-white w-4 mr-2 ipad_mini:w-7 desktop:w-10"></ClockIcon>
                        <p class="text-white">Début à 19h00</p>
                    </div>
                    <div class="flex justify-center items-center">
                        <p class="text-white m-0"><span class="font-bold">JUI</span> 07</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-Jaune_orange_transparent transparent mt-6 w-screen mb-12 ipad_mini:text-lg ipad_pro:text-lg desktop:text-xl ">
             <div class="flex justify-center">
                
                <div class="flex flex-col justify-center items-center">
                    <div class="flex justify">
                        <p class="text-white text-center uppercase ">
                            Style Jazz New Orleans
                        </p>
                    </div>
                    <div class="flex">
                        <ClockIcon class="text-white w-4 mr-2 ipad_mini:w-7 desktop:w-10"></ClockIcon>
                        <p class="text-white">Début à 19h45</p>
                    </div>
                    <div class="flex justify-center items-center">
                        <p class="text-white m-0"><span class="font-bold">JUI</span> 08</p>
                    </div>
                </div>
            </div>
        </div>
         <div class="bg-Magenta_transparent mt-6 rotate-minus3 w-screen mb-12 ipad_mini:text-lg ipad_pro:text-lg desktop:text-xl">
            <div class="flex flex-col justify-center items-center">
                    <div class="flex justify">
                        <p class="text-white text-center uppercase ">
                            Style Jazz european jazz
                        </p>
                    </div>
                    <div class="flex">
                        <ClockIcon class="text-white w-4 mr-2 ipad_mini:w-7 desktop:w-10"></ClockIcon>
                        <p class="text-white">Début à 20h00</p>
                    </div>
                    <div class="flex justify-center items-center">
                        <p class="text-white m-0"><span class="font-bold">JUI</span> 09</p>
                    </div>
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
import { ClockIcon} from "@heroicons/vue/outline";

/* Appel des composents */
export default {
  components: {
    HeaderView,
    FooterView,
    ClockIcon,
},
};
</script>