import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  educationList = [
    {
      degree: 'Bachelor\'s Degree in Software Engineering',
      institution: 'Universidad Cenfotec',
      period: '2022 - Present',
      location: 'San Pedro - Costa Rica',
      icon: 'fas fa-graduation-cap',
      description: 'Comprehensive training in software development, algorithms, data structures, and web development methodologies. Focus on modern technologies and best programming practices.',
      skills: ['Java', 'C++', 'Python', 'MySQL', 'Agile Methodologies', 'Systems Analysis']
    }
  ];
}
