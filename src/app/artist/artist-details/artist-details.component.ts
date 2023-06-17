import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from 'src/app/Services/artists/artists.service';
import { Observable, forkJoin, map, mergeMap, of, startWith, switchMap } from 'rxjs';
import { IAlbumExtract, IArtist, IFullAlbum, ITopTrack } from '../../interfaces/interface';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss'],
})
export class ArtistDetailsComponent implements OnInit {
  artistId!: number;
  artist$!: Observable<IArtist>;
  topTracks$!: Observable<ITopTrack[]>;
  albums$!: Observable<IFullAlbum[]>;
  constructor(
    private artistsService: ArtistsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.artistId = this.activatedRoute.snapshot.params['id'];
    this.getArtist(this.artistId);
    this.getArtistTopTracks(this.artistId, 5);
  }

  getArtist(artistId: number) {
    this.artist$ = this.artistsService.getArtist(artistId);
  }
  
  getArtistTopTracks(artistId: number, limit: number) {
    this.topTracks$ = this.artistsService
      .getTopTracks(artistId, limit)
      .pipe(map((topTrackData) => topTrackData.data));

    this.albums$ = this.topTracks$.pipe(
      mergeMap((tracks) => {
        const albumObservables = tracks.map((track) =>
          this.artistsService.getAlbum(track.album.id)
        );
        return forkJoin(albumObservables);
      })
    );
  }

}
