import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-menu-bar',
    templateUrl: './menu-bar.component.html',
    styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

    viewActive: boolean = false;
    createActive: boolean = false;

    private viewPath: string = '/view';
    private createPath: string = '/create';

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.router.events
            .pipe(
                filter(e => e instanceof NavigationEnd)
            )
            .subscribe((navEnd: any) => {
                this.viewActive = navEnd.urlAfterRedirects.includes(this.viewPath);
                this.createActive = navEnd.urlAfterRedirects.includes(this.createPath);
            });
    }

    activateView(): void {
        this.viewActive = true;
        this.createActive = false;
        this.router.navigate([this.viewPath]);
    }

    activateCreate(): void {
        this.viewActive = false;
        this.createActive = true;
        this.router.navigate([this.createPath]);
    }

}
