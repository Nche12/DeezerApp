import { Component } from '@angular/core';
import { ArtistsService } from '../../Services/artists/artists.service';
import { IArtist, ISearch, ISongs } from '../../interfaces/interface';
import {
  Observable,
  catchError,
  debounceTime,
  distinct,
  distinctUntilChanged,
  empty,
  filter,
  forkJoin,
  map,
  of,
  retry,
  startWith,
  switchMap,
} from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent {
  userId: number = 5135649182;
  index: number = 0;
  limit: number = 20;
  // searchInput: FormControl = new FormControl();
  searchInput: string = '';
  artists$!: Observable<IArtist[]>;
  defaultArtists$!: Observable<IArtist[]>;
  artistSearch$!: Observable<ISearch>;
  artists!: IArtist[];

  constructor(private artistService: ArtistsService) {}

  ngOnInit(): void {
    this.getArtists();
  }

  getArtists() {
    this.artists$ = this.artistService
      .getSongs(this.userId, this.index, this.limit)
      .pipe(
        switchMap((songs) => {
          const artistObservables = songs.data.map((song) =>
            this.artistService.getArtist(song.artist.id)
          );
          return forkJoin(artistObservables).pipe(
            distinct((artists) => artists.map((artist) => artist.id))
          );
        })
      );
  }

  applyFilter() {
    if (this.searchInput) {
      this.artists$ = this.artistService
        .searchArtist(this.searchInput, this.index, this.limit)
        .pipe(map((artistData) => artistData.data));
    } else {
      this.getArtists();
    }
  }
}
