import { Component } from '@angular/core';
import { ArtistsService } from '../../Services/artists/artists.service';
import { IArtist, ISearch, ISongs } from '../../interfaces/interface';
import {
  Observable,
  debounceTime,
  distinct,
  distinctUntilChanged,
  forkJoin,
  map,
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
  searchInput: FormControl = new FormControl();

  artists$!: Observable<IArtist[]>;
  defaultArtists$!: Observable<IArtist[]>;
  artistSearch$!: Observable<ISearch>;
  artists!: IArtist[];

  constructor(private artistService: ArtistsService) {}

  ngOnInit() {
    this.searchFunction();
  }

  searchFunction() {
    this.artists$ = this.searchInput.valueChanges.pipe(
      startWith(''), // starts the stream with '' so that your initial artists are loaded
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term) => {
        if (term) {
          return this.artistService
            .searchArtist(term, this.index, this.limit)
            .pipe(map((artistData) => artistData.data));
        } else {
          return this.getArtists();
        }
      })
    );
  }

  getArtists() {
    return this.artistService
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
}
