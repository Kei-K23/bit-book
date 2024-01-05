import { db } from "./db";

export async function fetchAllContentOwner() {
  try {
    return await db.contentOwner.findMany();
  } catch (e: any) {
    return null;
  }
}

export async function fetchAllPublisher() {
  try {
    return await db.publisher.findMany();
  } catch (e: any) {
    return null;
  }
}
