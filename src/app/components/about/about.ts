import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  downloadCV() {
    // Aquí implementarías la lógica para descargar el CV
    // Por ejemplo, abrir un enlace a un archivo PDF
    const link = document.createElement('a');
    link.href = 'assets/documents/RodrigoRetanaSDCV.pdf';
    link.download = 'RodrigoRetanaSDCV.pdf';
    link.click();
  }
}
