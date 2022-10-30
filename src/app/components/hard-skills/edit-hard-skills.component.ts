import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardSkill } from 'src/app/model/hard-skills';
import { HardService } from 'src/app/service/hard-skills-service';

@Component({
  selector: 'app-edit-hard-skills',
  templateUrl: './edit-hard-skills.component.html',
  styleUrls: ['./edit-hard-skills.component.css']
})
export class EditHardSkillsComponent implements OnInit {

  hskill: HardSkill = null;

  constructor(
    private skillS: HardService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe(
      data => {
        this.hskill = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id, this.hskill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )
  }
}
