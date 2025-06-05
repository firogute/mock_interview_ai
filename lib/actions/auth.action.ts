import { db } from "@/firebase/admin";
import { error } from "console";

export async function signUp(params: SignUpParams) {
  const { uid, email, password } = params;
  try {
    const userRecord = await db.collection("users").doc(uid).get();
    if (userRecord.exists) {
      return {
        success: false,
        message: "User already exists with this email.",
      };
    }

    await db.collection("users").doc(uid).set({
      name,
      email,
    });
  } catch (e: any) {
    console.error("Error signing up:", e);
    if (e.code === "auth/email-already-exists") {
      return {
        success: false,
        message: "Email already exists. Please use a different email address.",
      };
    }

    return {
      success: false,
      message: "An error occurred during sign up. Please try again later.",
    };
  }
}
