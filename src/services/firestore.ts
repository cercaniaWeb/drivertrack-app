// src/services/firestore.ts
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export const addDocument = async (col: string, data: any) => {
  await addDoc(collection(db, col), data);
};

export const getDocuments = async (col: string, field?: string, value?: any) => {
  const q = field && value ? query(collection(db, col), where(field, "==", value)) : collection(db, col);
  const snap = await getDocs(q);
  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
