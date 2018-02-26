import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentsPage } from './comments';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
      CommentsPage,
  ],
  imports: [
      ComponentsModule,
      IonicPageModule.forChild(CommentsPage),
  ],
})
export class CommentsPageModule {}
