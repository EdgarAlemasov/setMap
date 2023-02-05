
import ErrorRepository from "../errorRepository";

test ("find error msg", () => {
    const errorMap = new ErrorRepository();
    errorMap.addError(403, "Forbidden");
    errorMap.addError(429, "Too many requests");
    errorMap.addError(500, "Internal server error");
    expect(errorMap.translateCode(429)).toEqual("Too many requests");
});

test ("undefined code", () => {
    const errorMap = new ErrorRepository();
    errorMap.addError(403, "Forbidden");
    errorMap.addError(429, "Too many requests");
    errorMap.addError(500, "Internal server error");
    expect(() => errorMap.translateCode(200)).toThrow("Unknown error");
});