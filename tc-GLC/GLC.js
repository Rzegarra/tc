var M_glc=[['A', '4B' ,  '5D', '2E' ,'1A'],
           ['B','0A',  '--',  '--',  '--'],
           ['C','3A',  '4B',  '0F',  '--'],
           ['D','1E',  '1F',  '4F',  '--'],
           ['E','2D',  '2E',  '0C',  '--'],
           ['F','3A',  '3B',  '--',  '--'],];
        //----------------------------------------
//        ['q0.*','q1',  'q2',  'q0.2','-'],
//        ['q1',  'q2',  'q3',  'q0.3','-'],
//        ['q2',  'q3',  'q0.1','q0.4','-'],
//        ['q3',  'q0.1','q0.2','q0.5','-']];

var S_states=[];
var datos = [];
var q0Primas=[];

function Get_States(M_glc) {
	
  var t_run_col=1;
  var t_run_row=1;
  var t_states;

  for (var i = 0; i<M_glc.length ; i++) {

      t_states = M_glc[i][0];
      S_states += t_states; 
      t_run_col = i;
  }

  console.log('cantidad de estados : '+ t_run_col);
  //estados(obj);
  console.log( S_states );

}

$(convertir).on('click',function(evento){
  Get_States(M_glc);
});
$(addCol).on('click',function(event){
  alert('agregando col')
})
 