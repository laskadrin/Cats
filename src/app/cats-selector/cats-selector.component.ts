import { Component, ViewChild } from '@angular/core';

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
  endpointUrl: string = 'https://api.thecatapi.com/v1/'
  apiKey: string = 'live_u3s28vA8mgUfGFmtniAzqXFWNp0tepv6ChwM0syYlTp6NVWaS6MdcG6efxUoIBvl'

  constructor() {

  }

  ngOnInit() {
    this.getBreedsInfo();
    console.log(this.selected)
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
    console.log(this.selected)
  }
  getPhoto(breedName: string) {
    const photoUrl = this.breeds.find((breed: any) => breed.name == breedName).image.url
    return photoUrl;
  }
}