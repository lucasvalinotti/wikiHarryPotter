import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { HpService } from '../../services/hp.service';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent implements OnInit{
  constructor(private hpService: HpService) { }
  public students: Character[] = [];
  
  ngOnInit(): void {
    this.hpService.searchCharacters('students')
    .subscribe( students => {
      this.students = students;
    }
    )
  } 
}
