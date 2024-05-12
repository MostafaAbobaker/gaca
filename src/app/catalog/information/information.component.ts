import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../Services/country.service';
import { Country } from '../Interface/country';
import { PhoneKeyService } from '../Services/phone-key.service';
import { PhoneKey } from '../Interface/phone-key';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  date: Date | undefined;
  value: string | undefined;
  countryName:Country []  | undefined
  phoneKey:PhoneKey [] | undefined


  countries: any[] | undefined;
  selectedCountry:   string| undefined;

  constructor(private _countryService:CountryService , private _phoneKeyService:PhoneKeyService) {

  }

  ngOnInit(): void {
  this.getCountry();
/*   this.getPhoneKey();
 */
this.countries = [
  { name: 'Australia', code: 'AU' },
  { name: 'Brazil', code: 'BR' },
  { name: 'China', code: 'CN' },
  { name: 'Egypt', code: 'EG' },
  { name: 'France', code: 'FR' },
  { name: 'Germany', code: 'DE' },
  { name: 'India', code: 'IN' },
  { name: 'Japan', code: 'JP' },
  { name: 'Spain', code: 'ES' },
  { name: 'United States', code: 'US' }
];
  }

  getCountry() {
    this._countryService.getCountry().subscribe({
      next: (res) => {this.countryName = res.data;
        // console.log(this.countryName);
      },
      error: (err) => alert(err)
    })
  }
  /* getPhoneKey() {
    this._phoneKeyService.getPhoneKey().subscribe({
      next:(res) => {
      this.phoneKey = Object.values(res);

        // this.phoneKey= res ;
        console.log('This Phone Key');

        console.log(this.phoneKey)
      },
      error: (err) => alert(err),
    })
  } */
  phoneForm:FormGroup = new FormGroup({
    phone: new FormControl('')
  });
  basicInformationForm:FormGroup = new FormGroup({
    clientType:new FormControl('' , [Validators.required]),
    name: new FormControl('',[Validators.required,]),
    phoneNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nationality : new FormControl('',[Validators.required]),
    clientReference: new FormControl(''),
    birthDay: new FormControl('')
  })

  registerBasicInformation(form:FormGroup) {
    console.log(form.value);
  }

  operatorInformationFrom:FormGroup = new FormGroup({
    operatorCountry :new FormControl('', [Validators.required]),
    OperatorNationality :new FormControl('', [Validators.required]),
    OperatorType:new FormControl('', [Validators.required]),
    OperatorPhone : new FormControl('', [Validators.required]),
    nameAirlines: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    OperatorEmail: new FormControl('', [Validators.required, Validators.email]),
    OperatorURL: new FormControl('', [Validators.required]),
  })

  registerOperatorInformation(form:FormGroup) {
    console.log(form.value);
  }
}
