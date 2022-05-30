<template>
  <nav>
      <!-- Menu bureau -->
      <div class="">
        <div class="max-w-7xl mx-auto">
            <div class="flex justify-between">
                <!-- Menu -->
                <div class="flex space-x-4">
                    <!-- Logo -->
                    <div class="flex items-center py-5 px-2">
                        <RouterLink to="/"><img src="../../img/logo.png"></RouterLink>
                    </div>
                    <!-- Menu -->
                    <div class="hidden text-white ipad_pro:flex items-center space-x-1">
                        <RouterLink class="py-5 px-2 hover:text-Gris" to="/">Accueil</RouterLink>
                        <RouterLink class="py-5 px-2 hover:text-Gris" to="/programme">Programme</RouterLink>
                        <RouterLink class="py-5 px-2 hover:text-Gris" to="/artistes">Groupe</RouterLink>
                        <RouterLink class="py-5 px-2 hover:text-Gris" to="/artiste">Artistes</RouterLink>
                        <RouterLink class="py-5 px-2 hover:text-Gris" to="/mentions">Mentions</RouterLink>  
                    </div>
                </div>
                <div class="hidden text-white ipad_pro:flex items-center space-x-1">
                    <RouterLink class="py-5 px-2 hover:text-Gris" to="/bar">Le Bar</RouterLink> 
                    <RouterLink class="py-5 px-2 hover:text-Gris" to="/concert">Concerts</RouterLink>
                </div>

                <!-- Bouton menu -->
                <div class="ipad_pro:hidden flex items-center">
                    <button @click="menuVisible = !menuVisible" class=" py-5 px-2 "> 
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                
            </div>
        </div>
      </div>
      <!-- Menu mobile -->
      <div class="text-white bg-black ipad_pro:hidden" :class="{hidden: menuVisible}">
        <RouterLink class="block py-2 px-4 hover:text-Gris bg-black " to="/">Accueil</RouterLink>
        <RouterLink class="block py-2 px-4 hover:text-Gris bg-black " to="/programme">Programme</RouterLink>
        <RouterLink class="block py-2 px-4 hover:text-Gris bg-black " to="/artistes">Groupe</RouterLink>
        <RouterLink class="block py-2 px-4 hover:text-Gris bg-black " to="/artiste">Artistes</RouterLink>
        <RouterLink class="block py-2 px-4 hover:text-Gris bg-black " to="/bar">Le Bar</RouterLink> 
        <RouterLink class="block py-2 px-4 hover:text-Gris bg-black " to="/concert">Concerts</RouterLink>
        <RouterLink class="block py-2 px-4 hover:text-Gris bg-black " to="/mentions">Mentions</RouterLink> 
      </div>
  </nav>

</template>

<script setup>
import {ref} from 'vue';

const menuVisible = ref(true);


</script>

<style>

</style>