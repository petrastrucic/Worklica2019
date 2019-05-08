# Worklica2019

## NodeJS and Angular CLI installation
1) `npm install -g @angular/cli`
- [x] Finish Angular CLI installation

## Generate new project: initial-branch
1) `ng new Worklica2019-[YourName]`
2) `ng serve --open`

- [x] My new project is generated
	
## Install bootstrap & font-awesome, add CSS
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
- [x] Bootstrap and font-awesome installed, and basic css added
	
## ng generate
1) `ng generate` / `ng help`
  
### CLASS
1) `ng generate class force-weilder --spec=false`
2) add into force-weilder.ts:
```
export class ForceWeilder {
  id: number;
  name: string;
  force: number;
}
```
- [x] Generated my first class

### COMPONENT
1) `ng generate component force-weilder --spec=false`
2) add into force-weilder.component.ts:

`forceWeilder = "Mace Windu";`
		
3) add into force-weilder.component.html:

`{{forceWeilder}}`

4) add into app.component.html:

`<app-force-weilder></app-force-weilder>`

5) update `src` of `img` in app.component.html
6) `ng serve;`
7) refactor forceWeilder in force-weilder.comoponent.ts:
```
forceWeilder: ForceWeilder = {
  id : 1,
  name : "Mace Windu",
  force: 42
}
```    
8) `ng serve;`
9) refactor force-weilder.component.html into:
```
<h2>{{forceWeilder.name}} Details</h2>
<div><span>id: </span>{{forceWeilder.id}}</div>
<div><span>name: </span>{{forceWeilder.name}}</div>
<div><span>force: </span>{{forceWeilder.force}}</div>
```
10) `ng serve;`
- [x] Generated my first component

### PIPES
1) refactor 1st line in force-weilder.component.html:

`<h2>{{forceWeilder.name | uppercase}} Details</h2>`

2) `ng serve;`
3) `ng generate pipe force-to-third --spec false`
4) add into force-to-third.ts:
```
transform(value: number): number {
  return Math.pow(value, 3);
}
```
5) add into force-weilder.component.html:

`<div><span>force: </span>{{forceWeilder.force | forceToThird}}</div>`

6) `ng serve;`
- [x] Generated my first pipe

### 2WAY BINDING
1) add into force-weilder.component.html:
```
<div>
  <label>force:
    <input [(ngModel)]="forceWeilder.force" placeholder="force"/>
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
- [x] Added my first 2-way binding

### DIRECTIVES
1) create mock-force-weilders.ts:
```
import { ForceWeilder } from './force-weilder';

export const WEILDERS: ForceWeilder[] = [
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
2) add into force-weilders.ts:

`weilders = WEILDERS;`

3) add into force-weilder.component.html:
```
<h2>My Force Weilders</h2>
<ul class="weilders">
  <li *ngFor="let weilder of weilders">
  <span class="badge">{{weilder.id}}</span> {{weilder.name}}
</ul>
```
4) replace all in force-weilder.component.css:
```
.selected {
  background-color: #CFD8DC !important;
  color: white;
}
.weilders {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.weilders li {
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 2.5em;
  border-radius: 4px;
}
  .weilders li.selected:hover {
  background-color: #BBD8DC !important;
  color: white;
}
  .weilders li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}
  .weilders .text {
  position: relative;
  top: -3px;
}
.weilders .badge {
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
5) replace all in force-weilder.component.html:
```
<h2>My Force Weilders</h2>
<ul class="weilders">
    <li *ngFor="let weilder of weilders" [class.selected]="weilder === selectedForceWeilder"
        (click)="onSelect(weilder)">
        <span class="badge">{{weilder.id}}</span> {{weilder.name}}
    </li>
</ul>
<div *ngIf="selectedForceWeilder">
    <h2>{{selectedForceWeilder.name | uppercase}} Details</h2>
    <div><span>Id : </span>{{selectedForceWeilder.id}}</div>
    <label>Name:
        <input [(ngModel)]="selectedForceWeilder.name" placeholder="name" />
    </label>
    <div>
        <label>Force:
            <input [(ngModel)]="selectedForceWeilder.force" placeholder="force" />
        </label>
    </div>
    <div><span>ForceToThird: </span>{{selectedForceWeilder.force | forceToThird}}</div>
</div>
```
6) add into force-weilder.component.ts:
```
weilders = WEILDERS;
selectedForceWeilder: ForceWeilder;
```
(...)
```
onSelect(forceWeilder: ForceWeilder): void {
  this.selectedForceWeilder = forceWeilder;
}
```
7) `ng generate directive --spec=false`
- [x] Added my first directive

### SERVICES
1) `ng generate service force-weilder --spec=false`
2) add into force-weilder.service.ts:
```
getWeilders(): ForceWeilder[] {
  return WEILDERS;
}
```
3) replace in force-weilders.component.cs:
```
weilders: ForceWeilder[];
selectedForceWeilder: ForceWeilder;

constructor(private weilderService: ForceWeilderService) { }

ngOnInit() {
  this.weilders = this.weilderService.getWeilders();
}

onSelect(forceWeilder: ForceWeilder): void {
  this.selectedForceWeilder = forceWeilder;
}

getWeilders(): void {
  this.weilders = this.weilderService.getWeilders();
}
```
Async:
4) replace in force-weilders.component.cs:
```
getWeilders(): void {
  this.weilderService.getWeilders()
    .subscribe(weilders => this.weilders = weilders);;
}
```
5) replace in force-weilders.service.ts:
```
getWeilders(): Observable<ForceWeilder[]> {
  return of(WEILDERS);
}
```
- [x] Generated my first service

### ROUTING
1) `ng generate module app-routing --flat --module=app --spec=false`
2) replace in app-routing.module.ts:
```
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'weilders', component: ForceWeilderComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
```
3) replace `app-force-weilder` component in app.component.html with:

`<router-outlet></router-outlet>`

4) add as imports into app.module.ts:
```
AppRoutingModule,
RouterModule
```
- [x] Generated my first module
