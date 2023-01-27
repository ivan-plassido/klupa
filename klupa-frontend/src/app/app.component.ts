import { Component, HostListener } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { Source } from './enums/Source';
import { SourceService } from './services/source.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'klupa-frontend';
  loading = true;
  showSources = false;
  isSourceOpen = false;
  sources: typeof Source = Source;

  constructor(private router: Router, private sourceService: SourceService) {
    this.router.events.subscribe((e: any) => {
      this.navigationInterceptor(e);
    })
  }

  get currentSource() {
    return this.sourceService.getApiSource();
  }

  setApiSource(source: Source) {
    this.sourceService.setApiSource(source);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'F2') {
      this.showSources = !this.showSources;
    }
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true
    }
    if (event instanceof NavigationEnd) {
      this.loading = false
    }
    if (event instanceof NavigationCancel) {
      this.loading = false
    }
    if (event instanceof NavigationError) {
      this.loading = false
    }
  }
}
