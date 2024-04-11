
export interface ImageNasaApi {
  href: string;
  data: Data[];
  links: Link[];
}

interface Data {
  center: string;
  title: string;
  keywords: string[];
  nasa_id: string;
  date_created: string;
  media_type: "image" | "video";
  description: string;
}

interface Link {
  href: string;
  rel: "preview";
  render: "image";
}