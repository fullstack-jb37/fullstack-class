import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectorComponent } from './selector/selector.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StructuralDirectiveNgifComponent } from './structural-directive-ngif/structural-directive-ngif.component';
import { StructuralDirectiveNgswitchComponent } from './structural-directive-ngswitch/structural-directive-ngswitch.component';
import { StructuralDirectiveNgforComponent } from './structural-directive-ngfor/structural-directive-ngfor.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { UsersWithDependencyInjectionComponent } from './users-with-dependency-injection/users-with-dependency-injection.component';
import { UsersDetailsWithDependencyInjectionComponent } from './users-details-with-dependency-injection/users-details-with-dependency-injection.component';
import { ObservableIntroductionComponent } from './observable-introduction/observable-introduction.component';
import { WebsitesDetailsWithDependencyInjectionComponent } from './websites-details-with-dependency-injection/websites-details-with-dependency-injection.component';
// import { UsersService } from 'src/services/users.service';


@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateReferenceVariableComponent,
    TwoWayBindingComponent,
    StructuralDirectiveNgifComponent,
    StructuralDirectiveNgswitchComponent,
    StructuralDirectiveNgforComponent,
    ParentToChildComponent,
    ChildToParentComponent,
    UsersWithDependencyInjectionComponent,
    UsersDetailsWithDependencyInjectionComponent,
    ObservableIntroductionComponent,
    WebsitesDetailsWithDependencyInjectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
