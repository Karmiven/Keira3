import { Injectable, inject } from '@angular/core';
import { SingleRowComplexKeyEditorService } from '@keira/shared/base-abstract-classes';
import { Conditions, CONDITIONS_ID_FIELDS, CONDITIONS_TABLE } from '@keira/shared/acore-world-model';
import { ConditionsHandlerService } from '../conditions-handler.service';

@Injectable({
  providedIn: 'root',
})
export class ConditionsService extends SingleRowComplexKeyEditorService<Conditions> {
  protected override readonly handlerService = inject(ConditionsHandlerService);

  constructor() {
    super(Conditions, CONDITIONS_TABLE, CONDITIONS_ID_FIELDS, null, true);
  }
}
