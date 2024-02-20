import type mongoose from "mongoose";

// mongoose schema validation error handling
export default function validate(
  error:
    | Error
    | mongoose.Error.ValidationError
    | mongoose.Error.CastError
    | mongoose.Error.SyncIndexesError
    | mongoose.Error.DivergentArrayError
    | mongoose.Error.MissingSchemaError
    | mongoose.Error.DocumentNotFoundError
    | mongoose.Error.ObjectExpectedError
    | mongoose.Error,
): Record<string, string> | undefined {
  if (error.name === "ValidationError") {
    const mongooseErrors = error as mongoose.Error.ValidationError;
    const errors: Record<string, string> = {};

    Object.keys(mongooseErrors.errors).forEach((key) => {
      if (mongooseErrors.errors?.[key])
        // @ts-expect-error - we know this is a string
        errors[key] = mongooseErrors.errors[key].message;
    });
    return errors;
  } else {
    // other error handling
  }
}
