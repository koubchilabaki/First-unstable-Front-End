export class Qualificatif {
  idQualificatif: number;
  maximal: string;
  minimal: string;

  constructor(max: string, min: string){
    this.maximal= max;
    this.minimal= min;
  }
}
