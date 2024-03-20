import { SafeResourceUrl } from "@angular/platform-browser";

export interface AstronomyPicture {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
  copyright?: string;
  videoUrl?: SafeResourceUrl;
}