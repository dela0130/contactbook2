<script>
import ContactDetails from './views/ContactDetails.vue'
import ContactList from './components/ContactList.vue'
import NewContact from './components/NewContact.vue'
export default {
  components: {
    ContactDetails,
    ContactList,
    NewContact
  }
  
}

</script>

<template>
  <router-view></router-view>
</template>


