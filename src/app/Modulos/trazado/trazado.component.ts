import {Component, OnInit, ViewChild} from '@angular/core';
import {CargarScriptsService} from "./cargar-scripts.service";

@Component({
  selector: 'app-trazado',
  templateUrl: './trazado.component.html',
  styleUrls: ['./trazado.component.css']
})
export class TrazadoComponent implements OnInit {
  constructor( private  _CargarScripts:CargarScriptsService)
  {
    _CargarScripts.Carga(["app"]);
  }

  ngOnInit(): void {
  }

}
