import {RouterEffect} from './router.effects';
import {AccountEffects} from './account.effects';

export const effects: any[] = [RouterEffect, AccountEffects];

export * from './router.effects';
export * from './account.effects';
