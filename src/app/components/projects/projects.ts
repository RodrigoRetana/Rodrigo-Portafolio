import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  activeFilter = 'all';
  
  projects = [
    {
      id: 1,
      title: 'Project 1 - intermittent fasting',
      description: 'Platform for managing intermittent fasting, with progress tracking, recipes, and weight',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=200&fit=crop',
      technologies: ['HTML', 'CSS', 'MongoDB'],
      githubUrl: 'https://github.com/RodrigoLopez16/Primera-iteraci-n'
    },
    {
      id: 2,
      title: 'Project 3 - Tributico',
      description: 'Web application for creating a tax system for small businesses in Costa Rica.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop',
      technologies: ['Java', 'Spring Boot', 'Angular', 'MariaDB'],
      githubUrl: 'https://github.com/CodingLab-TribuTico'
    }
  ];  
  
  
  viewProject(project: any) {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    } else {
      alert('No demo available for this project');
    }
  }
  
  viewCode(project: any) {
    window.open(project.githubUrl, '_blank');
  }
}
