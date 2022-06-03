<template>
    <div class="text-center font-semibold text-base ipad_pro:text-lg">
        <form enctype="multipart/form-data" 
            @submit.prevent="createParticipant"
        >
            <div class="card bg-dark">

                <div class="card-header">
                    <h5 style="color:white;">Création d'un Artiste</h5>
                </div>    

                <div class="card-body">   
                    <div class="row">
                        <div class="col-6">
                            <div>
                                <img class="preview img-fluid" :src="imageData"/>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class=" text-center font-semibold text-base ipad_pro:text-lg">
                                <div class="input-group-prepend">
                                    <span class="" >Nom</span>
                                </div>
                                <input 
                                    class="form-control" placeholder="Nom de la personne"
                                    v-model="participant.nom"
                                    required />                    
                            </div>

                            <div class="flex justify-center flex-col items-center">
                                <div class="">
                                    <span class="text-white text-center font-semibold text-base ipad_pro:text-lg">Photo</span>
                                </div>
                                <div class="text-white text-center font-semibold text-base ipad_pro:text-lg flex justify-center flex-col items-center">
                                    <input type="file" class="custom-file-input" ref="file" id="file" 
                                    @change="previewImage"
                                    >
                                    <label class="custom-file-label" for="file">Sélectionner l'image</label>
                                </div>
                            </div>
                
                        </div>
                    </div>               
                </div>

                <div class="text-white text-center font-semibold text-base ipad_pro:text-lg"> 
                    <div class="flex flex-col justify-center items-center">  
                        <button type="submit" class="w-max text-white border rounded-full px-3 py-1 mx-3 mt-2 hover:bg-white hover:text-black">
                            Créer
                        </button>
                        <button class="w-max text-white border rounded-full px-3 py-1 mx-3 mt-2 hover:bg-white hover:text-black" >
                            <router-link to="/listeview" >Annuler</router-link>
                        </button>
                    </div>
                </div>

            </div>
        </form>        
    </div>
</template>

<script>

import { 
    getFirestore,   
    collection,     
    addDoc,         

    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


    
    import { 
        getStorage,             
        ref,                    
     
        uploadString,           
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

 
export default {
    name:'CreateView',
    data() {
        return {
            imageData:null,         
    
            participant:{           
                nom:null,               
                prenom:null,            
                photo:null,             
            }
        }
    },
  
    methods : {

        previewImage: function(event) {
            
            this.file = this.$refs.file.files[0];

            this.participant.photo = this.file.name;
          
        
            var input = event.target;
         
            if (input.files && input.files[0]) {
           
                var reader = new FileReader();
               
                reader.onload = (e) => {
                  
                    this.imageData = e.target.result;
                }
                 
                reader.readAsDataURL(input.files[0]);        
            }
        },

        async createParticipant(){
           
            const storage = getStorage();
            
            const refStorage = ref(storage, 'artistes/'+this.participant.photo);
           
            await uploadString(refStorage, this.imageData, 'data_url').then((snapshot) => {
                console.log('Uploaded a base64 string');
                
               
                const db = getFirestore();
                const docRef = addDoc(collection(db, 'artistes'), this.participant );
            });
            
            this.$router.push('/listeview');            
        }
    }

}
</script>


