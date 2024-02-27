import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { HpService } from '../../services/hp.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css']
})
export class CharacterPageComponent implements OnInit{
  public character?:Character;

  constructor(private activatedRoute: ActivatedRoute,
    private router:Router,
    private hpService: HpService) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => { return this.hpService.searchCharacterById(id);})
    )
    .subscribe(character => {
      if(!character) return this.router.navigateByUrl('');
      return this.character = character;
    })
  }
}
