import { Injectable } from '@angular/core';
import { Source } from 'src/app/enums/Source';
import { SourceService } from '../source.service';
import { AssetsQuestionService } from './assets-question.service';
import { DedicatedQuestionService } from './dedicated-question.service';
import { IQuestionService } from './question.service';
import { RenderQuestionService } from './render-question.service';

@Injectable({
    providedIn: 'root'
})
export class QuestionServiceFactory {

    constructor(
        private source: SourceService,
        private assets: AssetsQuestionService,
        private render: RenderQuestionService,
        private dedicated: DedicatedQuestionService) { }

    getService(): IQuestionService {
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


