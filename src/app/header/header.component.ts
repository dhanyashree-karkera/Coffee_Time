import { Component } from '@angular/core';

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
        icon: 'pi pi-home'
      },
      {
        label: 'About',
        icon: 'pi pi-star'
      },
      {
        label: 'Menu',
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
        label: 'Contact',
        icon: 'pi pi-address-book'
      }
    ];

  
  }
}
