const url = "https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json"

let datos;

fetch(url).then(res=>res.json()).then(res=>{

  datos = res
    $('#table1').bootstrapTable({
      data: datos,
      columns: [{
        title: '#'
      },{
        field: 'events',
        title: 'Events'
      }, {
        field: 'squirrel',
        title: 'Squirrel'
      }]
    })
    

  $(function() {
    var data = []
    for (let i = 0; i < datos.length; i++) {
      let eventos = datos[i]["events"]
      
      for (let j = 0; j < eventos.length; j++) {
       data.push(eventos[j]);
      }
    }
    console.log(data.events)
    $('#table2').bootstrapTable({data: data,
      columns: [{
        title: 'thjgfhjg' 
      }]
    })
  })

  })
  
  function runningFormatter(value, row, index) {
    return index;
}

function rowStyle(row, index) {
  if (row.squirrel) {
    return {
      classes: 'bg-red'
    }
  }
  return {
    css: {}
  }
}



