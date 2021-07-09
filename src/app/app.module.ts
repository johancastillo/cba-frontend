import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { SchoolCardComponent } from './components/school-card/school-card.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { TeachersSectionComponent } from './components/teachers-section/teachers-section.component';
import { SpecialtiesCardComponent } from './components/specialties-card/specialties-card.component';
import { SpecialtiesSectionComponent } from './components/specialties-section/specialties-section.component';
import { TeachersPageComponent } from './pages/teachers-page/teachers-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { AppComponent } from './components/app/app.component';
import { CountersComponent } from './components/counters/counters.component';
import { CounterCardComponent } from './components/counter-card/counter-card.component';


@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    CourseCardComponent,
    SchoolCardComponent,
    ContactSectionComponent,
    AboutSectionComponent,
    TeachersSectionComponent,
    SpecialtiesCardComponent,
    SpecialtiesSectionComponent,
    TeachersPageComponent,
    HomePageComponent,
    CoursesPageComponent,
    AppComponent,
    CountersComponent,
    CounterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
