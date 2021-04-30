import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactUsComponent } from './contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

describe( 'Formulario de contacto', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forRoot([])
      ],
      declarations: [ ContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('Componente de Contáctenos ha sido creado', () => {
    expect(component).toBeTruthy();
  });

  it( 'Debe crear un formulario con tres campos, "name, email y message"', () => {
    expect( component.contactForm.contains('name') ).toBeTruthy()
    expect( component.contactForm.contains('email') ).toBeTruthy()
    expect( component.contactForm.contains('message') ).toBeTruthy()
  })
  
  it( 'El name debe ser obligatorio', () => {
    const control = component.contactForm.get('name');
    control.setValue('');
    expect( control.valid ).toBeFalsy();
  })

  it( 'El email debe ser obligatorio', () => {
    const control = component.contactForm.get('email');
    control.setValue('');
    expect( control.valid ).toBeFalsy();
  })

  it( 'El email debe ser un correo válido', () => {
    const control = component.contactForm.get('email');
    control.setValue('juangon.t@gmail.com');
    expect( control.valid ).toBeTruthy();
  })
  
  it( 'El message debe ser obligatorio', () => {
    const control = component.contactForm.get('message');
    control.setValue('');
    expect( control.valid ).toBeFalsy();
  })

})