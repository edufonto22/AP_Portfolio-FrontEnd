import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditeducacionComponent } from "./components/educacion/editeducacion.component";
import { NeweducacionComponent } from "./components/educacion/neweducacion.component";
import { EditExperienciaComponent } from "./components/experiencia/edit-experiencia/edit-experiencia.component";
import { NewExperienciaComponent } from "./components/experiencia/new-experiencia/new-experiencia.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { EditHardSkillsComponent } from './components/hard-skills/edit-hard-skills.component';
import { NewHardSkillsComponent } from './components/hard-skills/new-hard-skills.component';
import { EditSoftSkillsComponent } from './components/soft-skills/edit-soft-skills.component';
import { NewSoftSkillsComponent } from './components/soft-skills/new-soft-skills.component';


const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'login',component:LoginComponent},
    {path: 'nuevaexp',component: NewExperienciaComponent},
    {path: 'editexp/:id', component: EditExperienciaComponent},
    {path: 'nuevaedu', component: NeweducacionComponent},
    {path: 'editedu/:id', component: EditeducacionComponent},
    {path: 'newskill', component: NewHardSkillsComponent},
    {path: 'editskill/:id', component: EditHardSkillsComponent},
    {path: 'newsskill', component: NewSoftSkillsComponent},
    {path: 'editsskill/:id', component: EditSoftSkillsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }