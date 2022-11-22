import { Component } from '@angular/core';


@Component({
  selector: 'app-cats-selector',
  templateUrl: './cats-selector.component.html',
  styleUrls: ['./cats-selector.component.css']
})
export class CatsSelectorComponent {
  selected = new Array;
  selectedList = new Array;
  breeds = new Array
  breedsNames = new Array;
  breedsSet = new Map;

  filteredBreeds = new Array;

  randomPhotos = new Array;
  endpointUrl: string = 'https://api.thecatapi.com/v1/'
  apiKey: string = 'live_u3s28vA8mgUfGFmtniAzqXFWNp0tepv6ChwM0syYlTp6NVWaS6MdcG6efxUoIBvl'

  pageSizes = [3, 5, 10, 15, 20]
  pageSize: number = 10;
  page: number = 1;

  constructor() {

  }

  ngOnInit() {
    this.getBreedsInfo();
    this.getRandomPhotos();

  }

  async getBreedsInfo() {
    const params = 'api_key=' + this.apiKey;
    const resp = await fetch(this.endpointUrl + 'breeds?/' + params);
    this.breeds = await resp.json();

    this.breeds.forEach((breed) => {
      this.breedsNames.push(breed.name)
    });
    this.breedsNames.sort((a, b) => a.name < b.name ? -1 : 1)
    this.filteredBreeds = [...this.breedsNames]
    this.breedsNames.forEach(item => {
      this.breedsSet.set(item, false)
    })
  }
  onSearch(searchTerm: string) {
    this.filteredBreeds = this.breedsNames.filter(item =>
      item.toLowerCase().includes(searchTerm))
  }

  selectionChange($event: any) {
    this.breedsSet.set($event.option.value, !this.breedsSet.get($event.option.value))


  }
  getPhoto(breedName: string) {
    const photoUrl = this.breeds.find((breed: any) => breed.name == breedName).image.url
    return photoUrl;
  }
  async getRandomPhotos() {
    const resp = await fetch('https://api.thecatapi.com/v1/images/search?limit=20')
    this.randomPhotos = await resp.json();
  }
  onPageSizeChange($event: any) {
    this.pageSize = $event.value;
    this.paginatorFixedResize($event);

  }
  selectAllBreeds() {
    this.selected = this.filteredBreeds;
    this.filteredBreeds.forEach(item => {
      this.breedsSet.set(item, true)
    });
  }
  paginatorFixedResize($event: any) {
    if (this.pageSize >= this.selected.length) {
      this.page = 1
    } else this.page = $event;
  }
}
