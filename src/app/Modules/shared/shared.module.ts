import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangdirRegDirective } from 'src/app/Directives/langdir-reg.directive';

@NgModule({
  declarations: [LangdirRegDirective],
  imports: [CommonModule],
  exports: [LangdirRegDirective],
})
export class SharedModule {}
