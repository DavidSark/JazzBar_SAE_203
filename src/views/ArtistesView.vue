<template>

  <HeaderView></HeaderView>
    <div class="relative -z-10 bg-[url('/image_accueil.png')] bg-no-repeat bg-cover h-screen text-center">
      <h1 class="text-white pt-12 text-xl ipad_pro:text-5xl ipad_pro:mb-10"><span class="font-bold">JAZZ </span>BAR</h1>
      <p class="text-white font-semibold ipad_mini:text-lg  ipad_pro:text-4xl">Le Jazz bar à ne pas manquer </p>
    </div>
    
    <div class="">
        <div class="text-center text-white mx-10">
            <h5 class="ipad_mini:text-lg desktop:text-xl">Retrouvez la liste de tous Groupes!</h5>
        </div>    
      
        <form class="">
       
           <span class="">
                            <div class="flex flex-col justify-center items-center" >
                                <div class="mt-3">
                                  <span class="ipad_mini:text-lg desktop:text-xl text-white my-3" >Filtrez les groupes</span>
                                </div>
                                <input type="text" class="form-control" v-model="filter" />
                              </div>
                          </span>
        </form>

        <div class="">
            <table class="flex flex-col justify-center items-center">
              <thead>
                    <tr>                      
                        <th scope="">
                          <div class="text-center ipad_mini:text-lg desktop:text-xl text-white my-3">
                              Les groupes présents :</div>                          
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for='groupe in filterByNom' :key='groupe.id'>
                        <td>
                          <form>
                            <div class="">
                              <input type="text" class="form-control" v-model="groupe.nom" required />
                              <button class="btn btn-light" type="submit" 
                              @click.prevent="updateArtiste(groupe)" title="Modification" >
                                <p class=" text-white border rounded-full px-3 py-1 mx-3 mt-2 hover:bg-white hover:text-black">Modifier</p>
                              </button>
                              <button class="btn btn-light" type="submit" 
                              @click.prevent="deleteArtiste(groupe)" title="Suppression">
                              <p class=" text-white border rounded-full px-3 py-1 mx-3 mt-2 hover:bg-white hover:text-black">Supprimer</p>
                              </button>
                            </div>
                          </form>


                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

       <div class="">
            <div class="flex flex-col w-max mx-auto items-center justify-center">
              <span class="ipad_mini:text-lg desktop:text-xl text-white my-3 mt-10 " >Ajoutez les groupes que vous aimeriez voir !</span>
            <input type="text" class="form-control" v-model="nom" required />
            <button class="btn btn-light" type="button" @click="createArtiste()" title="Création">
             <p class=" text-white border rounded-full px-3 py-1 mx-3 mt-2 hover:bg-white hover:text-black">Ajouter</p>
            </button>
          </div>
          </div>

   <Footer> 
          <FooterView></FooterView>
    </Footer>
</template>

<script>
import HeaderView from '../components/HeaderView.vue'
import FooterView from '../components/FooterView.vue'
import { 
    getFirestore, 
    collection, 
    doc, 
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

export default {
     components: {
    HeaderView,
    FooterView,
     },
  name:'ListeView',
  data() {
    return {
        nom:null, // Pour la création d'une catégorie 
        listeArtisteSynchro:[],
        filter:''
    }
  },

  computed:{
      //Tri des catégories par ordre alpha 
      orderByNom:function(){
        return this.listeArtisteSynchro.sort(function(a,b){
          if (a.nom < b.nom) return -1; 
          if (a.nom > b.nom) return 1;
          return 0;
        })
      },

      filterByNom:function(){
        if(this.filter.length > 0){
          let filter = this.filter.toLowerCase();
          return this.orderByNom.filter(function(groupe){
            return groupe.nom.toLowerCase().includes(filter);
          })
        }
        else{
          return this.orderByNom;
        }
      }
  },

   mounted(){ 
            this.getArtisteSynchro();
        },
        
  methods:{
    async getArtisteSynchro(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbArtiste= collection(firestore, "groupe");
                // Liste des pays synchronisée
                const query = await onSnapshot(dbArtiste, (snapshot) =>{
                    //  Récupération des résultats dans listePaysSynchro
                    // On utilse map pour récupérer l'intégralité des données renvoyées
                    // on identifie clairement le id du document
                    // les rest parameters permet de préciser la récupération de toute la partie data
                    this.listeArtisteSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
                })
            },
    async createArtiste(){
      const firestore = getFirestore();
      const dbArtiste = collection(firestore,"groupe");
      const docRef = await addDoc(dbArtiste,{
        nom: this.nom
      })
      console.log('document crée avec le id : ', docRef.id);
    },

    async updateArtiste(groupe){
      const firestore = getFirestore();
      const docRef = doc(firestore, "groupe", groupe.id);
      await updateDoc(docRef,{
        nom: artiste.nom
      })
    },

    async deleteArtiste(groupe){
      const firestore = getFirestore();
      const docRef = doc(firestore, "groupe", groupe.id);
      await deleteDoc(docRef);
    },

  }
}
</script>

<style scoped>
</style>

