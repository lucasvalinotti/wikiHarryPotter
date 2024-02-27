import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { HpService } from '../../services/hp.service';

@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.css']
})
export class StaffPageComponent {
  constructor(private hpService: HpService) { }
  public staff: Character[] = [];
  
  ngOnInit(): void {
    this.hpService.searchCharacters('staff')
    .subscribe( staff => {
      this.staff = staff;
    }
    )
  } 
}
