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
export async function fetchAllContentOwnerFromApi() {
  try {
    const res = await fetch("/api/content-owners");
    const data = await res.json();

    if (res.ok && data.success) {
      return data.data;
    }
  } catch (e: any) {
    return null;
  }
}

export async function fetchAllPublisherFromApi() {
  try {
    const res = await fetch("/api/publishers");
    const data = await res.json();

    if (res.ok && data.success) {
      return data.data;
    }
  } catch (e: any) {
    return null;
  }
}
