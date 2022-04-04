import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-clima',
  templateUrl: './tabla-clima.component.html',
  styleUrls: ['./tabla-clima.component.scss']
})
export class TablaClimaComponent implements OnInit {

  activeId = 1;
  celsius = 1;
  idid = 1;

  clima=[{
    "id": 1, // Valparaiso
    "nombre":"Valparaiso",
    "clima":[
      {
       "dia":1,
       "nombre":"Lunes",
       "temp":18,
       "tipo":"Soleado",
       "idtipo":1
       },
       {"dia":2,
       "nombre":"Martes",
       "temp":9,
       "tipo":"Lluvioso",
       "idtipo":2 
       },
       {"dia":3,
       "nombre":"Miercoles",
       "temp":11,
       "tipo":"Nublado",
       "idtipo":4
       },
       {"dia":4,
       "nombre":"Jueves",
       "temp":7,
       "tipo":"Tormenta",
       "idtipo":3
       },
       {"dia":5,
       "nombre":"Viernes",
       "temp":22,
       "tipo":"Soleado",
       "idtipo":1
       },
       {"dia":6,
       "nombre":"Sabado",
       "temp":10,
       "tipo":"Lluvioso",
       "idtipo":2
       },
       {"dia":7,
       "nombre":"Domingo",
       "temp":7,
       "tipo":"Tormenta",
       "idtipo":3
       }]},
      {
    "id": 2, //metropolitana
    "nombre":"Metropolitana",
    "clima":[{
      "dia":1,
      "nombre":"Lunes",
      "temp":18,
      "tipo":"Soleado",
      "idtipo":1
      },
      {"dia":2,
      "nombre":"Martes",
      "temp":9,
      "tipo":"Lluvioso",
      "idtipo":2 
      },
      {"dia":3,
      "nombre":"Miercoles",
      "temp":11,
      "tipo":"Nublado",
      "idtipo":4
      },
      {"dia":4,
      "nombre":"Jueves",
      "temp":7,
      "tipo":"Tormenta",
      "idtipo":3
      },
      {"dia":5,
      "nombre":"Viernes",
      "temp":22,
      "tipo":"Soleado",
      "idtipo":1
      },
      {"dia":6,
      "nombre":"Sabado",
      "temp":10,
      "tipo":"Lluvioso",
      "idtipo":2
      },
      {"dia":7,
      "nombre":"Domingo",
      "temp":7,
      "tipo":"Tormenta",
      "idtipo":3
      }]
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
