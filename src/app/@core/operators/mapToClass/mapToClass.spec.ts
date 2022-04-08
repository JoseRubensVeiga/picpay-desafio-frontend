import { of } from "rxjs";
import { exportedForTesting, mapToClass, mapToClasses } from "./mapToClass";

interface IClassStub {
  test: string;
}

class ClassStub {
  test: string;

  constructor(data: IClassStub) {
    this.test = data.test;
  }
}

describe("MapToClass", () => {
  it("should call _mapToClass and return a instance of a class", () => {
    const spy = spyOn(exportedForTesting, "_mapToClass").and.callThrough();

    const result = exportedForTesting._mapToClass<ClassStub>(
      { test: "teste123" },
      ClassStub
    );

    expect(spy).toHaveBeenCalled();
    expect(result).toBeInstanceOf(ClassStub);
  });

  it("should call _mapToClasses and return an array of instances of classes", () => {
    const spy = spyOn(exportedForTesting, "_mapToClasses").and.callThrough();

    const result = exportedForTesting._mapToClasses<ClassStub>(
      [{ test: "teste123" }],
      ClassStub
    );

    expect(spy).toHaveBeenCalled();
    expect(result[0]).toBeInstanceOf(ClassStub);
  });

  it("should use pipe mapToClass and return an Observable of a instance of a class", (done) => {
    const iClass: IClassStub = { test: "teste123" };

    of(iClass)
      .pipe(mapToClass(ClassStub))
      .subscribe((result) => {
        expect(result).toBeInstanceOf(ClassStub);
        done();
      });
  });

  it("should use pipe mapToClasses and return an Observable of an array of instances of classes", (done) => {
    const iClass: IClassStub[] = [{ test: "teste123" }];

    of(iClass)
      .pipe(mapToClasses(ClassStub))
      .subscribe((result) => {
        expect(result[0]).toBeInstanceOf(ClassStub);
        done();
      });
  });
});
