<template>
  <main>
    <HeaderView></HeaderView>
    <h1 class="text-2xl text-white">Page d'accueil</h1>
  </main>
</template>

<script>
/* Import des composents*/
import HeaderView from "./HeaderView.vue";

/* Import d'heroicons si besoin*/
import { MenuIcon } from "@heroicons/vue/outline";

/* Appel des composents */
export default {
  components: { 
    MenuIcon,
    HeaderView,
    },
};
</script>