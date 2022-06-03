<template>

  <HeaderView></HeaderView>
    <div class="relative -z-10 bg-[url('/image_accueil.png')] bg-no-repeat bg-cover h-screen text-center">
      <h1 class="text-white pt-12 text-xl ipad_pro:text-5xl ipad_pro:mb-10"><span class="font-bold">JAZZ </span>BAR</h1>
      <p class="text-white font-semibold ipad_mini:text-lg  ipad_pro:text-4xl">Le Jazz bar à ne pas manquer </p>
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

