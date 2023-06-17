import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import {
  IArtist,
  IFullAlbum,
  ISearch,
  ISongs,
  ITopTracks,
} from 'src/app/interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  defaultUserSongs$!: Observable<ISongs>;
  cachedArtists$!: Observable<IArtist[]>;

  constructor(private http: HttpClient) {}

  getSongs(userId: number, index: number, limit: number) {
    if (!this.defaultUserSongs$) {
      this.defaultUserSongs$ = this.getDefaultSongs(userId, index, limit);
    }
    return this.defaultUserSongs$;
  }

  getDefaultSongs(
    userId: number,
    index: number,
    limit: number
  ): Observable<ISongs> {
    return this.http
      .get<ISongs>(
        `${environment.apiUrl}/user/${userId}/flow?index=${index}&limit=${limit}`
      )
      .pipe(tap((data) => console.log('DATA => ', data)));
  }

  getArtist(artistId: number): Observable<IArtist> {
    return this.http.get<IArtist>(`${environment.apiUrl}/artist/${artistId}`);
  }

  searchArtist(
    query: string,
    index: number,
    limit: number
  ): Observable<ISearch> {
    console.log('HERE!!');
    return this.http.get<ISearch>(
      `${environment.apiUrl}/search/artist/?q=${query}&index=${index}&limit=${limit}&output=json`
    );
  }



  getTopTracks(artistId: number, limit: number): Observable<ITopTracks> {
    //https://api.deezer.com/artist/4338602/top?limit=5
    let api = `${environment.apiUrl}/artist/${artistId}/top?limit=${limit}`;
    return this.http.get<ITopTracks>(api);
  }

  getAlbum(albumId: number): Observable<IFullAlbum> {
    return this.http.get<IFullAlbum>(`${environment.apiUrl}/album/${albumId}`);
  }
}
