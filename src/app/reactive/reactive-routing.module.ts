import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './components/basics/basics.component';
import { SwitchesComponent } from './components/switches/switches.component';
import { DinamicsComponent } from './components/dinamics/dinamics.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basics', component: BasicsComponent },
      { path: 'dinamics', component: DinamicsComponent },
      { path: 'switches', component: SwitchesComponent },
      { path: '**', redirectTo: 'basics' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ReactiveRoutingModule {}
