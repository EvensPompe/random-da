import { Component, OnInit } from '@angular/core';
import { HasardServiceService } from '../hasard-service.service';

@Component({
  selector: 'app-bouton-hasard',
  templateUrl: './bouton-hasard.component.html',
  styleUrls: ['./bouton-hasard.component.css']
})
export class BoutonHasardComponent implements OnInit {

  value: any;
  constructor(private data:HasardServiceService) { }

  ngOnInit() {
  }

  startHasard() {
    this.value = Math.floor(Math.random() * Math.floor(3));
    this.data.setValue(this.value)
  }

}
