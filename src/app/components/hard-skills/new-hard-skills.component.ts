import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardSkill } from 'src/app/model/hard-skills';
import { HardService } from 'src/app/service/hard-skills-service';

@Component({
  selector: 'app-new-hard-skills',
  templateUrl: './new-hard-skills.component.html',
  styleUrls: ['./new-hard-skills.component.css']
})
export class NewHardSkillsComponent implements OnInit {

  nombre: string;
  porcentaje: number;
  imgSkill:string;

  constructor(private skillS: HardService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new HardSkill(this.nombre, this.porcentaje, this.imgSkill);
    this.skillS.save(skill).subscribe(
      data => {
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir la skill");
        this.router.navigate(['']);
      }
    )
  }
}
