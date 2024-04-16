import { type User } from "./../db/Models/User";
import "@testing-library/jest-dom";
import {
  cleanHTML,
  getUserTitle,
  languageArrayJoin,
  textOverflow,
  parseHTML,
} from ".";
import { type ObjectId } from "mongoose";
import validate from "./validate";

describe("Utilities", () => {
  it("Gets proper user title from User object", () => {
    const user: User = {
      name: "Zavaar Shah",
      email: "test@gmail.com",
      uid: "1234",
      _id: "5678" as unknown as ObjectId,
      lastLogin: new Date(),
    };

    expect(getUserTitle(user)).toBe("Zavaar Shah");
    delete user.name;
    expect(getUserTitle(user)).toBe("test@gmail.com");
    delete user.email;
    expect(getUserTitle(user)).toBe("1234");
    expect(getUserTitle(null as unknown as User)).toBe("[Deleted User]");
  });

  it("Joins array of strings with the last item being joined with 'and'", () => {
    expect(languageArrayJoin(["one", "two", "three"])).toBe(
      "one, two and three",
    );
  });

  it("Truncates text to a certain length", () => {
    const lorem = "Do et proident fugiat aute qui aute qui dolore culpa.";
    expect(textOverflow(lorem, 10)).toBe("Do et proi...");
  });

  it("Cleans HTML by removing all tags", () => {
    const html = "<h1>Hello world!</h1>";
    expect(cleanHTML(html)).toBe("Hello world!");
  });

  it("Applies site styles from raw HTML", () => {
    let html = `
<div>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3 style="color: red;">Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <a href="https://example.com">Link</a>
</div>
`;
    expect(parseHTML(html)).toBe(`<html><head></head><body><div>
    <h1 class="text-4xl font-bold">Heading 1</h1>
    <h2 class="text-3xl font-semibold">Heading 2</h2>
    <h3 style="color: red;" class="text-2xl font-semibold">Heading 3</h3>
    <h4 class="text-xl font-semibold">Heading 4</h4>
    <h5 class="text-lg font-semibold">Heading 5</h5>
    <h6 class="text-normal font-semibold">Heading 6</h6>
    <a href="https://example.com" class="tt-link">Link</a>
</div>
</body></html>`);
    html = "<div></div>";
    expect(parseHTML(html)).toBe(
      "<html><head></head><body><div></div></body></html>",
    );
  });

  it("Parses Mongoose validation errors correctly", () => {
    const error = {
      name: "ValidationError",
      errors: {
        email: {
          message: "Email is required",
        },
      },
    };
    expect(validate(error as unknown as Error)).toEqual({
      email: "Email is required",
    });

    const error2 = {
      name: "ValidationError",
      errors: {
        email: {
          message: "Email is required",
        },
        password: {
          message: "Password is required",
        },
      },
    };

    expect(validate(error2 as unknown as Error)).toEqual({
      email: "Email is required",
      password: "Password is required",
    });
  });
});
