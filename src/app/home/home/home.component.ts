import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: [],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: false
  };

  constructor(private router: Router) { }
  ngOnInit(): void {

  }

  scroll(point: string): void {
    document.getElementById(point).scrollIntoView({behavior: 'smooth', block: 'center'});
  }

  redirect(link: string): void {
    this.router.navigateByUrl(link);
  }


  @HostListener('document:scroll', ['$event'])
  onWindowScroll(e): void {
    const element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('bg-white');
      element.classList.add('navbar-light');
      element.classList.remove('navbar-dark');
    } else {
      element.classList.remove('bg-white');
      element.classList.remove('navbar-light');
      element.classList.add('navbar-dark');
    }
  }
}
