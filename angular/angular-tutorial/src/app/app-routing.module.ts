import { ParentOfLifeCycleHookComponent } from './parent-of-life-cycle-hook/parent-of-life-cycle-hook.component';
import { ChildTwoOfChildRoutesComponent } from './child-two-of-child-routes/child-two-of-child-routes.component';
import { ChildOneOfChildRoutesComponent } from './child-one-of-child-routes/child-one-of-child-routes.component';
import { ParentOfChildRoutesComponent } from './parent-of-child-routes/parent-of-child-routes.component';
import { ObservableIntroductionComponent } from './observable-introduction/observable-introduction.component';
import { PipesComponent } from './pipes/pipes.component';
import { WildcardRouteComponent } from './wildcard-route/wildcard-route.component';
import { WebsitesDetailsWithDependencyInjectionComponent } from './websites-details-with-dependency-injection/websites-details-with-dependency-injection.component';
import { UsersDetailsWithDependencyInjectionComponent } from './users-details-with-dependency-injection/users-details-with-dependency-injection.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteParametersComponent } from './route-parameters/route-parameters.component';

const routes: Routes = [
    {path: '', redirectTo: 'users', pathMatch: 'full' },
    {path: 'websites', component: WebsitesDetailsWithDependencyInjectionComponent},
    {path: 'pipes', component: PipesComponent},
    {path: 'websites/:id', component: RouteParametersComponent},
    {path: 'users', component: UsersDetailsWithDependencyInjectionComponent},
    {path: 'observable-intro', component: ObservableIntroductionComponent},
    {path: 'life-cycle', component: ParentOfLifeCycleHookComponent},
    {path: 'parent', component: ParentOfChildRoutesComponent, children: [
        {path: 'child-1', component: ChildOneOfChildRoutesComponent},
        {path: 'child-2', component: ChildTwoOfChildRoutesComponent},
    ]},
    {path: '**', component: WildcardRouteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
