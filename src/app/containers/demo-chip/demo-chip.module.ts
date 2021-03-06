import { DemoChipComponent } from './demo-chip.component';
import { GridModule } from './../../components/grid/grid.module';
import { ChipModule } from './../../components/chip/chip.module';
import { TableModule } from './../../components/table/table.module';
import { CodeModule } from './../../components/code/code.module';
import { TabGroupModule } from './../../components/tab/tab-group.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[
        CommonModule,
        TabGroupModule,
        CodeModule,
        TableModule,
        ChipModule,
        GridModule
    ],
    declarations:[DemoChipComponent]
})
export class DemoChipModule{}