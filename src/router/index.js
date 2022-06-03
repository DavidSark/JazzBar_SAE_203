import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgrammeView from '../views/ProgrammeView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import BarView from '../views/BarView.vue'
import ContactView from '../views/ContactView.vue'
import ConcertView from '../views/ConcertView.vue'
import ArtisteView from '../views/ArtisteView.vue'
import MentionsView from '../views/MentionsView.vue'
import MenuView from '../components/MenuView.vue'
import ErreurView from '../views/ErreurView.vue'
import ListeView from '../views/Artistes/ListeView.vue'
import CreateView from '../views/Artistes/CreateView.vue'
import UpdateParticipant from '../views/Artistes/UpdateParticipant.vue'
import DeleteParticipant from '../views/Artistes/DeleteParticipant.vue'
import StyleGuideView from '../views/StyleGuideView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/programme', name: 'Programme', component: ProgrammeView },
    { path: '/artistes', name: 'Artistes', component: ArtistesView },
    { path: '/bar', name: 'Bar', component: BarView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/concert', name: 'Concert', component: ConcertView },
    { path: '/artiste', name: 'Artiste', component: ArtisteView },
    { path: '/mentions', name: 'Mentions', component: MentionsView },
    { path: '/menu', name: 'Menu', component: MenuView },
    { path: '/:pathMatch(.*)*', name: 'Erreur', component: ErreurView },
    { path: '/listeview', name: 'Liste', component: ListeView },
    { path: '/create', name: 'Création', component: CreateView },
    { path: '/updateParticipant/:id', name: 'UpdateParticipant', component: UpdateParticipant },
    { path: '/deleteParticipant/:id', name: 'DeleteParticipant', component: DeleteParticipant },
    { path: '/style-guide', name: 'StyleGuide', component: StyleGuideView },





  ]
})

export default router
