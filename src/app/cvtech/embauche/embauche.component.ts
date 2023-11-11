import { Component } from '@angular/core';
import {EmbaucherService} from "../embaucher.service";
import {Person} from "../../Model/Person";

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {
  constructor(private embaucheservice : EmbaucherService) {
  }
  personnes : Person [] = this.embaucheservice.getPersonnes();

  debaucher(item : Person){
    this.embaucheservice.debaucherPersonne(item);
  }
}
