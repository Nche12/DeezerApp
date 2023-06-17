export interface IUser {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  country: string;
  tracklist: string;
  type: string;
}

export interface ISongs {
    data: IAllSongs[];
  }

  export interface IAlbum {
    id: number;
    title: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    md5_image: string;
    tracklist: string;
    type: string;
  }

  export interface INestedArtist {
    id: number;
    name: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    tracklist: string;
    type: string;
  }
  
  export interface IAllSongs {
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    duration: number;
    rank: number;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    preview: string;
    md5_image: string;
    artist: INestedArtist;
    album: IAlbum;
    type: string;
  }

  export interface IArtist {
    id: number;
    name: string;
    link: string;
    share: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    nb_album: string;
    nb_fan: string;
    country: string;
    tracklist: string;
    type: string;
  }

  export interface ISearch {
    data: IArtist[];
  }

  export interface ITopTracks {
    data: ITopTrack[];
  }

  export interface ITopTrack {
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    link: string;
    duration: number;
    rank: number;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    preview: string;
    contributors: IContributor[];
    md5_image: string;
    artist: {
      id: number;
      name: string;
      tracklist: string;
      type: string;
    };
    album: IAlbum;
    type: string;
  }
  
  export interface IAlbum {
    id: number;
    title: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    md5_image: string;
    tracklist: string;
    type: string;
  }

  export interface IContributor {
    id: number;
    name: string;
    link: string;
    share: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    radio: boolean;
    tracklist: string;
    type: string;
    role: string;
  }

  export interface IAlbumExtract {
    id: number;
    title: string;
    year: number;
    cover: string;
    cover_big: string;
  }

  export interface IFullAlbum {
    id: number;
    title: string;
    upc: string;
    link: string;
    share: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    md5_image: string;
    genre_id: number;
    genres: {
      data: [
        {
          id: number;
          name: string;
          picture: string;
          type: string;
        }
      ];
    };
    label: string;
    nb_tracks: number;
    duration: number;
    fans: number;
    release_date: string;
    record_type: string;
    available: boolean;
    tracklist: string;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    contributors: IContributor[];
    artist: INestedArtist;
    type: string;
    tracks: {
      data: [
        {
          id: number;
          readable: boolean;
          title: string;
          title_short: string;
          title_version: string;
          link: string;
          duration: number;
          rank: number;
          explicit_lyrics: boolean;
          explicit_content_lyrics: number;
          explicit_content_cover: number;
          preview: string;
          md5_image: string;
          artist: {
            id: number;
            name: string;
            tracklist: string;
            type: string;
          };
          album: IAlbum;
          type: string;
        }
      ];
    };
  }