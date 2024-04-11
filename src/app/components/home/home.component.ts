import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageNasaApi } from 'src/app/interfaces/images';
import { AstronomyPicture } from 'src/app/interfaces/pictures';
import { NasaApiService } from 'src/app/services/nasa-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public dataNasa: AstronomyPicture[] | undefined;
  public imageNasa: ImageNasaApi[] | undefined;
  public vistaGrid = 'dataNasa';
  public buscar = ''

  constructor(private nasaApiService: NasaApiService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.nasaApiService.getData(10).subscribe({
      next: (response: AstronomyPicture[]) => {
        this.vistaGrid = 'dataNasa';
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

  buscarFn() {
    this.nasaApiService.getImages(this.buscar).subscribe({
      next: (response: ImageNasaApi[]) => {
        this.vistaGrid = 'imageNasa'
        this.imageNasa = response;
        // let video = this.imageNasa.filter(item => item.data[0].media_type == 'video');
        // if (video) {
        //   video.forEach(element => {
        //     element.
        //   })
        // }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
