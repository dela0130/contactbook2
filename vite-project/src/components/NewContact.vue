<script>
    import { store } from '../store.js'
    export default {
        data() {
            return {
                store,
                newFirst: '',
                newLast: '',
                newEmail: '',
                newSlug:'',
                add: false,
                
            }
        },
        
        methods: {
               
            addContact(f,l,e) {
                store.storeNew(f,l,e)
                this.newFirst = ''
                this.newLast = ''
                this.newEmail = ''
                store.updateStorage()
                this.$refs.fNameField.focus()
            },
            toggleAdd() {
                this.add = !this.add
            },
                  
        },        
    }
</script>

<template>
    <div>
        <button class="contact-fields--add" @click="toggleAdd" v-if="!add">Add new contact</button>
        <form 
            v-if="add"
            @submit.prevent="addContact(
                newFirst,
                newLast,
                newEmail
                )" 
            class="contact-fields--form"
        >
        <div 
            @click="toggleAdd"
            class="contact-fields--form--close"
        >🗙</div>
        <h2>
            Add new contact
        </h2>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input 
                v-model="newFirst" 
                id="firstName" 
                type="text"
                ref="fNameField"
                >
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input v-model="newLast" id="lastName" type="text">
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input v-model="newEmail" id="email" type="email">
            </div>
            <button
                :disabled="newFirst.length === 0"
            >Submit</button>
        </form>
    </div>
    
    
</template>