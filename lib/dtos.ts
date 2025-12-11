export interface HWork {
  howToWorkId: number;
  image: string;
  title: string;
}
export interface Category {
  categoryId: number;
  icon: string;
  categoryName: string;
}

export interface HowToWork {
  howToWorkId: number;
  image: string;
  title: string;
}

export interface Service {
  serviceId: number;
  image: string;
  name: string;
  description: string;
}

export interface Social {
  socialId: number;
  name: string;
  url: string;
}

export interface Work {
  workId: number;
  image: string;
  title: string;
  description: string;
  link: string;
  categoryId: number;
}

export interface HomeResponse {
  categories: Category[];
  howToWorks: HowToWork[];
  services: Service[];
  socials: Social[];
  works: Work[];
}