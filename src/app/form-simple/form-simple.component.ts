import { Component } from '@angular/core';

@Component({
  selector: 'app-form-simple',
  templateUrl: './form-simple.component.html',
  styleUrls: ['./form-simple.component.css']
})
export class FormSimpleComponent {

onSubmit(form: any): void {
  console.log(`u have just submitted a piece of shit`, form);
}



}
