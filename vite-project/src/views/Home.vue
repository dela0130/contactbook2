<script>

import ContactList from '../components/ContactList.vue'
import NewContact from '../components/NewContact.vue'
export default {
  components: {
    ContactList,
    NewContact
  }  
  
}

</script>


<template>
    <div class="Home--container">
        <h1>Vue Contacts App</h1>
        
        <NewContact/>
        <ContactList/>
    </div>
</template>

