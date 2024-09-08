import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailjsService {

  private serviceId = 'service_k9wn3cl'; // Replace with your EmailJS service ID
  private templateId = 'template_1mochsa'; // Replace with your EmailJS template ID
  private publicKey = '8Lk7H28ByacufIe-i'; // Replace with your EmailJS public key / userId

  constructor() { }

  sendQuoteRequest(formData: any) {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      vehicle_make: formData.make,
      vehicle_model: formData.model,
      vehicle_year: formData.year,
      contact_method: formData.contactMethod,
      issue_description: formData.issue,
      additional_comments: formData.comments
    };

    return emailjs.send(this.serviceId, this.templateId, templateParams, this.publicKey);
  }
}
