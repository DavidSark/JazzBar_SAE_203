<template>
    <div>
        <div class=" flex flex-col justify-center items-center font-roboto ">
            <RouterLink to="/"><img src="../../img/jazz_bar_logo.png" class="ipad_pro:w-60 desktop:w-72 w-32 mt-32 mb-10"></RouterLink>
            <p class="text-white text-5xl">Erreur 404 </p>
            <p class="text-white text-lg">La page n'a pas été trouvé.</p>
            <div class="text-white flex">
            <RouterLink class="block py-2 px-4 hover:text-Gris bg-black " to="/">Accueil</RouterLink>
            <RouterLink class="block py-2 px-4 hover:text-Gris bg-black " to="/programme">Programme</RouterLink>
            <RouterLink class="block py-2 px-4 hover:text-Gris bg-black " to="/bar">Le Bar</RouterLink> 
      
            </div>
        </div>


    </div>
</template>