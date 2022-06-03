<template>
    <div class="text-center font-semibold text-base ipad_pro:text-lg text-white">
        <form enctype="multipart/form-data"  @submit.prevent="updateParticipant">
            <div class="card bg-dark">

                <div class="card-header">
                    <h5 style="color:white;">Mise à jour Artiste</h5>
                </div>    

                <div class="card-body">   
                    <div class="row">
                        <div class="flex justify-center">
                            <div class="text-center">
                                <img class="preview img-fluid" :src="imageData"/>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="text-black">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Nom</span>
                                </div>
                                <input 
                                    class="form-control" placeholder="Nom de la personne"
                                    v-model="participant.nom"
                                    required />                    
                            </div>
                
                <div class="mt-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Photo</span>
                                </div>
                                <div class="flex justify-center flex-col items-center">
                                    <input type="file" class="custom-file-input" ref="file" id="file"
                                    @change="previewImage" 
                                    >
                                    <label class="custom-file-label" for="file">Sélectionner l'image</label>
                                </div>
                            </div>
                        </div>
                    </div>               
                </div>

                <div class="flex justify-center items-center flex-col my-4">   
                    <button type="submit" class="w-max text-white border rounded-full px-3 py-1 mx-3 mt-2 hover:bg-white hover:text-black" >
                        Modifier
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
 
 
    updateDoc, 
  
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

// Storage
import { 
    getStorage, 
    ref, 
    getDownloadURL, 
  
    uploadString,
    deleteObject,
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'


export default {
    name:'UpdateView',
    data() {
        return {
            imageData:null,        
            participant:{           
                nom:null,              
                prenom:null,            
                photo:null,            

            },

            refParticipant:null,     
            imgModifiee:false,      
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
                
                    this.imageData = url;
            })
            .catch((error) =>{
                console.log('erreur downloadUrl', error);
            })
        },


        previewImage: function(event) {
     
            this.file = this.$refs.file.files[0];
       
            this.participant.photo = this.file.name;
         
            this.imgModifiee = true;
        
            var input = event.target;
         
            if (input.files && input.files[0]) {
            
                var reader = new FileReader();
             
                reader.onload = (e) => {
                
                    this.imageData = e.target.result;
                }
              
                reader.readAsDataURL(input.files[0]);        
            }
        },

        async updateParticipant(){
           
            if(this.imgModifiee){
              
                const storage = getStorage();
              
                let docRef = ref(storage, 'artistes/'+this.photoActuelle);
              
                deleteObject(docRef);
              
                docRef = ref(storage, 'artistes/'+this.participant.photo);
                await uploadString(docRef, this.imageData, 'data_url').then((snapshot) => {
                    console.log('Uploaded a base64 string', this.participant.photo);                
                });                   
            }
          
            const firestore = getFirestore();
           
            await updateDoc(doc(firestore, "artistes", this.$route.params.id), this.participant);
      
            this.$router.push('/listeview');       
        }
    }

}
</script>

