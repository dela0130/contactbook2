import { reactive } from 'vue'
let id = 0



function slugify(text){
  //From https://github.com/KABBOUCHI/vue-slugify/blob/master/vue-slugify.js
  return text.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/--+/g, '-'); // Replace multiple - with single -
  }

export const store = reactive({
   
    contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    storeNew(f, l, e) {
      this.contacts.push({ 
        id: this.contacts.length + 1, 
        firstName: f, 
        lastName: l, 
        email: e,
        slug: `${slugify(f)}-${slugify(l)}`
      }) 
      
    },
    
    storeDelete(id) {
      this.contacts = this.contacts.filter(contact => contact.id !== id)
      for(let i=0; i < store.contacts.length; i++) {
        
        store.contacts[i].id = i+1 
      }
    },
    updateSlug(id) {
      this.contacts = this.contacts.map(contact=> contact.id === id 
        ? {...contact, slug: `${slugify(contact.firstName)}-${slugify(contact.lastName)}`} 
        : contact)
    },

    updateStorage(){
      localStorage.setItem('contacts',JSON.stringify(store.contacts))
    }
  }
)
