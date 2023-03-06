import { IEntityInfo } from '../actions/entity-info';
import { IPageInfo, IRangeInfo } from '../models';
import { EntityIdentity } from '../types/entity-identity';

export interface IEntityError {
  info: IEntityInfo;
  message?: string;
  err?: any;
}

export interface IEntityWithPageInfo<TModel> {
  entities: TModel[];
  pageInfo: IPageInfo;
}

export interface IEntityWithRangeInfo<TModel> {
  entities: TModel[];
  rangeInfo: IRangeInfo;
}
