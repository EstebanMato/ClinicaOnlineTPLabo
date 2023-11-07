import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  list= [
    {
      number: '1',
      name: 'home',
      icon: 'fa-solid fa-house',
    }, 
    {
      number: '1',
      name: 'Analytics',
      icon: 'fa-solid fa-user',
    }, 
    {
      number: '1',
      name: 'home',
      icon: 'fa-solid fa-box',
    }, 
    {
      number: '1',
      name: 'home',
      icon: 'fa-solid fa-cart-shopping',
    }, 
    {
      number: '1',
      name: 'home',
      icon: 'fa-solid fa-gear',
    }, 
    {
      number: '1',
      name: 'home',
      icon: 'fa-solid fa-circle-info',
    }, 
    {
      number: '1',
      name: 'home',
      icon: 'fa-solid fa-phone',
    },
  ]

}
