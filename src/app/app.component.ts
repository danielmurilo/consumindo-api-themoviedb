import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Filme } from './interfaces/filme';
import { NowPlaying } from './interfaces/nowPlaying';
import { ApiThemoviedbService } from './services/api-themoviedb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'consumindo-api-themoviedb';
    nowPlaying!: NowPlaying
    procurarFilmeForm: FormGroup = this.fb.group({
    searchFilme: ['', [Validators.required]]
  })

  constructor(private theMovieService: ApiThemoviedbService, private fb: FormBuilder,){}

  ngOnInit(){
    this.theMovieService.carregarNowPlaying().subscribe(
      (json) => {        
        this.nowPlaying = json
      }
    )
  }

  procurarFilme(){
    let search = this.procurarFilmeForm.get('searchFilme')?.value
    search = search.replace(/\n/g, '+')
    this.theMovieService.carregarPesquisa(search).subscribe(
      (json) => {
        this.nowPlaying = json
      }
    )
  }
  
}
