<script>

import ContactList from '../components/ContactList.vue'
import NewContact from '../components/NewContact.vue'
export default {
  components: {
    ContactList,
    NewContact
  },
  data() {
    return {
        add: false,
        buttonTxt: 'Add new contact'

    }
  },
  methods: {
    toggle() {
        this.add = !this.add
        this.buttonTxt = this.add ? 'Close' : 'Add new contact'
    },
    
  }
  
}

</script>


<template>
    <div>
        <h1>Home</h1>
        <button @click="toggle">{{buttonTxt}}</button>
        <div v-if="add"><NewContact/></div>
        <div><ContactList/></div>
    </div>
</template>

