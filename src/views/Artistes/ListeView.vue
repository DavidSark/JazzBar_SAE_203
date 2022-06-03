<template>
   <HeaderView></HeaderView>
    <div class="relative -z-10 bg-[url('/image_accueil.png')] bg-no-repeat bg-cover h-screen text-center">
      <h1 class="text-white pt-12 text-xl ipad_pro:text-5xl ipad_pro:mb-10"><span class="font-bold">JAZZ </span>BAR</h1>
      <p class="text-white font-semibold ipad_mini:text-lg  ipad_pro:text-4xl">Le Jazz bar à ne pas manquer </p>
    </div>
    <div class="">        
        <div class="text-white">   
            <div class="flex flex-col ">    
                <p  class="text-center my-10 font-semibold text-base ipad_pro:text-lg">Artistes</p>
                <router-link to="/create" class="flex justify-end items-center mr-10">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Ajoutez un artiste !
                        </router-link>  
            </div> 
            <div class="ipad_pro:grid ipad_pro:grid-cols-2">                       
                <div class="" v-for="artistes in listeParticipant" :key="artistes.id">
                
                    <div class="flex flex-col justify-center items-center bg-m">  
                        <div class="bg-Magenta_transparent w-96 h-max pb-1 m-4">                                      
                        <img class="w-full" :src="artistes.photo" 
                        :alt="artistes.nom"> 
                        <div class="text-center font-semibold text-base ipad_pro:text-lg "><p>{{artistes.nom}}</p></div>   
                        </div>                                                            
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <div class="w-max text-white border rounded-full px-3 py-1 mx-3 mt-2 hover:bg-white hover:text-black">
                        <RouterLink :to="{ name:'UpdateParticipant', params: { id: artistes.id }}">
                                Modifier
                        </RouterLink>
                        </div>
                    

                    <div class="w-max text-white border rounded-full px-3 py-1 mx-3 mt-2 hover:bg-white hover:text-black">
                            <RouterLink :to="{ name:'DeleteParticipant', params: { id: artistes.id }}">
                            Supprimer
                            </RouterLink>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    </div>

    <Footer>
          <FooterView></FooterView>
        </Footer>
</template>

<script>
import HeaderView from '../../components/HeaderView.vue'
import FooterView from '../../components/FooterView.vue'

import { 
    getFirestore,   
    collection,     
    onSnapshot,     
    query,         
    orderBy         
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


   
    import { 
        getStorage,            
        ref,                    
        getDownloadURL,         
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'


export default {

          components: {
    HeaderView,
    FooterView,
},

  name:'ListeView',
  data() {
      
    return {
            listeParticipant:[] 
        }
    },
    
    mounted(){
        this.getParticipants();
    },
    methods: {
        async getParticipants(){
            const firestore = getFirestore();
            const dbPart = collection(firestore, "artistes");
            const q = query(dbPart, orderBy('nom', 'asc'));
            await onSnapshot(q, (snapshot) => {
                this.listeParticipant = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))
                this.listeParticipant.forEach(function(personne){
                    const storage = getStorage();
                    const spaceRef = ref(storage, 'artistes/'+personne.photo);
                    getDownloadURL(spaceRef)
                    .then((url) => {
                        personne.photo = url;
                    })
                
                })
            })      
        },

    }

}
</script>



