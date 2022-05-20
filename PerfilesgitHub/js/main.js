const API = "https://api.github.com/users/";



const app = Vue.createApp({
    data() {
        return {
          message: 'Bienvenido!',
          busqueda: null,
          result: null
        }
      },
    //La palabra de function ya no es necesario ya que se usa en motodo
    methods: {
      async Buscar(){
        const response = await fetch(API + this.busqueda)
        const data = await response.json()
        console.log(data)
        this.result = true
    }
    },
})   
Buscar();                                           

