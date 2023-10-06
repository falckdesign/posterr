import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostQuotedComponent } from './post-quoted.component';

describe('PostQuotedComponent', () => {
  let component: PostQuotedComponent;
  let fixture: ComponentFixture<PostQuotedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostQuotedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostQuotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
