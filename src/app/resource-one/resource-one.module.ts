import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveModule } from 'ng2-responsive';
import { ResourceOneRoutingModule } from './resource-one-routing.module';
import { ClarityModule } from 'clarity-angular';

import { ResourceOneComponent } from './resource-one.component';
import { ResourceOneListComponent } from './components/resource-one-list/resource-one-list.component';
import { ResourceOneDetailsComponent } from './components/resource-one-details/resource-one-details.component';


@NgModule({
    imports: [
        CommonModule,
        ResponsiveModule,
        ClarityModule,
        ResourceOneRoutingModule
    ],
    declarations: [
        ResourceOneComponent,
        ResourceOneListComponent,
        ResourceOneDetailsComponent
    ]
})
export class ResourceOneModule { }