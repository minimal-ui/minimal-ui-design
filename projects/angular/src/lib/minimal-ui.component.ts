import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'minimal-ui',
  template: `
    <p>
      minimal-ui works!
    </p>
  `,
  styles: [
  ]
})
export class MinimalUiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
