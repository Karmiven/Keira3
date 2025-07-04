import { Injectable, inject } from '@angular/core';
import { GAMEOBJECT_SPAWN_ADDON_ID_2, GAMEOBJECT_SPAWN_ADDON_TABLE, GameobjectSpawnAddon } from '@keira/shared/acore-world-model';
import { GameobjectHandlerService } from '../gameobject-handler.service';
import { MultiRowExternalEditorService } from '@keira/shared/base-abstract-classes';

@Injectable({
  providedIn: 'root',
})
export class GameobjectSpawnAddonService extends MultiRowExternalEditorService<GameobjectSpawnAddon> {
  protected override readonly handlerService = inject(GameobjectHandlerService);

  constructor() {
    super(GameobjectSpawnAddon, GAMEOBJECT_SPAWN_ADDON_TABLE, GAMEOBJECT_SPAWN_ADDON_ID_2);
  }

  selectQuery(id: string | number) {
    return this.queryService.query<GameobjectSpawnAddon>(
      `SELECT a.* FROM gameobject AS g INNER JOIN gameobject_addon AS a ON g.guid = a.guid WHERE g.id = ${id}`,
    );
  }
}
