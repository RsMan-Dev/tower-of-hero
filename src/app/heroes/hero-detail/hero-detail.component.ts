import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from "@angular/router";
import { HeroService } from '../hero.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit, OnDestroy {

  hero_id : number;
  heroesSub : Subscription;
  heroes : Hero[];
  selectedHero : Hero;

  constructor(private actRoute: ActivatedRoute, public heroService: HeroService) {}

  ngOnInit(): void {
    this.hero_id = this.actRoute.snapshot.params.hero_id;
    this.heroesSub = this.heroService.getHero(this.hero_id).subscribe(hero => { this.selectedHero = hero });
  }

  ngOnDestroy(): void {
    this.heroesSub.unsubscribe();
  }

  saveHeroes(selectedHero : Hero){
    this.heroService.updateHero(this.selectedHero).subscribe();
    console.log(this.heroService.getHeroes());
  }

}
