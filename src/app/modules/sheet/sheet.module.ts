import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SheetComponent } from './components/sheet/sheet.component';
import { SheetRoutingModule } from './sheet.routing.module';

@NgModule({
    declarations: [
        // SheetComponent
    ],
    imports: [
        CommonModule,
        SheetRoutingModule
    ],
    exports: [],
    providers: [],
})
export class SheetModule {}