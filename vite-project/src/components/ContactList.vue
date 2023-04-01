<script>
    import { store } from '../store.js'
    export default {
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <div>
        <h2>Contact List</h2>
        <router-link
            v-for="contact in store.contacts" 
            :key="contact.id"
            :to="{name: 'contact.details', params:{id: contact.id, slug: contact.slug} }"
            >
            <div>{{contact.firstName}}  {{contact.lastName}}</div>
            
        </router-link>

    </div>
    
</template>