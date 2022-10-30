import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftSkill } from 'src/app/model/soft-skills';
import { SoftService } from 'src/app/service/soft-skills-service';

@Component({
  selector: 'app-edit-soft-skills',
  templateUrl: './edit-soft-skills.component.html',
  styleUrls: ['./edit-soft-skills.component.css']
})
export class EditSoftSkillsComponent implements OnInit {
    sskill: SoftSkill = null;
  
    constructor(
      private skillS: SoftService,
      private activatedRouter: ActivatedRoute,
      private router: Router) { }
  
    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.skillS.detail(id).subscribe(
        data => {
          this.sskill = data;
        }, err => {
          alert("Error al modificar");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(){
      const id = this.activatedRouter.snapshot.params['id'];
      this.skillS.update(id, this.sskill).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar la skill");
          this.router.navigate(['']);
        }
      )
    }
  }
  