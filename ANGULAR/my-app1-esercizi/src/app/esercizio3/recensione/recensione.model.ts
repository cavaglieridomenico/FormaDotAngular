export class Recensione{
  title: string;
  link: string;
  image: string;
  voti: number = 0;
  upLike: number = 0;
  dwDislike: number = 0

  constructor(title: string, link: string, image: string, voti: number){
    this.title = title;
    this.link = link;
    this.image = image;
    this.voti = voti || 0;
  }


  like(): void{
    this.voti += 1;
    this.upLike += 1;
  }

  dislike(): void{
    this.voti -= 1;
    this.dwDislike +=1;
  }
}
