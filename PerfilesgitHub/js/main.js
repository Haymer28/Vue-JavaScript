const API = "https://api.github.com/users/";



const app = Vue.createApp({
    data() {
        return {
          message: 'Bienvenido!',
          busqueda: null,
          result: null,
          error: null,
          favoritos: new Map() 
        }
      },
      created(){
        const FavoritoGuardados = JSON.parse(window.localStorage.getItem("misfavoritos"))
        if(FavoritoGuardados.lenght){

          //const favoritosnew = 

        }
      },
    //La palabra de function ya no es necesario ya que se usa en motodo
    computed:{
      //Queremos saber si el usuario esta en favorito
      estaFavoritos(){
      return this.favoritos.has(this.result.id)
      },

      TodosFavoritos(){
        return Array.from(this.favoritos.values())
        //El metodo value trera todos los valores sin las claves
      
      }
    },

    methods: {
      async buscar() {
          //depende del error
          this.result = this.error = null
          try {
              const response = await fetch(API + this.busqueda)
              if (!response.ok) throw new Error("Usuario no encontrado")
              //console.log(response)
              //ahora quiero traer la info en formato json
              const data = await response.json()
              console.log(data)
              this.result = data //cambiar true por data
          } catch (error) {
              this.error = error
              //tan pronto termina el proceso, limpia haciendo vacia la busqueda
          } finally {
              this.busqueda = null
          }
      }, //
            addFavorito(){
              this.favoritos.set(this.result.id, this.result)
              this.actualizarEstorage()
      },
            removeFavorito(){
            this.favoritos.delete(this.result.id)
            this.actualizarEstorage()
      },
            actualizarEstorage(){
              window.localStorage.setItem('misfavoritos', JSON.stringify(this.TodosFavoritos))
            }
  }
})