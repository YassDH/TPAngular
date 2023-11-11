import {Injectable} from '@angular/core';
import {Person} from "../Model/Person";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes : Observable<Person[]> = new Observable<Person[]>()
  private fakepersonnes: Person [] = [
    new Person(1,"soussi","zakaria",22,"me.jpg",11111,"Tennis Player"),
    new Person(2,"ben Salha","mahdi",15,"mahdi.jpg",12221,"Money Collector"),
    new Person(3,"yousfi","wissem",34,"wissem.jpg",23334,"Gamer"),
    new Person(4,"dhaoudi","yassine",30,"",33224,"Hacker"),
  ]
  constructor(private http: HttpClient) { }

  // getPersonnes():Observable<Person[]>{
  //   this.personnes =  this.http.get<Person[]>('https://apilb.tridevs.net/api/personnes')
  //   return this.personnes
  // }
  // setterPersonnes(item : Person[]){
  //   this.personnes = item;
  //   console.log(this.personnes)
  // }
  // getFakePersonnes() : Person[] {
  //   return this.fakepersonnes;
  // }

  // getPersonneById(id : number):any {
  //   return this.personnes.find((person) => {
  //     return person.id == id
  //   });
  // }
  // addPersonne(personne : Person){
  //   personne.id = this.personnes.length + 1;
  //   this.personnes.push(personne);
  // }

  // deletePersonne(item : Person){
  //   let index = this.personnes.indexOf(item);
  //   this.personnes.splice(index,1);
  // }
}
