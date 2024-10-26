import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Curso } from '../../entities/Curso';

@Component({
    selector: 'app-curso-card',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './curso-card.component.html',
  })
  export class CursoCard {
    @Input({required: true}) curso!: Curso;

    constructor(private router: Router) {}
  }