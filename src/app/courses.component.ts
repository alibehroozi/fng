
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `<h2>{{ title }}</h2>
        <ul [class.active]="isActive">
            <li *ngFor="let course of myCourses">
                {{ course | summery }}
            </li>
        </ul>

        <input [(ngModel)]="email" (keyUp.enter)="onEnter()" />
    `
})

export class CoursesComponent implements OnInit {
    @Input() title: string;
    isActive = true;
    myCourses;
    email;
    @Output() clickme = new EventEmitter();
    constructor(service: CoursesService) {
        this.myCourses = service.getCourses();
    }
    ngOnInit(){
    }
    getTitle() {
        return this.title;
    }

    onEnter(email) {
        console.log(this.email);
        this.email = 'salam';
        this.clickme.emit();
    }
}

