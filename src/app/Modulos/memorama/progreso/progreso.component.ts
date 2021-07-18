import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.css']
})

export class ProgresoComponent implements OnInit {

  email = '';
  exp = 0;
  game;
  intentos = 0;

  constructor(
    private activaRuta: ActivatedRoute,
    private usuarioSvc: UsuarioService
  ) { }

  ngOnInit(): void {
    this.activaRuta.params.subscribe(({ user }) => {
      this.usuarioSvc.getUsuarioChanges().subscribe(e => {
        e.map(a => {
          if (user === a.email) {
            this.email = a.email;
            this.exp = a.exp;
            this.game = a.game;
          }
        })
      })
    });

    setTimeout(() => {
      this.loadChartUser("chartUser");
      this.loadChartTime("chartTiempo");
      this.loadChartBar("chatbar");
      this.intentos = this.game.length;
    }, 2000);
  }

  loadChartUser(ctx: string) {
    //contruir lebels y datas
    var labels: string[] = [];
    var data = [];
    this.game.forEach(stats => {
      labels.push(stats.level);
      data.push(stats.exp);
    });

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: "Experiencia por nivel",
          data: data,
          fill: true,
          borderColor: 'rgb(75, 192, 255)',
          tension: 0.1
        }]
      },
    });
  }

  loadChartTime(ctx: string) {
    //contruir lebels y datas
    var labels: string[] = [];
    var data = [];
    this.game.forEach(stats => {
      labels.push(stats.level);
      data.push(stats.time);
    });

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: "Experiencia por nivel",
          data: data,
          fill: true,
          borderColor: 'rgb(75, 255, 192)',
          tension: 0.1
        }]
      },
    });
  }

  loadChartBar(ctx: string) {
    //contruir lebels y datas
    var labels: string[] = ['Numeros', 'Letras'];
    var data = [];
    var num = 0;
    this.game.forEach(stats => {
      if(stats.type === 'numeros'){
        num += 1;
      }
    });
    data.push(num);
    data.push(this.game.length- num);

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: "Experiencia por nivel",
          data: data,
          borderColor: 'rgb(75, 192, 192)',
        }]
      }
    });
  }
}
