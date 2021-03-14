import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { PatientModel } from '../models/Patient.model'

@Component({
  selector: 'app-patient-health-profile',
  templateUrl: './patient-health-profile.component.html',
  styleUrls: ['./patient-health-profile.component.scss']
})
export class PatientHealthProfileComponent implements OnInit {

  constructor(
    private __apiService: ApiService
  ) { }

  patientInfo: PatientModel = {}
   
  ngOnInit(): void {
    this.__apiService.request('get', 'getPatientHealthInfo').subscribe((responce) => {
      this.patientInfo = responce.data;
      console.log('patientInfo', this.patientInfo);
    })
  }

}
