const API = "https://api.github.com/users/";

async function Buscar(){
    const response = await fetch(API + 'Haymer28')
    const data = await response.json()
    console.log(data)
}

const app = Vue.createApp({
    data() {
        return {
          message: 'Bienvenido!'
        }
      }
})                                              //.mount('#app') //montamos esta información en el html o en el div app