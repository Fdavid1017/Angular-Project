import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Content} from '@angular/compiler/src/render3/r3_ast';
import {ContentBaseComponent} from './content-base/content-base.component';
import {TortenelemComponent} from './contents/tortenelem/tortenelem.component';
import {AnimationTestComponent} from './animation-test/animation-test.component';
import {SzervezetiFelepitesComponent} from './contents/szervezeti-felepites/szervezeti-felepites.component';
import {TarsulasokComponent} from './contents/tarsulasok/tarsulasok.component';
import {ArculatikezikonyvComponent} from './contents/arculatikezikonyv/arculatikezikonyv.component';
import {KozoshivatalComponent} from './contents/kozoshivatal/kozoshivatal.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tortenelem', component: TortenelemComponent},
  {path: 'kepek', component: PageNotFoundComponent},
  {path: 'terkep', component: PageNotFoundComponent},
  {path: 'szervezetifelepites', component: SzervezetiFelepitesComponent},
  {path: 'tarsulasok', component: TarsulasokComponent},
  {path: 'arculatikezikonyv', component: ArculatikezikonyvComponent},
  {path: 'kozoshivatal', component: KozoshivatalComponent},
  {path: 'jegyzoinyilvantartas', component: PageNotFoundComponent},
  {path: 'hirek', component: PageNotFoundComponent},
  {path: 'intezmenyek', component: PageNotFoundComponent},
  {path: 'civilszervezetek', component: PageNotFoundComponent},
  {path: 'dokumentumtar', component: PageNotFoundComponent},
  {path: 'hirmondo', component: PageNotFoundComponent},
  {path: 'kozbeszerzes', component: PageNotFoundComponent},
  {path: 'helyiidentitas', component: PageNotFoundComponent},
  {path: 'energetika', component: PageNotFoundComponent},
  {path: 'gepbeszerzes', component: PageNotFoundComponent},
  {path: 'sportszerraktar', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
