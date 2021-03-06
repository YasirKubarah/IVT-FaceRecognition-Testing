import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectComponent } from './detect.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('DetectComponent', () => {
  let component: DetectComponent;
  let fixture: ComponentFixture<DetectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(DetectComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Upload an image to Face Detect');
  });
});
