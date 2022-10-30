import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoftSkill } from 'src/app/model/soft-skills';
import { SoftService } from 'src/app/service/soft-skills-service';

@Component({
  selector: 'app-new-soft-skills',
  templateUrl: './new-soft-skills.component.html',
  styleUrls: ['./new-soft-skills.component.css']
})
export class NewSoftSkillsComponent implements OnInit {
  nombre: string;
  porcentaje: number;
  imgSkill:string;

  constructor(private skillS: SoftService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const sskill = new SoftSkill(this.nombre, this.porcentaje, this.imgSkill);
    this.skillS.save(sskill).subscribe(
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

