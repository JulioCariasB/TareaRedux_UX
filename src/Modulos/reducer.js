importar  ACCIONES  desde  " ./action " ;
importar  _  de  " lodash " ;

const  defaultState  = {
  artículos : []
};

const  todoReducer  = ( estado  =  defaultState , action ) => {
  interruptor ( acción . tipo ) {
    caso  ACCIONES . Tipos . CREATE_ITEM : {
      consola . log (acción);

      dejar item =  action . de carga útil ;
      deja newItem = {id :  state . artículos .longitud  +  1 , descripción : artículo};
      dejar newState =  _ . cloneDeep (estado);
      newState . artículos . push (newItem);
      volver newState;
    }

    caso  ACCIONES . Tipos . DELETE_ITEM : {
      deja newState = _ . cloneDeep (estado);
      vamos índice =  _ . findIndex ( newState . items , {id :  action . payload });
      newState . artículos . empalme (índice, 1 );
      volver newState;
    }

    por defecto :
      estado de retorno
  }
};

exportación  predeterminado  todoReducer ;