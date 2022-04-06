import { FormControl, ValidationErrors } from "@angular/forms";

import { parse, isValid } from "date-fns";
import { onlyNumbers } from "../utils/helpers";

export class CustomValidators {
  public static brazilianDate(control: FormControl): ValidationErrors {
    if (!control.value) return null;

    const value = onlyNumbers(control.value);

    try {
      const date = parse(value, "ddMMyyyy", new Date());

      if (isValid(date)) {
        return null;
      }

      return { brazilianDate: true };
    } catch {
      return { brazilianDate: true };
    }
  }
}
