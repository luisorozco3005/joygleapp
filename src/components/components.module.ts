import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { AccordionListComponent } from './accordion-list/accordion-list';
import { FlashCardComponent } from './flash-card/flash-card';

export const components = [
 
  FlashCardComponent,
  AccordionListComponent,
];

@NgModule({
  declarations: [components],
  imports: [IonicModule],
  exports: [components]
})
export class ComponentsModule {}

