import { mockClan, mockPlayer } from "./mockData";

const DEMO_MODE = true;

export async function getPlayer(tag) {
  if (DEMO_MODE) {
    return Promise.resolve({
      ...mockPlayer,
      tag: `#${tag}`,
    });
  }

  // Real API code here later
}

export async function getClan(tag) {
  if (DEMO_MODE) {
    return Promise.resolve({
      ...mockClan,
      tag: `#${tag}`,
    });
  }

  // Real API code here later
}