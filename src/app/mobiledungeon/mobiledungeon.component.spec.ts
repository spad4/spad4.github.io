import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiledungeonComponent } from './mobiledungeon.component';

describe('MobiledungeonComponent', () => {
  let component: MobiledungeonComponent;
  let fixture: ComponentFixture<MobiledungeonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobiledungeonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobiledungeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
