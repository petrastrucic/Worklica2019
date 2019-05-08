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
4) `ng generate component force-weilder --spec=false`
5) add into force-weilder.component.ts:

`forceWeilder = "Mace Windu";`
		
6) add into force-weilder.component.html:

`{{forceWeilder}}`

7) add into app.component.html:

`<app-force-weilder></app-force-weilder>`

8) `ng serve;`
9) refactor forceWeilder in force-weilder.comoponent.ts:
```
forceWeilder: ForceWeilder = {
  id : 1,
  name : "Mace Windu",
  force: 42
}
```    
10) `ng serve;`
11) refactor force-weilder.component.html into:
```
<p>
force-weilder works!
</p>
<h2>{{forceWeilder.name}} Details</h2>
<div><span>id: </span>{{forceWeilder.id}}</div>
<div><span>name: </span>{{forceWeilder.name}}</div>
```
12) `ng serve;`
- [x] Generated my first component

### PIPES
13) refactor 1st line in force-weilder.component.html:

`<h2>{{forceWeilder.name | uppercase}} Details</h2>`

14) `ng serve;`
15) `ng generate pipe force-to-third --spec false`
16) add into force-to-third.ts:
```
transform(value: number): number {
  return Math.pow(value, 3);
}
```
17) add into force-weilder.component.html:

`<div><span>force: </span>{{forceWeilder.force | forceToThird}}</div>`

18) `ng serve;`
- [x] Generated my first pipe

### 2WAY BINDING
19) add into force-weilder.component.html:
```
<div>
  <label>force:
    <input [(ngModel)]="forceWeilder.force" placeholder="force"/>
  </label>
</div>
```
20) `ng serve;`
21) add into app.module.ts:

`import { FormsModule } from '@angular/forms';`

  (...)
```
imports: [
  BrowserModule,
  FormsModule
```
  (...)
22) `ng serve;`
- [x] Added my first 2-way binding

### DIRECTIVES
23) create mock-force-weilders.ts:
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
24) add into force-weilders.ts:

`weilders = WEILDERS;`

25) add into force-weilder.component.html:
```
<h2>My Force Weilders</h2>
<ul class="weilders">
  <li *ngFor="let weilder of weilders">
  <span class="badge">{{weilder.id}}</span> {{weilder.name}}
</ul>
```
26) replace all in force-weilder.component.css:
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
  height: 1.6em;
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
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #607D8B;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}
```
27) replace all in force-weilder.component.html:
```
<h2>My Force Weilders</h2>
<ul class="weilders">
  <li *ngFor="let weilder of weilders"
    [class.selected]="weilder === selectedForceWeilder"
    (click)="onSelect(weilder)">
    <span class="badge">{{weilder.id}}</span> {{weilder.name}} 
  </li>
</ul>
<div *ngIf="selectedForceWeilder">
  <h2>{{forceWeilder.name | uppercase}} Details</h2>
  <div><span>id: </span>{{forceWeilder.id}}</div>
  <label>name:
    <input [(ngModel)]="selectedForceWeilder.name" placeholder="name"/>
  </label>
  <div>
    <label>force:
      <input [(ngModel)]="selectedForceWeilder.force" placeholder="force"/>
    </label>
  </div>
</div>
```
28) add into force-weilder.component.ts:
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
29) `ng generate directive --spec=false`
- [x] Added my first directive

### SERVICES
30) `ng generate service force-weilder --spec=false`
31) add into force-weilder.service.ts:
```
getHeroes(): ForceWeilder[] {
  return WEILDERS;
}
```
32) replace in force-weilders.component.cs:
```
weilders: ForceWeilder[];
selectedForceWeilder: ForceWeilder;

constructor(private weilderService: ForceWeilderService) { }

ngOnInit() {
}

onSelect(forceWeilder: ForceWeilder): void {
  this.selectedForceWeilder = forceWeilder;
}

getHeroes(): void {
  this.weilders = this.weilderService.getHeroes();
}
```
Async:
33) replace in force-weilders.component.cs:
```
getHeroes(): void {
  this.weilderService.getWeilders()
    .subscribe(weilders => this.weilders = weilders);;
}
```
34) replace in force-weilders.service.ts:
```
getWeilders(): Observable<ForceWeilder[]> {
  return of(WEILDERS);
}
```
- [x] Generated my first service

### ROUTING
35) `ng generate module app-routing --flat --module=app --spec=false`
36) add const into app-routing.module.ts:
```
const routes: Routes = [
  { path: 'weilders', component: ForceWeilderComponent }
];
```
and an import:

`imports: [ RouterModule.forRoot(routes) ]`

Rest can be deleted.
37) replace in app.component.html:
```
<h1>{{title}}</h1>
<router-outlet></router-outlet>
```
38) add as imports into app.module.ts:
```
AppRoutingModule,
RouterModule
```
- [x] Generated my first module
