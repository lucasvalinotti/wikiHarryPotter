import { Component, OnInit } from '@angular/core';
import { HpService } from '../../services/hp.service';
import { Spell } from '../../interfaces/spell.interface';

@Component({
  selector: 'app-spells-page',
  templateUrl: './spells-page.component.html',
  styleUrls: ['./spells-page.component.css']
})
export class SpellsPageComponent implements OnInit {
  constructor(private hpService: HpService){}
  public spells: Spell[] = [];

  ngOnInit(): void {
    this.hpService.searchSpells()
    .subscribe(spells => {
      this.spells = spells;
    });
  }

}
