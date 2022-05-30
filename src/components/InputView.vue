
<template>
  <div class="z-1 relative mt-2 flex items-center justify-start">
    <input
      v-model="input"
      type="text"
      placeholder="Votre e-mail..."
      class="w-80 bg-gris_foncé p-2 text-sm text-white placeholder-white outline-none"
    />
    
  </div>
</template>


<script>
import { ChevronRightIcon } from "@heroicons/vue/solid";

export default {
  components: {
    ChevronRightIcon,
  },
};
</script>
