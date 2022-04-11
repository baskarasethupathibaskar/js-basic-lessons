import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  title = 'Financial Books';
  currentTab = 1;
  books: Array<any> = [
    {
      name: 'The Three Zeros',
      price: 270,
      author: 'Muhammed Yuvans',
      canBuy: true,
      images: [{ thumb: 'images/WorldofThreeZeros.png', full: '' }],
      description:
        'A winner of the Nobel Peace Prize offers his vision of an emerging new economic system that can save humankind and the planet Muhammad Yunus, who created microcredit, invented social business and earned ..',
      publishdate: Date.now(),
      discount: 0.1, 
    },
    {
      name: 'Zero to One',
      price: 320,
      author: 'Peter Thiel',
      canBuy: true,
      images: [{ thumb: 'images/ZeroToOne.png', full: '' }],
      description:
        'Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by venture capitalist, PayPal co-founder, and early Facebook investor Peter Thiel along with Blake Masters',
      publishdate: Date.now(),
      discount: 0.1,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  onbuy(book: any) {
    console.log('Book added to the cart...' + book.name + '' + book.price);
  }
  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex;
  }
  onTabChange(event: any, tabIndex: number) {
    event.preventDefault(); //to stop the flickering
    this.currentTab = tabIndex;
    console.log('Tab Selected: ' + this.currentTab);
  }
}
