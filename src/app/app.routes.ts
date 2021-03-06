import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketArchListComponent } from './tickets/ticket-arch-list/ticket-arch-list.component';
import { TicketDetailComponent } from './tickets/ticket-detail/ticket-detail.component';
import { TicketNewComponent } from './tickets/ticket-new/ticket-new.component';
import { ConfigService } from './services/config.service';

const routes: Routes = [
    // Root
    { path: '', component: TicketListComponent },
    { path: 'page/:id', component: PageNumComponent },
    { path: 'tickets', component: TicketListComponent },
    { path: 'tickets/archived', component: TicketArchListComponent },
    { path: 'tickets/new', component: TicketNewComponent, data : { title : 'Создание заявки' }},
    { path: 'tickets/:id', component: TicketDetailComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
