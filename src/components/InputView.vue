
<template>
  <div class="z-1001 relative mr-10 mt-2 flex items-center justify-center">
    <input
      v-model="input"
      type="text"
      placeholder="Votre e-mail..."
      class="mx-10 flex w-full flex-none bg-gris_foncé p-2 text-sm text-white placeholder-white outline-none"
    />

    <div class="absolute right-0 mr-4 flex w-5 bg-gris_plus_foncé text-base text-white">
      <ChevronRightIcon></ChevronRightIcon>
    </div>
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
