import { TestService } from 'src/api/test.service';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


/** @title Responsive sidenav */
@Component({
  selector: 'app-contact',
  templateUrl: 'app-contact.component.html',
  styleUrls: ['app-contact.component.scss'],
})
export class AppContactComponent implements OnInit, OnDestroy {


  contactFormGroup: FormGroup = new FormGroup ({
    email: new FormControl('', [Validators.email, Validators.required]),
    name: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  });

  email;
  name;
  content;

  constructor( private testService: TestService,
               private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.email = this.contactFormGroup.get('email');
    this.name = this.contactFormGroup.get('name');
    this.content = this.contactFormGroup.get('content');


  }

  getErrorMessage(tartgetError) {
    if (tartgetError === 'email') {
      return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
    }

    if (tartgetError === 'name') {
      return this.name.hasError('required') ? 'You must enter a value' :  '';
    }

    if (tartgetError === 'content') {
      return this.content.hasError('required') ? 'You must enter a value' :  '';
    }
  }

  onSend() {
    const val = this.contactFormGroup.value;
    this.testService.createContact(val).subscribe(res => {
      console.log(res);
      if (res) {
        this.contactFormGroup.reset();
        this.openSnackBar();
      }
    });
  }

  openSnackBar() {
    this.snackBar.open('successfully sent', '', {
      duration: 2000,
    });
  }

  ngOnDestroy() {

  }

}
