import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';
import { Country } from 'src/app/models/country';
import { State } from 'src/app/models/state';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup: FormGroup;
  totalPrice: number = 0;
  totalQuantity: number = 0;
  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];
  countries: Country[] = [];
  shippingAddressStates: State[] = [];
  billingAddressStates: State[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService) { }

  ngOnInit(): void {

    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      }),
      shippingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      billingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      creditCard: this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear: ['']
      })
    });

    const startMonth: number = new Date().getMonth() + 1;
    console.log("start Month" + startMonth);
    
    this.formService.getCreditCardMonths(startMonth).subscribe(
      data => {
        console.log("retrieved credit card months: " + JSON.stringify(data));
        this.creditCardMonths = data;
      }
    );

    this.formService.getCreditCardYears().subscribe(
      data => {
        console.log("retrieved credit card years: " + JSON.stringify(data));
        this.creditCardYears = data;
      }
    );

    this.formService.getCountries().subscribe(
      data => {
        console.log("Retrieved countries: " + JSON.stringify(data));
        this.countries = data;
      }
    );
  }

  onSubmit() {
    console.log(this.checkoutFormGroup.get('customer').value);
    
  }

  copyAddress(event) {

    if(event.target.checked){
      this.checkoutFormGroup.controls.billingAddress.setValue(
        this.checkoutFormGroup.controls.shippingAddress.value
      );
      this.billingAddressStates = this.shippingAddressStates;   // bug fix for states
    }
    else {
      this.checkoutFormGroup.controls.billingAddress.reset();
      this.billingAddressStates = [];                           // bug fix for states
    }
  }

  handleMonthsAndYears() {

    const creditCardFormGroup = this.checkoutFormGroup.get('creditCard');

    const currentYear: number = new Date().getFullYear();
    const selectedYear: number = Number(creditCardFormGroup.value.expirationYear);

    let startMonth: number;

    if (currentYear === selectedYear) {
      startMonth = new Date().getMonth() + 1;
    } else {
      startMonth = 1;
    }
    this.formService.getCreditCardMonths(startMonth).subscribe(
      data => {
        console.log("retrieved credit card months: " + JSON.stringify(data));
        this.creditCardMonths = data;
      }
    );
  }

  getStates(formGroupName: string) {

    const formGroup = this.checkoutFormGroup.get(formGroupName);

    const countryCode = formGroup.value.country.code;
    const countryName = formGroup.value.country.name;

    console.log("code: " + countryCode);
    console.log("name: " + countryName);

    this.formService.getStates(countryCode).subscribe(
      data => {
        
        if (formGroupName === 'shippingAddress') {
          this.shippingAddressStates = data;
        } else {
          this.billingAddressStates = data;
        }

        formGroup.get('state').setValue(data[0]);
      }

    );
  }

}
