import { Component, OnInit } from '@angular/core';
import {LabsService} from "../labs.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-labs-list',
  templateUrl: './labs-list.component.html',
  styleUrls: ['./labs-list.component.css']
})
export class LabsListComponent implements OnInit {


  laboratorios: Array<any> = [];

  constructor(private labsService: LabsService, private router: Router) { }

  ngOnInit() {
    this.labsService.getLabs().subscribe((data: Array<any>) => {
      data.forEach(lab => {
        this.laboratorios.push(lab);
      });

    })
  }

  add() {
    this.router.navigate(['/labs/new_record']);
  }
  editar(lab_id) {
    console.log(lab_id);
    this.router.navigate([`/labs/${lab_id}`])
  }

  remover(lab_id) {
    this.labsService.removeLabs(lab_id);
  }

  gerarImg() {
    return  `https://picsum.photos/1366/500?random&t=${Math.random()}`;
  }
}
