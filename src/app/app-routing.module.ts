import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Content} from '@angular/compiler/src/render3/r3_ast';
import {ContentBaseComponent} from './content-base/content-base.component';
import {TortenelemComponent} from './contents/tortenelem/tortenelem.component';
import {AnimationTestComponent} from './animation-test/animation-test.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tortenelem', component: TortenelemComponent},
  {path: 'anim', component: AnimationTestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
