import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Company } from '../../interfaces/company'; 
import { Vacancy } from '../../interfaces/vacancy';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  imports:[CommonModule]
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  selectedCompanyId: number | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(){
    this.apiService.getCompanies().subscribe(data => {
      this.companies = data; 
      // let array=Object.values(this.companies)
      console.log('Raw response from API:', data);
    });
  }
  
  showVacancies(companyId: number): void {
    this.selectedCompanyId = companyId;
    this.apiService.getCompanyVacancies(companyId).subscribe(data => {
      this.vacancies = data;
      console.log(data);
    });
  }
}
