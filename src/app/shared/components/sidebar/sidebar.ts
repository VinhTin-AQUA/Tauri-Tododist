import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    imports: [RouterLink],
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.scss',
})
export class Sidebar {
    listTodo = signal<any>([]);

    ngOnInit() {
        this.listTodo.set([
            {
                name: 'Todo A',
            },
            {
                name: 'Todo B',
            },
            {
                name: 'Todo C',
            },
            {
                name: 'Todo D',
            },
            {
                name: 'Todo E',
            },
            {
                name: 'Todo F',
            },
        ]);
    }
}
