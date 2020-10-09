import { Component, OnInit } from '@angular/core';
import { ITestModel } from './test-model.model';
import { TestModelService } from '../test-model.service';

@Component({
  selector: 'app-test-model',
  templateUrl: './test-model.component.html',
  styleUrls: ['./test-model.component.scss'],
})
export class TestModelComponent implements OnInit {

  testModels: ITestModel[] = [];
//  test_1: ITestModel;
//  test_2: ITestModel;
//  test_3: ITestModel;
  errorMessage: string;

  constructor(private testModelService: TestModelService) {
    //
  }

  ngOnInit() {
    // this.test_1 = { id: 101, firstName: 'Lucy', lastName: 'Heartfealia', email: 'lucy@gmail.com' };
    // this.test_2 = { id: 102, firstName: 'Brian', lastName: 'Loncar', email: 'brian@gmail.com' };
    // this.test_3 = { id: 103, firstName: 'Cody', lastName: 'S Bear', email: 'cody@gmail.com' };
    // this.testModels.push(this.test_1, this.test_2, this.test_3);
    //
    this.testModelService.getAllTestModels().subscribe({
      next: testModels => {
        this.testModels = testModels;
      },
      error: err => this.errorMessage = err
    });
  }

}
