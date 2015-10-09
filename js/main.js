console.log("ya estoy listo qcsm :)");
var prueba='((000|101)(000|010|101|111)|(010|111)(001|011|100))';
var salidas=[];
estadosIntermedios(prueba);
var salidasTotales=[];//para revisar las salidas de cada nodo [i][j] nodo i, nodo j
separacion(prueba);
limpiar(salidasTotales);
var exp,inicioDato,finDato,dato,parentesis;//exp=expresion regular.
$('#button').click(function(){
  exp=$('#datos').val();
  separacion(exp);
  console.log(exp);
})
function estadosIntermedios(texto)
{
  console.log('funcion separacion');
  console.log(texto);
  var texoTemporal=texto;
  if(texoTemporal.indexOf(')|(')==texoTemporal.lastIndexOf(')|('))
  {
    salidas[0]=texoTemporal.slice(0,texoTemporal.indexOf(')|(')+1);
    salidas[1]=texoTemporal.slice(texoTemporal.indexOf(')|(')+2,texoTemporal.length);
    console.log('2 estados intermedios');
  }
  else {
    var timp=0;
    for (var i = 0; texoTemporal.indexOf(')|(')!=-1; i++) {
      var ini=texoTemporal.indexOf(')|(');
      var fin=texoTemporal.length;
      salidas[i]=texoTemporal.slice(timp,ini+1);
      timp=ini+2;
      texoTemporal=texoTemporal.slice(ini+2,fin);
    }
    console.log(i+1+' estados intermedios');
  }
  //inicioDato=texto.slice()
}
function separacion(texto)
{

  for (var i = 0;i < salidas.length ; i++) {
    var texoTemporal=salidas[i];
    salidasTotales[i]=[];
    if(texoTemporal.indexOf(')(')==texoTemporal.lastIndexOf(')('))
    {
      salidasTotales[i][0]=texoTemporal.slice(0,texoTemporal.indexOf(')(')+1);
      salidasTotales[i][1]=texoTemporal.slice(texoTemporal.indexOf(')(')+1,texoTemporal.length);
      console.log('numero de saltos = 2');
    }
    else {
      var timp=0;
      for (var j = 0; texoTemporal.indexOf(')(')!=-1; j++) {
        var ini=texoTemporal.indexOf(')(');
        var fin=texoTemporal.length;
        salidasTotales[i][j]=texoTemporal.slice(timp,ini+1);
        console.log('salidasTotales posicion' +'['+i+']'+'['+j+']= '+ texoTemporal.slice(timp,ini+1));
        timp=ini+1;
        texoTemporal=texoTemporal.slice(ini+1,fin);
      }
    }
  }
}
function limpiar(a)
{
  for (var i = 0; i < (salidasTotales.length); i++) {
    for (var j = 0; j < salidasTotales[i].length; j++) {
      salidasTotales[i][j]=salidasTotales[i][j].split('|').join(',');
      salidasTotales[i][j]=salidasTotales[i][j].split('(').join('');
      salidasTotales[i][j]=salidasTotales[i][j].split(')').join('');
    }
  }

}
