import { createApp } from 'vue'
// import App from "./App.vue"
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import FriendFrom from './components/NewFriend.vue';
import ProvideTest from './components/ProvideTest.vue';

const app = createApp(App)

app.component('provide-test', ProvideTest)
app.component('friend-add-form', FriendFrom)
app.component('friend-contact', FriendContact)

app.mount('#app')
