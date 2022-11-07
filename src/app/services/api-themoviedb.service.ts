import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filme } from '../interfaces/filme';
import { NowPlaying } from '../interfaces/nowPlaying';

@Injectable({
  providedIn: 'root'
})
export class ApiThemoviedbService {

  private urlNowPlaying = 'https://api.themoviedb.org/3/movie/now_playing'
  private apiKey = '?api_key=2c16f8ee35b155ff6a9776c422452c15'
  private urlLanguage = '&language=pt-BR'

  private search = 'https://api.themoviedb.org/3/search/movie'


  constructor(private http: HttpClient) { }

  carregarNowPlaying(){
    return this.http.get<NowPlaying>(this.urlNowPlaying + this.apiKey + this.urlLanguage)
  }

  carregarPesquisa(search: string){
    return this.http.get<NowPlaying>(this.search + this.apiKey + '&query=' + search + this.urlLanguage)
  }
}