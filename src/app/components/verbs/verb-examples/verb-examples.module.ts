import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerbExamplesComponent } from '@app/components/verbs/verb-examples/verb-examples.component';
import { LabelWithIconModule } from '@core/components/label-with-icon/label-with-icon.module';
import { ButtonGroupModule } from '@core/components/button-group/button-group.module';
import { ConjugationModule } from '@app/components/verbs/conjugation/conjugation.module';



@NgModule({
    declarations: [
        VerbExamplesComponent
    ],
    exports: [
        VerbExamplesComponent
    ],
    imports: [
        CommonModule,
        LabelWithIconModule,
        ButtonGroupModule,
        ConjugationModule
    ]
})
export class VerbExamplesModule { }
