import { Injectable, inject } from '@angular/core';
import { SingleRowEditorService } from '@keira/shared/base-abstract-classes';
import { GAME_TELE_ID, GAME_TELE_NAME, GAME_TELE_TABLE, GameTele } from '@keira/shared/acore-world-model';
import { GameTeleHandlerService } from '../game-tele-handler.service';

@Injectable({
  providedIn: 'root',
})
export class GameTeleService extends SingleRowEditorService<GameTele> {
  protected override readonly handlerService = inject(GameTeleHandlerService);

  constructor() {
    super(GameTele, GAME_TELE_TABLE, GAME_TELE_ID, GAME_TELE_NAME, true);
  }
}
