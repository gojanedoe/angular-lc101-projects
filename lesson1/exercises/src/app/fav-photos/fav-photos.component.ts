import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos';
  image1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/%D0%9F%D0%B5%D1%80%D1%8B%D1%88%D0%BA%D0%BE_%D0%A4%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D0%B0_%D0%AF%D1%81%D0%BD%D0%B0-%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB%D0%B0_4.jpg/554px-%D0%9F%D0%B5%D1%80%D1%8B%D1%88%D0%BA%D0%BE_%D0%A4%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D0%B0_%D0%AF%D1%81%D0%BD%D0%B0-%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB%D0%B0_4.jpg';
  image2 = 'https://live.staticflickr.com/8168/6983655618_632a491da4_k.jpg';
  image3 = 'https://media.freelibrary.org/assets/digital/items/pdcc00235/images/large.jpg';

  constructor() { }

  ngOnInit() {
  }

}