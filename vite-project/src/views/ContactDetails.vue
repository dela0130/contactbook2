<script>
    import { store } from '../store.js'
    export default {
        data() {
            return {
                store,
                destroy: false,
            }
        },

        computed:{
            detailsPageId() {
                return parseInt(this.$route.params.id)
            },
            displayContact() {
                return store.contacts.find(cont => cont.id === this.detailsPageId)
            }
        },

        methods:{
            currentContact() {
                return store.contacts.filter(contact => {
                    return contact.id === this.detailsPageId
                })
            },
            modifyContact(f,l,e,id) {
                store.storeUpdate(f, l, e, id)
                localStorage.setItem('contacts',JSON.stringify(store.contacts))
            },
            deleteContact(id) {
                this.destroy = !this.destroy
                store.storeDelete(id)
                localStorage.setItem('contacts',JSON.stringify(store.contacts))
                this.$router.push("/")
            }
        }
    }
</script>

<template>
    <div v-if="!destroy">
        <router-link to="/">Back Home</router-link>
    <h2>Contact Details for {{displayContact.firstName}} {{displayContact.lastName}}</h2>
    <form
    @submit.prevent="modifyContact(
        currentContact()[0].firstName, 
        currentContact()[0].lastName, 
        currentContact()[0].email, 
        currentContact()[0].id)">
        <div>
        <label htmlFor="firstName">First Name: </label>
        <input 
            v-model="currentContact()[0].firstName"
            id="firstName"
        />
        </div>
        <div>
            <label htmlFor="lastName">Last Name: </label>
            <input 
            v-model="currentContact()[0].lastName"
            id="lastName"
        />
        </div>
        
        <div>
            <label htmlFor="email">Email: </label>
            <input 
                v-model="currentContact()[0].email"
                id="email"
            />
        </div>
        <button>
            Edit
        </button>
    </form>
    <button @click="deleteContact(currentContact()[0].id)">Delete</button>
    </div>
    
    
</template>