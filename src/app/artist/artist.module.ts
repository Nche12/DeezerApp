import { NgModule } from '@angular/core';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { ArtistRoutingModule } from './artist-routing.module';

@NgModule({
  declarations: [
    ArtistsComponent,
    ArtistDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ArtistRoutingModule,
    NgMaterialModule,
    ReactiveFormsModule
  ],
  exports: [],
})
export class ArtistModule {}
