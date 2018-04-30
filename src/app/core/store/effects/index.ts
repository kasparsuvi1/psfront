import {RouterEffect} from './router.effects';
import {AccountEffects} from './account.effects';
import {DegreesEffect} from './degrees.effects';
import {OccupationsEffect} from './occupations.effects';

export const effects: any[] = [RouterEffect, AccountEffects, DegreesEffect, OccupationsEffect];

export * from './router.effects';
export * from './account.effects';
export * from './degrees.effects';
export * from './occupations.effects';
