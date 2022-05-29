<template>
    <div class="bg-Gris_fond_pied_de_page mt-20">
        <div class="mx-5 text-Gris">
            <h2 class="text-Gris">Nous suivre</h2>
            <p class="text-sm">Abonnez vous à la newsletter pour ne rien rater!</p>
            <InputView></InputView>
        </div>
    </div>
</template>

<script>
/* Import des composents*/
import InputView from "./InputView.vue";

/* Appel des composents */
export default {
  components: {
   InputView,
},
};
</script>