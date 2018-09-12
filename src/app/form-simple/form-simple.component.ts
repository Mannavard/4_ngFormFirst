import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-form-simple',
  templateUrl: './form-simple.component.html',
  styleUrls: ['./form-simple.component.css']
})
export class FormSimpleComponent {
  myForm: FormGroup;

  constructor(fg: FormBuilder) {
    this.myForm = fg.group({
      'push': ['Push The Kurwa']
    });
  }

onSubmit(form: any): void {
  console.log(`u have just submitted a piece of shit`, form);
}



}
