import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from '../model/phone';
import { PhoneService } from '../service/phone.service';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent {

  phone: Phone;

  constructor(private route: ActivatedRoute, private router: Router, private phoneService: PhoneService) {
    this.phone = new Phone();
  }

  onSubmit() {
    this.phoneService.save(this.phone).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/phones']);
  }

}
