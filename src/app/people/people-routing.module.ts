import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PeopleDetailComponent} from './people-detail/people-detail.component';
import {PeopleListComponent} from './people-list/people-list.component';

const routes: Routes = [
    {path: 'people-list', component: PeopleListComponent},
    {path: 'people/:id', component: PeopleDetailComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PeopleRoutingModule {
}
