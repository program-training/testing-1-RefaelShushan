import {
  len_str,
  palindrome,
  arrayNumber,
  numRoot,
  arrayNumSum,
  fetchUser,
  fibonacci
} from "./foo";

describe("my_test", () => {
  test("len_str", () => {
    const result = len_str("Refael");
    expect(result).toBe(6);
  });
});

describe("my_test", () => {
  test("palindrome", () => {
    const result = palindrome("12231");
    expect(result).toBeTruthy();
  });
});

describe("my_test", () => {
  test("arrayNumber", () => {
    const result = arrayNumber([1, 3, 5, 2]);
    expect(result).toEqual([1, 2, 3, 5]);
  });
});

describe("my_test", () => {
  test("numRoot", () => {
    const result = numRoot(25);
    expect(result).toBe(5);
  });
});

describe("my_test", () => {
  test("arrayNumSum", () => {
    const result = arrayNumSum([1, 3, 2]);
    expect(result).toBe(6);
  });

  test("arrayNumSum", () => {
    const result = arrayNumSum([1, 3, 2]);
    expect(result).toBeGreaterThan(5);
  });

  test("arrayNumSum", () => {
    const result = [1, 3, 2];
    expect(result).toContain(3);
  });
});

describe("my_test", () => {
  test("fetchUser", async () => {
    const result = await fetchUser(1);
    expect(result).toEqual({
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    });
  });
  test("fetchUser", async () => {
    let result = await fetchUser(50);
    expect(result).toThrow;
  });
});

describe("my_test", () => {
  test("fibonacci", () => {
    const result = fibonacci([1,1,2,3,5]);
    expect(result).toBe(8);
  });
  test("fibonacci", () => {
    const result = ()=> fibonacci([1,1,2,3,6]);
    expect(result).toThrowError("IS NOT fibonacci");
  });
});
