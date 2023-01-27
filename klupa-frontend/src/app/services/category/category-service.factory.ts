import { Injectable } from '@angular/core';
import { Source } from 'src/app/enums/Source';
import { SourceService } from '../source.service';
import { AssetsCategoryService } from './assets-category.service';
import { ICategoryService } from './category.service';
import { DedicatedCategoryService } from './dedicated-category.service';
import { RenderCategoryService } from './render-category.service';

@Injectable({
    providedIn: 'root'
})
export class CategoryServiceFactory {

    constructor(
        private source: SourceService,
        private assets: AssetsCategoryService,
        private render: RenderCategoryService,
        private dedicated: DedicatedCategoryService) { }

    getService(): ICategoryService {
        const apiSource = this.source.getApiSource();
        if (apiSource == Source.Assets) {
            return this.assets;
        } else if (apiSource == Source.Render) {
            return this.render;
        } else {
            return this.dedicated;
        }
    }


}


