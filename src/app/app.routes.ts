import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Proyectos } from './pages/proyectos/proyectos';
import { Blog} from './pages/blog/blog';
import { SobreMi } from './pages/sobre-mi/sobre-mi';
import { Contacto } from './pages/contacto/contacto';
import { Plateas } from './pages/plateas/plateas';
import { Memobit } from './pages/memobit/memobit';
import { Proveedores } from './pages/proveedores/proveedores';
import { Acreditaciones } from './pages/acreditaciones/acreditaciones';
import { Castores } from './pages/castores/castores';
import { Nfc } from './pages/nfc/nfc';

export const routes: Routes = [
  { path: '', component: Home},
  { path: 'proyectos', component: Proyectos },
  { path: 'plateas', component: Plateas },
  { path: 'memobit', component: Memobit },
  { path: 'proveedores', component: Proveedores },
  { path: 'acreditaciones', component: Acreditaciones },
  { path: 'castores', component: Castores },
  { path: 'nfc', component: Nfc },
  { path: 'blog', component: Blog },
  { path: 'sobre-mi', component: SobreMi },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '' },
];
