import { Component, OnInit } from '@angular/core';
import { Phone } from '../model/phone';
import { PhoneService } from '../service/phone.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  phones: Phone[] = [];

  constructor(private phoneService: PhoneService) {

  }

  ngOnInit() {
    this.phoneService.findAll().subscribe(data => {
      this.phones = data;
    });
  }

}
