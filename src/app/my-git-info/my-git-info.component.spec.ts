import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGitInfoComponent } from './my-git-info.component';

describe('MyGitInfoComponent', () => {
  let component: MyGitInfoComponent;
  let fixture: ComponentFixture<MyGitInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGitInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGitInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
