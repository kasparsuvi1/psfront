import {RouterEffect} from './router.effects';
import {AccountEffects} from './account.effects';
import {DegreesEffect} from './degrees.effects';
import {OccupationsEffect} from './occupations.effects';
import {AdvertsEffect} from './advert.effects';
import {ResponsesEffect} from './response.effects';

export const effects: any[] = [RouterEffect, AccountEffects, DegreesEffect, OccupationsEffect, AdvertsEffect, ResponsesEffect];

export * from './router.effects';
export * from './account.effects';
export * from './degrees.effects';
export * from './occupations.effects';
export * from './advert.effects';
export * from './response.effects';
