<script>
    import { store } from '../store.js'
    export default {
        data() {
            return {
                store,
                filter: ""
            }
        },
        computed: {
            sortedByLast() {
                return store.contacts.sort((a,b) => (a.lastName > b.lastName) 
                ? 1 
                : ((b.lastName > a.lastName) ? -1 : 0))
            },

            filterList(){
                return this.sortedByLast.filter(contact => {
                    return contact.firstName.toLowerCase().includes(this.filter) 
                    || contact.lastName.toLowerCase().includes(this.filter)
                })
                
            }

        },

     
       
    }
</script>

<template>
    <div class="ContactList--container">
        <div class="ContactList--header">
            <h2>Contacts</h2>
            <label htmlFor="filter">Filter: </label>
            <input 
            v-model="filter"
             id="filter"
             
             />
        </div>
        
        <div class="ContactList--list">
            <router-link
            v-for="contact in filterList" 
            :key="contact.id"
            :to="{name: 'contact.details', params:{id: contact.id, slug: contact.slug} }"
            class="ContactList-link"
            >
            <div class="ContactList--item">{{contact.lastName}}, {{contact.firstName}}</div>
            
        </router-link>
        </div>
        

    </div>
    
</template>