import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  experiences = [
    {
      position: 'Bilingual Voice Agent',
      company: 'TransUnion',
      period: 'November 2024 - Present',
      location: 'Remote',
      icon: 'fas fa-laptop-code',
      description: 'Helping consumers in the United States resolve issues related to their credit, accessing their online services, or problems with their credit reports.',
      technologies: ['Salesforce', 'Microsoft Teams']
    },
    {
      position: 'Global Customer Service Agent',
      company: 'Equifax',
      period: 'July 2024 - October 2024',
      location: 'Heredia - Costa Rica',
      icon: 'fas fa-code',
      description: 'Helping consumers in the United States resolve issues related to their credit, accessing their online services, or problems with their credit reports.',
      technologies: ['Salesforce', 'Google Workspace', 'IBM CRM']
    },
    {
      position: 'Back office Agent',
      company: 'United Collection Bureau',
      period: 'April 2021 - July 2024',
      location: 'Heredia - Costa Rica - Remote',
      icon: 'fas fa-rocket',
      description: 'First working, helping with the processing of medical bills for patients in the United States, for hospitals such as Spectrum Health, Southern Ohio Medical Center, and Baptist Hospital.',
      technologies: ['EPIC', 'Microsoft Teams', 'Meditech', 'Availity']
    }
  ];
}
