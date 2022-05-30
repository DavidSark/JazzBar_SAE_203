<template>
    <HeaderView></HeaderView>

    <div class="bg-[url('/img/image_accueil.png')] bg-no-repeat bg-cover h-screen text-center">
      <h1 class="text-white pt-12 text-xl ipad_pro:text-5xl ipad_pro:mb-10"><span class="font-bold">JAZZ </span>BAR</h1>
      <p class="text-white font-semibold ipad_mini:text-lg  ipad_pro:text-4xl">Les Artistes</p>
    </div>

    <p class="text-center text-white ipad_mini:text-lg desktop:text-xl">Découvrez les artistes ! </p>

    <div class="ipad_pro:grid ipad_pro:grid-cols-2 ">
        <div class="flex justify-center mt-5 mb-10 ">
            <div class="bg-Magenta_transparent w-max h-max">
                <img class="" src="../../img/benoit.png" >
                <p class="text-white text-center font-roboto text-lg"> Tab Benoit</p>
            </div>
        </div>

        <div class="flex justify-center mt-5 mb-10">
            <div class="bg-Magenta_transparent w-max h-max">
                <img class="" src="../../img/benoit.png" >
                <p class="text-white text-center font-roboto text-lg"> Tab Benoit</p>
            </div>
        </div>
    </div>
   <Footer> 
          <FooterView></FooterView>
    </Footer>
</template>


<script>

import HeaderView from '../components/HeaderView.vue'
import FooterView from '../components/FooterView.vue'



export default {
  components: {
    HeaderView,
    FooterView,
},
};
</script>