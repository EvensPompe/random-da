import { Component, OnInit } from '@angular/core';
import { HasardServiceService } from '../hasard-service.service';

@Component({
  selector: 'app-modificateur',
  templateUrl: './modificateur.component.html',
  styleUrls: ['./modificateur.component.css']
})
export class ModificateurComponent implements OnInit {
  classes: string[];
  difficulties: string[];
  races: string[];
  subClassesGuerrier: string[];
  subClassesMage: string[];
  subClassesVoleur: string[];
  classRes: string;
  subClassRes: string;
  raceRes: string;
  difficultyRes: string;

  constructor(private data: HasardServiceService) {
    this.classes = ["Mage", "Voleur", "Guerrier"];
    this.subClassesGuerrier = ["Hérault", "Templier", "Psychomancien"];
    this.subClassesMage = ["Chevalier Enchanteur", "Nécromencien", "Mage des failles"];
    this.subClassesVoleur = ["Artificier", "Assassin", "Tempête"];
    this.races = ["Elfe", "Qunari", "Nain", "Humain"];
    this.difficulties = ["Facile", "Normal", "Difficile", "Cauchemar"];
    this.classRes;
    this.subClassRes;
    this.raceRes;
    this.difficultyRes;
  }

  private getSubClass(classRes: string) {
    let subValue: number = Math.floor(Math.random() * Math.floor(3));
    switch (classRes) {
      case "Mage":
        this.subClassRes = this.subClassesMage[subValue];
        break;

      case "Voleur":
        this.subClassRes = this.subClassesVoleur[subValue];
        break;

      case "Guerrier":
        this.subClassRes = this.subClassesGuerrier[subValue];
        break;

      default:
        break;
    }
  }

  private getRaces() {
    let racesValue: number = Math.floor(Math.random() * Math.floor(4));
    this.raceRes = this.races[racesValue];
  }

  private getDiff() {
    let diffValue: number = Math.floor(Math.random() * Math.floor(4));
    this.difficultyRes = this.difficulties[diffValue];
  }

  private getClass(value:number){
    this.classRes = this.classes[value];
    return this.classRes;
  }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.data.getValue() || this.data.getValue() === 0) {
      let classRes = this.getClass(this.data.getValue());
      this.getSubClass(classRes);
      this.getRaces();
      this.getDiff();
    }
  }

}
