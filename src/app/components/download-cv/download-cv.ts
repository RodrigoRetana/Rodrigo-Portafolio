import { Component } from '@angular/core';

@Component({
  selector: 'app-download-cv',
  imports: [],
  templateUrl: './download-cv.html',
  styleUrl: './download-cv.scss'
})
export class DownloadCv {
  lastUpdated = 'February 2026';
  showPreviewModal = false;
  
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/documents/RodrigoRetanaSDCV.pdf';
    link.download = 'RodrigoRetanaSDCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    this.showDownloadMessage();
  }
  
  previewCV() {
    window.open('assets/documents/RodrigoRetanaSDCV.pdf', '_blank');
  }
  
  private showDownloadMessage() {
    alert('CV downloaded successfully! Thank you for your interest.');
  }
}
