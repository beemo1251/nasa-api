import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AstronomyPicture } from 'src/app/interfaces/pictures';
import { NasaApiService } from 'src/app/services/nasa-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public dataNasa: AstronomyPicture[] | undefined;

  constructor(private nasaApiService: NasaApiService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.nasaApiService.getData(10).subscribe({
      next: (response: AstronomyPicture[]) => {
        this.dataNasa = response;
        let video = this.dataNasa.filter(item => item.media_type == 'video');
        if (video) {
          video.forEach(element => {
            element.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(element.url + '?autoplay=1&mute=1');
          });
          // console.log(video);
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
