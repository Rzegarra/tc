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

var nodos=[];
var q0Primas=[];
var entradas=[];
var abecedario=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','S','U','V','W','X','Y','Z'];
var matrizABC=[];
var salidas=[]
var moore=[];
var obj1={source:'q1',
          target:'q1',
          type:0};
var links=[];

function crearMatrizABC(){
  var help=1;
  for (var i = 1; obj[i][0]!='q0.*'; i++) {
    help++;
  }
  estados(obj);
  for(var i=0; i<nodos.length;i++){
    matrizABC[i]=[];
  }  
  matrizABC[0]=obj[0];
  for(var i=help, j=1; i<obj.length;i++, j++){
    matrizABC[j]=obj[i];
  }
  //console.log('esto es el help'+help);
}

function cambiarMatriz (matrizABC) {
  matrizABC[1][0]=abecedario[0];
  for (var i=0;i<nodos.length;i++){
    for(var j=0;j<matrizABC.length;j++){
      for(var k=0; k<matrizABC[1].length; k++){
        if (matrizABC[j][k]==nodos[i+1]) {
          matrizABC[j][k]=abecedario[i+1];
        }
      }
    }
  }
  for (var i=0;i<q0Primas.length;i++){
    for(var j=0;j<matrizABC.length;j++){
      for(var k=0; k<matrizABC[1].length; k++){
        if (matrizABC[j][k]==q0Primas[i]) {
          matrizABC[j][k]='A';
        }
      }
    }
  }

}

function estados(obj) {
  var help=1;
  var help2=1;
  for (var i = 1; obj[i][0]!='q0.*'; i++) {
    help++;
  }
  console.log(help);
  for (var i=1;help<obj.length;help++){
    nodos[i-1]=obj[help][0];
    i++;
  }
  for (var i = 1; obj[i][0]!='q0.*'; i++) {
    help2++;
  }
  for (var i=1;i<help2;i++){
    q0Primas[i-1]=obj[i][0];
  }
  for(var i=1; i<obj[0].length-1;i++){
    entradas[i-1]=obj[0][i];
  }
  for(var i=1; i<help2; i++){
    salidas[i-1]=obj[i][4];
  }
  //var temp=0;
  var tem_obj={};
  for (var i=help2; i<obj.length; i++){
    for(var j=0; j<obj[0].length-2;j++){
      //console.log('esto es el i: '+i+' esto es el j: '+j);
      // obj1.target=obj[i][0];
      // obj1.source=obj[i][j+1];
      // obj1.type=obj[0][j+1]
      // console.log(obj1);
      //tem_obj=obj1;
      links.push({target:obj[i][0],
                  source:obj[i][j+1],
                  type:obj[0][j+1]
                  });
      console.log(links);
      //temp++;
      //console.log(temp);
    }
  }

  //console.log(help);

}

$(convertir).on('click',function(evento){
  estados(obj);
  //crearMatrizABC();
  //cambiarMatriz(matrizABC);
  console.log(q0Primas);
  console.log(abecedario);
  console.log(nodos);
  console.log(entradas);
  //console.log(matrizABC);
  console.log(salidas);
  console.log(moore);

  alert('csm profe y la asdasdsa')
});

$(addCol).on('click',function(event){
  alert('agregando col')
})
