export interface Project {
  titre: string;
  dataTitre: string;
  date: string;
  paragraphes: string[];
  links: Link[];
  skills: Skill[];
  mainResource: VisualResource;
  secondResources: VisualResource[];
  techs: string[];
}

export interface VisualResource {
  url: string;
  isVideo?: boolean;
}

export interface Link {
  url: string;
  display: string;
  icon: string;
  iconName: string;
}

export interface Skill {
  libelle: string;
  icon: string;
}
