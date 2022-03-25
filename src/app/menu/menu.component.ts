import { Component, Inject, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public dishes?: Dish[];
  public errMess?: string;

  constructor(
    private dishService: DishService,
    @Inject('BaseURL') public BaseURL: string
  ) {}

  ngOnInit() {
    this.dishService
      .getDishes()
      .subscribe(
        (dishes) => (
          (this.dishes = dishes),
          (errmess: any) => (this.errMess = <any>errmess)
        )
      );
  }
}
