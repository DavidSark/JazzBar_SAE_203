<template>
    <div class="text-center font-semibold text-base ipad_pro:text-lg text-white">
        <form enctype="multipart/form-data"  @submit.prevent="deleteParticipant">
            <div class="card bg-dark">

                <div class="card-header">
                    <h5 style="color:white;">Suppression d'un participant</h5>
                </div>    

             
                    
                        <div class="flex justify-between flex-col items-center">
                            <div class="">
                                <img class="preview img-fluid" :src="photoActuelle"/>
                            </div>
                    

                   
                    <h5 class="alert alert-warning text-center" role="alert">
                        Attention vous allez supprimer ce participant, cette action est irréversible !!
                    </h5>
                </div>

                <div class="flex justify-center items-center flex-col">   
                    <button type="submit" class="w-max text-white border rounded-full px-3 py-1 mx-3 mt-2 hover:bg-white hover:text-black" >
                        Supprimer
                    </button>
                    <button class="w-max text-white border rounded-full px-3 py-1 mx-3 mt-2 hover:bg-white hover:text-black">
                        <RouterLink to="/listeview">Annuler</RouterLink>
                    </button>
                </div>

            </div>
        </form>        
    </div>
</template>

<script>

import { 
    getFirestore, 
   
    doc, 
    getDoc,
    
    deleteDoc, 
  
  
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

// Storage
import { 
    getStorage, 
    ref, 
    getDownloadURL, 
  
    deleteObject,
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'


export default {
    name:'DeleteView',
    data() {
        return {
            participant:{           
                nom:null,               
                prenom:null,            
                photo:null,           
            },

            refParticipant:null,     
            photoActuelle:null       
        }
    },
    mounted(){ 
      
        
       
console.log("id participant", this.$route.params.id);
       
        this.getParticipant(this.$route.params.id);
    },

    methods :{

        async getParticipant(id){
           
            const firestore = getFirestore();
          
            
            const docRef = doc(firestore, "artistes", id);
            
            this.refParticipant = await getDoc(docRef);
           
            if(this.refParticipant.exists()){
              
                this.participant = this.refParticipant.data();
              
                this.photoActuelle = this.participant.photo;
            }else{
               
                this.console.log("Participant inexistant");
            }
           
            const storage = getStorage();
            
            const spaceRef = ref(storage, 'artistes/'+this.participant.photo);
           
            getDownloadURL(spaceRef)
                .then((url) => {
                  
                    this.photoActuelle = url;
            })
            .catch((error) =>{
                console.log('erreur downloadUrl', error);
            })
        },

        async deleteParticipant(){
            const firestore = getFirestore();
           
            await deleteDoc(doc(firestore, "artistes", this.$route.params.id));

          const storage = getStorage();
           
            let docRef = ref(storage, 'artistes/'+this.participant.photo);
            
            deleteObject(docRef);

           
            this.$router.push('/listeview');       
        }
    }

}
</script>



