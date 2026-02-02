import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  currentYear = new Date().getFullYear();
  
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/documents/RodrigoRetanaSDCV.pdf';
    link.download = 'RodrigoRetanaSDCV.pdf';
    link.click();
  }
}
