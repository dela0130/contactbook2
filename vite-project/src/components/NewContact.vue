<script>
    import { store } from '../store.js'
    export default {
        data() {
            return {
                store,
                newFirst: '',
                newLast: '',
                newEmail: '',
                newSlug:''
            }
        },
        methods: {
            addContact(f,l,e) {
                store.storeNew(f,l,e)
                this.newFirst = ''
                this.newLast = ''
                this.newEmail = ''
                localStorage.setItem('contacts',JSON.stringify(store.contacts))
            },
            
           
        },
        


    }
</script>

<template>
    <div>
        <h2>
            Add new contact
        </h2>
        <form 
        @submit.prevent="addContact(
            newFirst,
            newLast,
            newEmail
            )" 
        class="contact-fields--form">
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input v-model="newFirst" id="firstName" type="text">
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input v-model="newLast" id="lastName" type="text">
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input v-model="newEmail" id="email" type="email">
            </div>
            <button>Submit</button>
        </form>
    </div>
    
    
</template>