import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Source } from '../enums/Source';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  private apiSource: Source = localStorage.getItem('dataSource') ? localStorage.getItem('dataSource') as Source : Source.Render;
  private apiSourceChange: Subject<Source> = new Subject<Source>();

  constructor() {
    this.apiSourceChange.subscribe(value => this.apiSource = value);
  }

  getApiSource(): Source {
    return this.apiSource;
  }

  setApiSource(source: Source) {
    localStorage.setItem('dataSource', source);
    this.apiSourceChange.next(source);
  }
}
