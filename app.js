

let autos = require('./autos');

const concesionaria = {
    autos: autos ,
       buscarAuto : function (patente) {
        let autoSegunPatente = null
        this.autos.forEach(auto => {
            if(auto.patente === patente){
                autoSegunPatente = auto}})
                 
        return autoSegunPatente },

       
     
      venderAuto: function (patente) {
        const auto = this.buscarAuto(patente);
        if (auto) {
          auto.vendido = true;
        }
        return auto 
    },
    autosParaLaVenta: function(autos){
        return autos = this.autos.filter(function (autos){
               return autos.vendido===false;
            })
     }, 
     autosNuevos: function (autos){
       const autoEnVenta = this.autosParaLaVenta(autos)
       let autosN = autoEnVenta.filter(function(autos){return autos.km < 100}
       )
       return autosN
     } ,
   
  listaDeVentas: function (){
     let autos = this.autos
     const vendidos = []
      
          autos.forEach(function(autos){
     if (autos.vendido === true){ vendidos.push(autos.precio)}
     })

     return vendidos },
     totalDeVentas: function () {
        let autosVendidos = this.listaDeVentas()
        if ( autosVendidos > 0) {
          return (autosVendidos.reduce(function(acumulador,otroArray)
        {return acumulador + otroArray }))}
        else {return 0}

     },


    puedeComprar: function (auto, persona) {
         if (auto.precio > persona.capacidadDePagoTotal) { 
          return false;
        }
        let precioPorCuota = auto.precio /  12 
        if (precioPorCuota > persona.capacidadDePagoEnCuotas) {
          return false;
        }
        return true;
     },
        autosQuePuedeComprar: function (persona){
      let estanDisponibles = this.autosParaLaVenta()
      let puedeComprar = this.puedeComprar(estanDisponibles, persona)
      return estanDisponibles.filter(function (auto)
      {return persona.capacidadDePagoTotal >= auto.precio && 
        persona.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas)}
        
        )
      
      }
      
      }