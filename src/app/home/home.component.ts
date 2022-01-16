import { Component, OnInit } from '@angular/core';
import { NasaFetchService } from '../services/nasa-fetch.service';
import { ExpectedData } from '../enums/data.interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  data: ExpectedData = {}
  constructor( private nasaFetchService: NasaFetchService) { }
  ngOnInit(): void {
      this.fetchData();
  }

  fetchData(){
    this.nasaFetchService.getData().subscribe(data => {
      this.loading = !this.loading;
      this.data = data;
      console.log(this.data)
    });
  }

}
