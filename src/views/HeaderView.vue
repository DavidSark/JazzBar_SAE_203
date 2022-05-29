<template>
  <header>
    
      <img class="" src="../../img/logo.png">
      <Menu class="fixed top-0 right-0">  
        <div class="m-6 ">      
          <MenuButton >
            <MenuIcon class="h-5 w-5 fill-blue-300 stroke-white" />
              <span class="sr-only">Menu</span>
            </MenuButton>
        

        <transition
          enter-active-class="transition duration-3000 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-3000 opacity-100"
          leave-active-class="transition duration-75 ease-out"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems class="flex flex-col">
            <MenuItem v-slot="{ active }">
              
                <RouterLink to="/" :class="{ 'text-white': active }" class="text-blue-600 underline"> 
                  <div class="flex ">
                    <HomeIcon class="stroke-white w-6 mr-3" />
                    <span>Accueil</span>
                  </div>
                </RouterLink>
              
            </MenuItem>
            
            <MenuItem>
              <RouterLink to="/programme" :class="{ 'text-white': active }" class="text-blue-600 underline">
                <div class="flex">
                    <NewspaperIcon class="stroke-white w-6 mr-3"/>
                     <span>Programme</span>
                </div> 
              </RouterLink>
            </MenuItem>
            <MenuItem>
              <RouterLink to="/artistes" :class="{ 'text-white': active }" class="text-blue-600 underline">
                <div class="flex">
                    <UserGroupIcon class="stroke-white w-6 mr-3"/>
                     <span>Artistes</span>
                </div> 
              </RouterLink>
            </MenuItem>
            <MenuItem>
              <RouterLink to="/artistes" :class="{ 'text-white': active }" class="text-blue-600 underline">
                <div class="flex">
                    <HomeIcon class="stroke-white w-6 mr-3"/>
                     <span>Le Bar</span>
                </div> 
              </RouterLink>
            </MenuItem>
            <MenuItem>
              <RouterLink to="/artistes" :class="{ 'text-white': active }" class="text-blue-600 underline">
                <div class="flex">
                    <MailOpenIcon class="stroke-white w-6 mr-3"/>
                     <span>Contact</span>
                </div>
              </RouterLink>
            </MenuItem>
          </MenuItems>
        </transition>
       
        </div>
      </Menu>
   
  </header>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { MenuIcon, HomeIcon, NewspaperIcon, UserGroupIcon, MailOpenIcon } from "@heroicons/vue/outline";
export default {
  components: { Menu, MenuButton, MenuItems, MenuItem, MenuIcon, HomeIcon, NewspaperIcon, UserGroupIcon,  MailOpenIcon   },
};


/*Transisition menu*/

</script>







<style scoped>
a {
  text-decoration: none;
  color: white;
}
</style>