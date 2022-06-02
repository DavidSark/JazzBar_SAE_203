
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsGa7TA4HJ4LOqqplFHbPpGU6D2eiDIqY",
    authDomain: "sae203-4bd1c.firebaseapp.com",
    projectId: "sae203-4bd1c",
    storageBucket: "sae203-4bd1c.appspot.com",
    messagingSenderId: "979648665736",
    appId: "1:979648665736:web:e37048b68a25f1e941673d"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')


