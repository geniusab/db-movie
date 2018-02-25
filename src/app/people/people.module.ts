import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PeopleRoutingModule} from './people-routing.module';
import {PeopleListComponent} from './people-list/people-list.component';
import {PeopleService} from './people.service';
import {PeopleDetailComponent} from './people-detail/people-detail.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        PeopleRoutingModule,
        SharedModule
    ],
    declarations: [PeopleListComponent, PeopleDetailComponent],
    providers: [PeopleService]
})
export class PeopleModule {
}
