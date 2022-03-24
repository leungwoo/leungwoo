import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  //default value set to 5
  value = 5;
  autoTicks = false;
  disabled = false;
  max = 5;
  min = 1;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  vertical = false;
  tickInterval = 1;
  // created a property to attach a eventemitter then added a decorator called Output
  //to send the value of the property to the parent component
  @Output() ratingEvent: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  //added a method to capture the event
  onSliderValueChange(event: any) {
    this.ratingEvent.emit(event.value);
  }
}
