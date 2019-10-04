import { loadEvents } from "@qawolf/fixtures";
import { buildJob, findUrl } from "./buildJob";
import { loginJob } from "../fixtures/loginJob";

describe("findUrl", () => {
  test("finds starting url of events", async () => {
    const events = await loadEvents("login");

    expect(findUrl(events)).toBe("http://localhost:5000/");
  });
});

describe("buildJob", () => {
  test("creates a job from events", async () => {
    const events = await loadEvents("login");
    const job = buildJob(events, "login");
    expect(job).toMatchObject(loginJob);
  });
});
