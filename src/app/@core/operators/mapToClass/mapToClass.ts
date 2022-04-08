import { OperatorFunction } from "rxjs";
import { map } from "rxjs/operators";

const _mapToClass = <T>(data: any, _class: new (data: any) => T): T =>
  new _class(data);

const _mapToClasses = <T>(data: any[], _class: new (data?: any) => T): T[] =>
  data.map((d) => _mapToClass(d, _class));

export const mapToClass = <T>(
  _class: new (data?: any) => T
): OperatorFunction<any, T> => map((value) => _mapToClass(value, _class));

export const mapToClasses = <T>(
  _class: new (data?: any) => T
): OperatorFunction<any, T[]> => map((value) => _mapToClasses(value, _class));

export const exportedForTesting = {
  _mapToClass,
  _mapToClasses,
};
