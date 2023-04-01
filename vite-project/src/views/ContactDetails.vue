<script>
    import { store } from '../store.js'
    export default {
        data() {
            return {
                store,
                destroy: false,
                update: false,
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
            
            deleteContact(id) {
                this.destroy = !this.destroy
                store.storeDelete(id)
                store.updateStorage()
                this.$router.push("/")
            },
            updated() {
                this.update = true
            }
            
        },

        watch: {
            'displayContact.firstName'() {
                store.updateStorage()
                store.updateSlug(this.displayContact.id)
                this.updated()
            },

            'displayContact.lastName'() {
                store.updateStorage()
                store.updateSlug(this.displayContact.id)
                this.updated()
            },

            'displayContact.email'() {
                store.updateStorage()
                this.updated()
            },
        }
        
        
    }
</script>

<template>
    <div class="contactDetails--container" v-if="!destroy">
        
        <div class="contactDetails--details">
            <button class="contactDetails--delete" @click="deleteContact(displayContact.id)">Delete</button>
            <form class="contact-fields--form" >
                <div class="contactDetails--header">
                    <h2>Contact Details for {{displayContact.firstName}} {{displayContact.lastName}}</h2>
                    <p v-if="update" class="contactDetails--update">Changes saved✅</p>
                </div>
                <div>
                <label htmlFor="firstName">First Name: </label>
                <input 
                    v-model="displayContact.firstName"
                    id="firstName"
                    />
                    
                    
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input 
                    v-model="displayContact.lastName"
                    id="lastName"
                    />
                    
                </div>
                
                <div>
                    <label  htmlFor="email">Email: </label>
                    <input 
                        v-model="displayContact.email"
                        id="email"
                    />
                    
                </div>
                
            </form>
            
        </div>
        <router-link class="contactDetails--back" to="/">◀ Back Home</router-link>
    </div>
    
    
</template>