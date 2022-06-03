<template>

<h1 class="text-white font-thin tracking-widest text-center text-4xl p-5 block border bg-Gris">GUIDE DE STYLE</h1>
<div class="flex justify-center ">
<p class="p-12 block text-white bg-Magenta_rose mt-10">E6007E</p>
<p class="p-12 block text-white bg-Violet_transparent mt-10">code couleur</p>
<p class="p-12 block text-white bg-Bleu_transparent mt-10">code couleur</p>
<p class="p-12 block text-white bg-Jaune_orange_transparent mt-10">code couleur</p>
<p class="p-12 block text-white bg-Gris mt-10">BEBEBE</p>
<p class="p-12 block text-white bg-Gris_fond_pied_de_page mt-10">2E2E2E</p>
</div>

<h1 class="text-white font-thin tracking-widest text-center text-4xl mt-10 p-5 bg-Gris">TYPOGRAPHIE</h1>
<hr/>
<p class="font-roboto text-white text-center text-4xl p-10">ROBOTO</p>
<h1 class="text-white font-thin tracking-widest text-center text-4xl mt-10 p-5">COMPONENTS</h1>
<hr/>


<h1>Header</h1>
<div>
    <HeaderView></HeaderView>
</div>
<hr/>

<h1>Footer</h1>
<div>
    <FooterView></FooterView>
</div>
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