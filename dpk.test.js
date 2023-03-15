const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("Test cases for the function deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("returns the partition key if it exists in the event", () => {
    const event = { partitionKey: "my-key" };
    expect(deterministicPartitionKey(event)).toEqual("my-key");
  });


  it("handles null event", () => {
    expect(deterministicPartitionKey(null)).toBeTruthy();
  });

  it("handles undefined event", () => {
    expect(deterministicPartitionKey(undefined)).toBeTruthy();
  });

  it("truncates long partition keys", () => {
    const longKey = "a".repeat(300);
    const hash = crypto.createHash("sha3-512").update(longKey).digest("hex");
    const event = { partitionKey: longKey };
    expect(deterministicPartitionKey(event)).toEqual(hash);
  });

  it("handles falsy partition keys", () => {
    const event1 = { partitionKey: false };
    expect(deterministicPartitionKey(event1)).toBeTruthy();
    const event2 = { partitionKey: "" };
    expect(deterministicPartitionKey(event2)).toBeTruthy();
  });
});
