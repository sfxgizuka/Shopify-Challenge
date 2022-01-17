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
  clicked: boolean = false;
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

  likePhoto(){
    // document.addEventListener('DOMContentLoaded', function() {
    //   var likeButton = document.getElementById('like-button');
    //   likeButton.addEventListener('click', function() {
    //     window.lb = likeButton;
    //     likeButton.classList.toggle('selected');
    //   });
    // }, false);
    // const likeButton = <HTMLElement>document.querySelector('like-button');
    // likeButton.classList.toggle('selected');
    this.clicked = !this.clicked;
  }

}
