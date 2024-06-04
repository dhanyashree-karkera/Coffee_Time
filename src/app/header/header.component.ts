import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items: any;
  images: any[] | undefined;


  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink:['/carousel']
      },
      
      {
        label: 'About',
        icon: 'pi pi-star',
        routerLink:['/about']
      },
      {
        label: 'Products',
        icon: 'pi pi-bars',
        items: [
          {
            label: 'Cold Coffee',
            icon: 'pi pi-angle-double-right',
            routerLink: ['/cold']
          },
          {
            label: 'Dark Coffee',
            icon: 'pi pi-angle-double-right',
            routerLink: ['/dark']
          },
          {
            label: 'Hot Coffee',
            icon: 'pi pi-angle-double-right',
            routerLink: ['/hot']
          }
        ]
      },
    {
      label: 'Review',
        icon: 'pi pi-eye'
      },

      {
        label: 'Blogs',
        icon: 'pi pi-bolt'
      },
      {
        label: 'Contact',
        icon: 'pi pi-address-book'
      }
    ];
  }
  }

