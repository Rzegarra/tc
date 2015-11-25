var obj=[[' ',  0.05,  0.1,   0.25,  'salida'],
        ['q0.1','q1',  'q2',  'q0.2',  20],
        ['q0.2','q1',  'q2',  'q0.2',  25],
        ['q0.3','q1',  'q2',  'q0.2',  30],
        ['q0.4','q1',  'q2',  'q0.2',  35],
        ['q0.5','q1',  'q2',  'q0.2',  40],
        //----------------------------------------
        ['q0.*','q1',  'q2',  'q0.2','-'],
        ['q1',  'q2',  'q3',  'q0.3','-'],
        ['q2',  'q3',  'q0.1','q0.4','-'],
        ['q3',  'q0.1','q0.2','q0.5','-']];

//glc();
var nodos=[];
var datos = [];
var q0Primas=[];
var obj1=[];
var abecedario=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','S','U','V','W','X','Y','Z'];
  estados(obj);
   glc();

function glc(){
  estados(obj);
  console.log('****************'+nodos.length)
  for(var i=0;i<nodos.length;i++){
    obj1[i]=[];
  }
  for (var i=0; i<nodos.length;i++){
    for (var j=0; j<nodos.length;j++){
      obj1[i][j]='asd';
      
    }
  }
}
//console.log(obj1);

function estados(obj) {
  var help=1;
  var help2=1;
  for (var i = 1; obj[i][0]!='q0.*'; i++) {
    help++;
  }
  for (var i=1;help<obj.length;help++){
    nodos[i-1]=obj[help][0];
    i++;
  }
  for (var i = 1; obj[i][0]!='q0.*'; i++) {
    help2++;
  }
  //console.log(help2);
  for (var i=1;i<help2;i++){
    q0Primas[i-1]=obj[i][0];
  }
  console.log('valor de help: '+ help);
  console.log(q0Primas);
  console.log(abecedario);
  //estados(obj);
  console.log('cantidad de estados: '+ nodos.length);
  console.log(nodos);
  var rows=$('tr').length;
  console.log('tamaño de filas = '+ rows);
  var columns=$('tr:first td').length;
  console.log('tamaño de columnas = '+ columns);
  for (var i = 0;i < columns; i++) {
    datos[i]=[];
  }
  // datos[0][0]=1
  // datos[0][2]=2
  // datos[0][3]=3
  // datos[1][1]=1

  var a=$(dato);
  var temp=0;
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
      datos[i][j]=$(dato).eq(temp).val();
      temp++;
    }
  }
  console.log(datos[0][0]);
}

$(convertir).on('click',function(evento){
 
});
$(addCol).on('click',function(event){
  alert('agregando col')
})
