# Worklica2019

## NodeJS and Angular CLI installation
1) `npm install -g @angular/cli`

## Generate new project: project-initialisation branch
1) `ng new Worklica2019-[YourName]`
2) `ng serve --open`
3) remove `~` and `^` from package version declarations in package.json
4) add `package-lock.json` in .gitignore
	
## Install bootstrap & font-awesome, add CSS: bootstrap-fa branch
1) `npm install bootstrap font-awesome`
2) add into src/styles.css:
```
@import "~bootstrap/dist/css/bootstrap.css";
@import "~font-awesome/css/font-awesome.css";
```
4) `npm i`
3) `ng serve`
4) add into src/styles.css:
```
h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
h2, h3 {
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
  body {
  margin: 2em;
}
  body, input[type="text"], button {
  color: #888;
  font-family: Cambria, Georgia;
}
/* everywhere else */
* {
  font-family: Arial, Helvetica, sans-serif;
}
```
5) `ng serve`
	
## ng generate
1) `ng generate` / `ng help`
  
### CLASS
1) `ng generate class force-wielder --spec=false`
2) add into force-wielder.ts:
```
export class ForceWielder {
  id: number;
  name: string;
  force: number;
}
```

### COMPONENT
1) `ng generate component force-wielder --spec=false`
2) add into force-wielder.component.ts:

`forceWielder = "Mace Windu";`
		
3) add into force-wielder.component.html:

`{{forceWielder}}`

4) add into app.component.html:

`<app-force-wielder></app-force-wielder>`

5) update `src` of `img` in app.component.html
6) `ng serve;`
7) refactor forceWielder in force-wielder.comoponent.ts:
```
forceWielder: ForceWielder = {
  id : 1,
  name : "Mace Windu",
  force: 42
}
```    
8) `ng serve;`
9) refactor force-wielder.component.html into:
```
<h2>{{forceWielder.name}} Details</h2>
<div><span>id: </span>{{forceWielder.id}}</div>
<div><span>name: </span>{{forceWielder.name}}</div>
<div><span>force: </span>{{forceWielder.force}}</div>
```
10) `ng serve;`

### PIPES
1) refactor 1st line in force-wielder.component.html:

`<h2>{{forceWielder.name | uppercase}} Details</h2>`

2) `ng serve;`
3) `ng generate pipe force-to-third --spec false`
4) add into force-to-third.ts:
```
transform(value: number): number {
  return Math.pow(value, 3);
}
```
5) add into force-wielder.component.html:

`<div><span>force: </span>{{forceWielder.force | forceToThird}}</div>`

6) `ng serve;`

### 2WAY BINDING
1) add into force-wielder.component.html:
```
<div>
  <label>forceInput:
    <input [(ngModel)]="forceWielder.force" placeholder="force"/>
  </label>
</div>
```
2) `ng serve;`

3) add into app.module.ts:

`import { FormsModule } from '@angular/forms';`

  (...)
```
imports: [
  BrowserModule,
  FormsModule
```
  (...)
  
4) `ng serve;`

### DIRECTIVES
1) create mock-force-wielders.ts:
```
import { ForceWielder } from './force-wielder';

export const WIELDERS: ForceWielder[] = [
  { id: 11, name: 'Count Dooku' , force: 100 },
  { id: 12, name: 'Ahsoka Tano' , force: 60 },
  { id: 13, name: 'Anakin Skywalker' , force: 180 },
  { id: 14, name: 'Yoda' , force: 15 },
  { id: 15, name: 'Obi-Wan Kenobi' , force: 2543 },
  { id: 16, name: 'Asajj Ventress' , force: 1010 },
  { id: 17, name: 'Darth Maul' , force: 15 },
  { id: 18, name: 'Qui-Gon Jinn' , force: 150 },
  { id: 19, name: 'Darth Plagueis' , force: 183 },
  { id: 20, name: 'Darth Sidious' , force: 9999 }
]
```
2) add into force-wielders.ts:

`wielders = WIELDERS;`

3) add into force-wielder.component.html:
```
<h2>My Force Wielders</h2>
<ul class="wielders">
  <li *ngFor="let wielder of wielders">
  <span class="badge">{{wielder.id}}</span> {{wielder.name}}
</ul>
```
4) replace all in force-wielder.component.css:
```
.selected {
  background-color: #CFD8DC !important;
  color: white;
}
.wielders {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.wielders li {
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 2.5em;
  border-radius: 4px;
}
  .wielders li.selected:hover {
  background-color: #BBD8DC !important;
  color: white;
}
  .wielders li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}
  .wielders .text {
  position: relative;
  top: -3px;
}
.wielders .badge {
  display: inline-block;
  font-size: small;
  color: #e9ecef;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #17a2b8;
  line-height: 1.75em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 3.0em;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}
```
5) replace all in force-wielder.component.html:
```
<h2>My Force Wielders</h2>
<ul class="wielders">
    <li *ngFor="let wielder of wielders" [class.selected]="wielder === selectedForceWielder"
        (click)="onSelect(wielder)">
        <span class="badge">{{wielder.id}}</span> {{wielder.name}}
    </li>
</ul>
<div *ngIf="selectedForceWielder">
    <h2>{{selectedForceWielder.name | uppercase}} Details</h2>
    <div><span>Id : </span>{{selectedForceWielder.id}}</div>
    <label>Name:
        <input [(ngModel)]="selectedForceWielder.name" placeholder="name" />
    </label>
    <div>
        <label>Force:
            <input [(ngModel)]="selectedForceWielder.force" placeholder="force" />
        </label>
    </div>
    <div><span>ForceToThird: </span>{{selectedForceWielder.force | forceToThird}}</div>
</div>
```
6) add into force-wielder.component.ts:
```
wielders = WIELDERS;
selectedForceWielder: ForceWielder;
```
(...)
```
onSelect(forceWielder: ForceWielder): void {
  this.selectedForceWielder = forceWielder;
}
```
7) `ng generate directive --spec=false`

### SERVICES
1) `ng generate service force-wielder --spec=false`
2) add into force-wielder.service.ts:
```
getWielders(): ForceWielder[] {
  return WIELDERS;
}
```
3) replace in force-wielders.component.cs:
```
wielders: ForceWielder[];
selectedForceWielder: ForceWielder;

constructor(private wielderService: ForceWielderService) { }

ngOnInit() {
  this.wielders = this.getWielders();
}

onSelect(forceWielder: ForceWielder): void {
  this.selectedForceWielder = forceWielder;
}

getWielders(): void {
  this.wielders = this.wielderService.getWielders();
}
```
Async:

4) replace in force-wielders.service.ts:
```
getWielders(): Observable<ForceWielder[]> {
  return of(WIELDERS);
}
```
5) replace in force-wielders.component.ts:
```
ngOnInit() {
  this.getWielders();
}

getWielders(): void {
  this.wielderService.getWielders()
    .subscribe(wielders => this.wielders = wielders);
}

onSelect(forceWielder: ForceWielder): void {
  this.selectedForceWielder = forceWielder;
}
```

### ROUTING
1) `ng generate module app-routing --flat --module=app --spec=false`
2) replace in app-routing.module.ts:
```
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'wielders', component: ForceWielderComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
```
3) replace `app-force-wielder` component in app.component.html with:

`<router-outlet></router-outlet>`

4) add as imports into app.module.ts:
```
AppRoutingModule,
RouterModule
```
