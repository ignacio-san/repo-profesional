import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Proyectos } from './pages/proyectos/proyectos';
import { SobreMi } from './pages/sobre-mi/sobre-mi';
import { Contacto } from './pages/contacto/contacto';
import { Plateas } from './pages/plateas/plateas';
import { Memobit } from './pages/memobit/memobit';
import { AppClubLeon } from './pages/app-club-leon/app-club-leon';
import { Proveedores } from './pages/proveedores/proveedores';
import { Acreditaciones } from './pages/acreditaciones/acreditaciones';
import { Castores } from './pages/castores/castores';
import { Nfc } from './pages/nfc/nfc';
import { TiendaFrontCL } from './pages/tienda-front-cl/tienda-front-cl';

export const routes: Routes = [
  { path: '', component: Home},
  { path: 'proyectos', component: Proyectos },
  { path: 'plateas', component: Plateas },
  { path: 'memobit', component: Memobit },
  { path: 'app-club-leon', component: AppClubLeon },
  { path: 'proveedores', component: Proveedores },
  { path: 'acreditaciones', component: Acreditaciones },
  { path: 'castores', component: Castores },
  { path: 'nfc', component: Nfc },
  { path: 'tienda-front-cl', component: TiendaFrontCL },
  { path: 'sobre-mi', component: SobreMi },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '' },
];
