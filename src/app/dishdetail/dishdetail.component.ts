import {
  Component,
  Inject,
  Input,
  OnInit,
  ɵɵqueryRefresh,
} from '@angular/core';
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommentErrors } from '../shared/commentErrors';
import { Base, ValidationComments } from '../shared/validationComments';
import { Comment } from '../shared/comment';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
})
export class DishdetailComponent implements OnInit {
  public commentsForm = this.fb.group({
    author: ['', [Validators.minLength(2), Validators.required]],
    rating: 5,
    comment: ['', [Validators.minLength(5), Validators.required]],
  });

  public dish: Dish | undefined;
  public dishIds: string[] = [];
  public prev?: string;
  public next?: string;
  //default value set to 5
  public rating: number = 5;
  //added the date as a property
  public today: Date = new Date();
  public commentErrors = {
    author: '',
    comment: '',
  };
  public validationComments = {
    author: {
      required: 'Author name is required',
      minlength: 'Author Name must be atleast 2 characters long',
    },
    comment: {
      required: 'Comment is required',
      minlength: 'Comment muct be atleast 5 characters long',
    },
  };
  //using observable in the constructor to track value changes

  constructor(
    private fb: FormBuilder,
    private dishservice: DishService,
    private location: Location,
    private route: ActivatedRoute,
    @Inject('BaseURL') public BaseURL: string
  ) {
    this.commentsForm.valueChanges.subscribe((data) =>
      this.onValueChanged(data)
    );

    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(_data?: any) {
    if (!this.commentsForm) {
      return;
    }
    const form = this.commentsForm;
    for (const field in this.commentErrors) {
      if (this.commentErrors.hasOwnProperty(field))
        this.commentErrors[field as keyof CommentErrors] = '';
      const control = form.get(field);
      if (control?.invalid && control.dirty) {
        const message =
          this.validationComments[field as keyof ValidationComments];
        for (const error in control.errors) {
          if (control.errors.hasOwnProperty(error)) {
            this.commentErrors[field as keyof CommentErrors] +=
              message[error as keyof Base] + ' ';
          }
        }
      }
    }
  }

  ngOnInit() {
    this.dishservice
      .getDishIds()
      .subscribe((dishIds) => (this.dishIds = dishIds));
    this.route.params
      .pipe(
        switchMap((params: Params) => this.dishservice.getDish(params['id']))
      )
      .subscribe((dish) => {
        this.dish = dish;
        this.setPrevNext(dish.id);
      });
  }
  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev =
      this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next =
      this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }
  // Handler to hold the value from the Slider Child component
  onSliderValueChangeHandler(value: number) {
    this.rating = value;
  }

  onSubmit() {
    // get the author, comment and  rating then push this values to comments array.
    let rating: number;
    let comment: string;
    let author: string;
    let date: string;
    //the data model derived from the Comment Class contains all 4 below
    rating = this.rating;
    comment = this.commentsForm.get('comment')?.value;
    author = this.commentsForm.get('author')?.value;
    date = new Date().toISOString();

    this.dish?.comments.push(new Comment(rating, comment, author, date));
    //reset the form to initial values

    this.commentsForm.reset({
      author: '',
      rating: 5,
      comment: '',
    });
  }
}
