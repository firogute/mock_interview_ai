import { db } from "@/firebase/admin";

export async function getInterviewByUserId(
  userId: string
): Promise<Interview[] | null> {
  const interviews = await db
    .collection("interviews")
    .where("userID", "==", userId)
    .orderBy("createdAt", "desc")
    .get();

  if (interviews.empty) return null;

  const result: Interview[] = interviews.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];

  return result;
}

export async function getLatestInterviews(
  params: GetLatestInterviewsParams
): Promise<Interview[] | null> {
  const { userId, limit = 20 } = params;
  const interviews = await db
    .collection("interviews")
    .orderBy("createdAt", "desc")
    .where("finalized", "==", true)
    .where("userID", "!=", userId)
    .limit(limit)
    .get();

  if (interviews.empty) return null;

  const result: Interview[] = interviews.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];

  return result;
}

export async function getInterviewById(id: string): Promise<Interview | null> {
  const interview = await db.collection("interviews").doc(id).get();

  if (!interview) return null;

  return interview.data() as Interview | null;
}
