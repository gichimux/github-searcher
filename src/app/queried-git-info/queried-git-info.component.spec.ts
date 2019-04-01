import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueriedGitInfoComponent } from './queried-git-info.component';

describe('QueriedGitInfoComponent', () => {
  let component: QueriedGitInfoComponent;
  let fixture: ComponentFixture<QueriedGitInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueriedGitInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueriedGitInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
