import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Turf } from 'src/app/models/turf.model';
import { TurfService } from 'src/app/services/turf.service';

@Component({
  selector: 'app-adminaddturf',
  templateUrl: './adminaddturf.component.html',
  styleUrls: ['./adminaddturf.component.css']
})
export class AdminaddturfComponent {
  turfForm: FormGroup;
  showModal: boolean = false;

  constructor(private fb: FormBuilder,private turfService: TurfService) {
    this.turfForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      pricePerHour: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      description: ['', Validators.required],
      turfImage: [null, Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.turfForm.patchValue({
        turfImage: file
      });
    }
  }

  submit() {
     if (this.turfForm.valid) {
     const turf: Turf = this.turfForm.value;
      this.turfService.addTurf(turf).subscribe({
        next: () => {
          alert('Turf added successfully');
          this.showModal = true;
          this.turfForm.reset();
        },
        error: (err) => {
          console.error('Error adding turf:', err);
          alert('Failed to add turf.');
        }
      });
    } else {
      this.turfForm.markAllAsTouched();
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
