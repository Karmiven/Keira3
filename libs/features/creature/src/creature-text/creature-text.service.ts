import { Injectable, inject } from '@angular/core';
import { CREATURE_ID, CREATURE_TEXT_TABLE, CreatureText, EXTRA_ID, TEXT_ID } from '@keira/shared/acore-world-model';
import { MultiRowEditorService } from '@keira/shared/base-abstract-classes';
import { CreatureHandlerService } from '../creature-handler.service';

@Injectable({
  providedIn: 'root',
})
export class CreatureTextService extends MultiRowEditorService<CreatureText> {
  protected override readonly handlerService = inject(CreatureHandlerService);

  constructor() {
    super(CreatureText, CREATURE_TEXT_TABLE, CREATURE_ID, TEXT_ID, EXTRA_ID);
  }
}
