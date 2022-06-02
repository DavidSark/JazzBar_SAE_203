<template>

  <HeaderView></HeaderView>
    <div class="relative -z-10 bg-[url('/image_accueil.png')] bg-no-repeat bg-cover h-screen text-center">
      <h1 class="text-white pt-12 text-xl ipad_pro:text-5xl ipad_pro:mb-10"><span class="font-bold">JAZZ </span>BAR</h1>
      <p class="text-white font-semibold ipad_mini:text-lg  ipad_pro:text-4xl">Le Jazz bar à ne pas manquer </p>
    </div>
    
    <div class="">
        <div class="text-center text-white mx-10">
            <h5 class="ipad_mini:text-lg desktop:text-xl">Retrouvez la liste de tous les Artistes !</h5>
        </div>    
        <hr/>


        <form class="">
          <h6></h6>
          <div class="m">
            <div class="flex flex-col w-max mx-auto items-center justify-center">
              <span class="ipad_mini:text-lg desktop:text-xl text-white my-3 " >Nom des Artistes</span>
            <input type="text" class="form-control" v-model="nom" required />
            <button class="btn btn-light" type="button" @click="createArtiste()" title="Création">
             <p class=" text-white border rounded-full px-3 py-1 mx-3 mt-2 hover:bg-white hover:text-black">Ajouter</p>
            </button>
          </div>
          </div>
           <span class="">
                            <div class="flex flex-col justify-center items-center" >
                                <div class="mt-3">
                                  <span class="ipad_mini:text-lg desktop:text-xl text-white my-3" >Filtré les Artistes</span>
                                </div>
                                <input type="text" class="form-control" v-model="filter" />
                                <button class="btn btn-light" type="button" title="Filtrage">
                                  <p class=" text-white border rounded-full px-3 py-1 mx-3 mt-2 hover:bg-white hover:text-black">Ajouter</p>
                                </button>
                              </div>
                          </span>
        </form>

        <div class="">
            <table class="flex flex-col justify-center items-center">
              <thead>
                    <tr>                      
                        <th scope="">
                          <div class="text-center ipad_mini:text-lg desktop:text-xl text-white my-3">
                              Les Artistes présents :</div>                          
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for='artiste in filterByNom' :key='artiste.id'>
                        <td>
                          <form>
                            <div class="">
                              <div class="">
                                <span class="ipad_mini:text-lg desktop:text-lg text-white my-3">Nom de l'Artiste</span>
                              </div>
                              <input type="text" class="form-control" v-model="artiste.nom" required />
                              <button class="btn btn-light" type="submit" 
                              @click.prevent="updateArtiste(artiste)" title="Modification" >
                                <p class=" text-white border rounded-full px-3 py-1 mx-3 mt-2 hover:bg-white hover:text-black">Modifier</p>
                              </button>
                              <button class="btn btn-light" type="submit" 
                              @click.prevent="deleteArtiste(artiste)" title="Suppression">
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
          return this.orderByNom.filter(function(artiste){
            return artiste.nom.toLowerCase().includes(filter);
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
                const dbArtiste= collection(firestore, "artiste");
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
      const dbArtiste = collection(firestore,"artiste");
      const docRef = await addDoc(dbArtiste,{
        nom: this.nom
      })
      console.log('document crée avec le id : ', docRef.id);
    },

    async updateArtiste(artiste){
      const firestore = getFirestore();
      const docRef = doc(firestore, "artiste", artiste.id);
      await updateDoc(docRef,{
        nom: artiste.nom
      })
    },

    async deleteArtiste(artiste){
      const firestore = getFirestore();
      const docRef = doc(firestore, "artiste", artiste.id);
      await deleteDoc(docRef);
    },

  }
}
</script>

<style scoped>
</style>

