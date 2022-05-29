import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import HeaderView from '../views/HeaderView.vue'
import ProgrammeView from '../views/ProgrammeView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import BarView from '../views/BarView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/', name: 'Header', component: HeaderView },
    { path: '/programme', name: 'Programme', component: ProgrammeView },
    { path: '/artistes', name: 'Artistes', component: ArtistesView },
    { path: '/bar', name: 'Bar', component: BarView },
    { path: '/contact', name: 'Contact', component: ContactView },
  ]
})

export default router
