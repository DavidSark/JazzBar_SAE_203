<template>
        <HeaderView></HeaderView>
        <div class="relative -z-10 bg-[url('/image_accueil.png')] bg-no-repeat bg-cover h-screen text-center">
            <h1 class="text-white pt-12 text-xl ipad_pro:text-5xl ipad_pro:mb-10"><span class="font-bold">JAZZ </span>BAR</h1>
            <p class="text-white font-semibold ipad_mini:text-lg  ipad_pro:text-4xl">Le Jazz bar à ne pas manquer </p>
        </div>

    <div>
            <div class="flex justify-center text-white ipad_mini:text-lg desktop:text-xl">
            <h5>Retrouvez la <span class="font-bold">liste</span> des Musiques</h5>
            </div>
            <table class="flex flex-col justify-center items-center">
            <tbody class="ipad_mini:text-lg desktop:text-xl">
                <tr v-for='musique in listeMusique' :key='musique.id'>
                <div class="bg-Violet_transparent mt-6 rotate-minus3 ipad_mini:text-lg ipad_mini:rotate-minus2  mb-12 ipad_pro:text-lg desktop:text-xl">
            <p class="text-white text-center uppercase">
                {{musique.nom}}
            </p>
        </div>
                </tr>
            </tbody>
            </table>
    </div>

            <div class="text-white text-center  ipad_mini:text-lg desktop:text-xl">
                <h5>Vous voulez un style de Jazz particulier?</h5>
                <h5>Ajoutez la !</h5>
            </div>

            <form class='mt-3'>
            <div class="flex flex-col justify-center items-center w-max m-auto">
                <input type="text" v-model='nom' class="form-control" required />
                <button class="btn btn-light" type="button"  @click='createMusique()' title="Création">
                <p class=" text-white border rounded-full px-3 py-1 mx-3 mt-2 hover:bg-white hover:text-black ">Ajouter</p>
                </button>
            </div>
            </form>

            <table class="table">
            <tbody>
                <tr v-for='musique in listeMusiqueSynchro' :key='musique.id'>
                <td>{{musique.id}}</td>
                <td>
                    <input type='text' v-model='pays.nom' />
                </td>
                </tr>
            </tbody>
            </table>
           
<FooterView></FooterView>
</template>
          
<script>
import HeaderView from '../components/HeaderView.vue'
import FooterView from '../components/FooterView.vue'
// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore, 
    collection, 
    getDocs, 
    addDoc,
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

    export default {   
         components: {
            HeaderView,
            FooterView,
            },

        data(){ 
            // Données de la vue
            return{                
                listeMusique:[],  // Liste des pays - collection pays Firebase
                 listeMusiqueSynchro:[] // Liste des pays synchronisée - collection pays de Firebase
            }
            
        },

        mounted(){ // Montage de la vue
              // Appel de la liste des pays
            this.getMusique();
        },

        methods:{
            // Async permet de qualifier cette fonction d'asynchrone 
            // et oblige à l'attente de résultats de await
            async getMusique(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbMusique= collection(firestore, "musique");
                // Obtenir tous les documents de la collection pays
                // await pour attendre l'obtention des résultats
                const query = await getDocs(dbMusique);
                query.forEach((doc) => {
                    let musique = {
                        id : doc.id,
                        nom: doc.data().nom
                    }
                    this.listeMusique.push(musique);
                });
            },

               async getMusiqueSynchro(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbMusique= collection(firestore, "Musique");
                // Liste des pays synchronisée
                const query = await onSnapshot(dbMusique, (snapshot) =>{
                    //  Récupération des résultats dans listePaysSynchro
                    // On utilse map pour récupérer l'intégralité des données renvoyées
                    // on identifie clairement le id du document
                    // les rest parameters permet de préciser la récupération de toute la partie data
                    this.listeMusiqueSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
                })
            },

            async createMusique(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbMusique= collection(firestore, "musique");
                // On passe en paramètre format json
                // Les champs à mettre à jour
                // Sauf le id qui est créé automatiquement
                const docRef = await addDoc(dbMusique,{
                    nom: this.nom
                })
                console.log('document créé avec le id : ', docRef.id);
             },

            async updateMusique(musique){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à modifier
                const docRef = doc(firestore, "musique", musique.id);
                // On passe en paramètre format json
                // Les champs à mettre à jour
                await updateDoc(docRef, {
                    nom: musique.nom
                }) 
             },

            async deleteMusique(musique){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à supprimer
                const docRef = doc(firestore, "musique", musique.id);
                // Suppression du pays référencé
                await deleteDoc(docRef);
             },
        }
    }
</script>
    

