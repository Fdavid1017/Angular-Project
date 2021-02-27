import {Component, OnInit} from '@angular/core';
import Popper from 'popper.js';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];

  constructor() {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Képek',
        routerLink: 'kepek'
      },
      {
        label: 'Térkép',
        routerLink: 'terkep'
      },
      {
        label: 'Önkormányzat',
        items: [
          {
            label: 'Szervezeti felépítés',
            routerLink: 'szervezetifelepites'
          },
          {
            label: 'Társulások',
            routerLink: 'tarsulasok'
          },
          {
            label: 'Arculati kézikönyv',
            routerLink: 'arculatikezikonyv'
          },
          {
            label: 'Közös hivatal',
            routerLink: 'kozoshivatal'
          },
          {
            label: 'Jegyzői nyilvántartás',
            routerLink: 'jegyzoinyilvantartas'
          }
        ]
      },
      {
        label: 'Hírek',
        routerLink: 'hirek'
      },
      {
        label: 'Információk',
        items: [
          {
            label: 'Intézmények',
            routerLink: 'intezmenyek'
          }, {
            label: 'Civil szervezetek',
            routerLink: 'civilszervezetek'
          }, {
            label: 'Dokumentumtár',
            routerLink: 'dokumentumtar'
          }, {
            label: 'Hírmondó',
            routerLink: 'hirmondo'
          },
        ]
      },
      {
        label: 'Pályázatok',
        items: [
          {
            label: 'Közbeszerzés',
            routerLink: 'kozbeszerzes'
          },
          {
            label: 'Széchenyi 2020',
            items: [
              {
                label: 'A helyi identitás és kohézió erősítése',
                routerLink: 'helyiidentitas'
              },
              {
                label: 'Óvoda és idősek napközi otthona energetikai korszerűsítése',
                routerLink: 'energetika'
              },
              {
                label: ' Kazár és Rákóczibánya Gépbeszerzése',
                routerLink: 'gepbeszerzes'
              },
              {
                label: 'Települési sporttevékenység fejlesztése sportszerraktár építésével',
                routerLink: 'sportszerraktar'
              }
            ]
          }
        ]
      }
    ];
  }

}
