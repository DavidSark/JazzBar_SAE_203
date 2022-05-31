<template>
 <HeaderView></HeaderView>

    <div class="bg-[url('/image_accueil.png')] bg-no-repeat bg-cover h-screen text-center">
      <h1 class="text-white pt-12 text-xl ipad_pro:text-5xl ipad_pro:mb-10"><span class="font-bold">JAZZ </span>BAR</h1>
      <p class="text-white font-semibold ipad_mini:text-lg  ipad_pro:text-4xl">Mentions Légales</p>
    </div>    
    <p class="text-white text-center mb-6 ipad_mini:text-lg desktop:text-xl">Mentions Légales</p>
    <p class="text-white mx-10 mb-10">
      DÉNOMINATION SOCIALE
      Association pour l’événement de musique JAZZ BAR.
    </p>
      
    <p class="text-white mx-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget massa malesuada leo scelerisque porta pharetra nec mauris. Nam mollis nunc massa, in egestas sapien dapibus ac. Nunc tincidunt mauris ut ex consectetur, at pellentesque purus rhoncus. Fusce sapien dui, finibus non condimentum eu, porta in ligula. Integer malesuada, justo non eleifend hendrerit, enim risus cursus dui, nec aliquet nisi eros vel magna. Vestibulum sagittis, odio nec malesuada vulputate, nunc lacus bibendum eros, ut porttitor felis magna vitae nunc. Sed quis tempus tellus, at placerat ligula. Phasellus malesuada id metus condimentum aliquam. Aliquam aliquam est ut sagittis porttitor.
    </p>
    <p class="text-white mx-10 mt-5">
      Directeur de la publication : davd sarkissian 

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget massa malesuada leo scelerisque porta pharetra nec mauris. Nam mollis nunc massa, in egestas sapien dapibus ac. Nunc tincidunt mauris ut ex consectetur, at pellentesque purus rhoncus. Fusce sapien dui, finibus non condimentum eu, porta in ligula. Integer malesuada, justo non eleifend hendrerit, enim risus cursus dui, nec aliquet nisi eros vel magna. Vestibulum sagittis, odio nec malesuada vulputate, nunc lacus bibendum eros, ut porttitor felis magna vitae nunc. Sed quis tempus tellus, at placerat ligula. Phasellus malesuada id metus condimentum aliquam. Aliquam aliquam est ut sagittis porttitor.
    </p>
      
    <p class="text-white mx-10 mt-10"> 
      PROPRIÉTÉ INTELLECTUELLE
    </p>
    <p class="text-white mx-10 mt-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget massa malesuada leo scelerisque porta pharetra nec mauris. Nam mollis nunc massa, in egestas sapien dapibus ac. Nunc tincidunt mauris ut ex consectetur, at pellentesque purus rhoncus. Fusce sapien dui, finibus non condimentum eu, porta in ligula. Integer malesuada, justo non eleifend hendrerit, enim risus cursus dui, nec aliquet nisi eros vel magna. Vestibulum sagittis, odio nec malesuada vulputate, nunc lacus bibendum eros, ut porttitor felis magna vitae nunc. Sed quis tempus tellus, at placerat ligula. Phasellus malesuada id metus condimentum aliquam. Aliquam aliquam est ut sagittis porttitor.
    </p>   
    
    <p class="text-white mx-10 mt-10">
      RÈGLES ÉDITORIALES ET LIENS AVEC D'AUTRES SITES
    </p>
    <p class="text-white mx-10 mt-5">
      JAZZ BAR s'engage, en tant qu'éditeur en ligne, à veiller à la protection des mineurs, à ne pas porter atteinte aux droits, à la liberté et à la dignité de la personne, et à informer le lecteur de la nature éditoriale des contenus proposés. Le Site peut contenir des liens hypertextes donnant accès à d'autres sites web édités. Ce dernier ne pourra être tenu responsable directement ou indirectement dans le cas où lesdits sites tiers ne respectent pas les dispositions légales et réglementaires tant françaises qu'européennes en vigueur ou à venir, ainsi que les conséquences de ce non-respect.
    </p>

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