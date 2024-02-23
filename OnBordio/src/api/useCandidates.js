import { useEffect, useState } from 'react';
import { query, collection, onSnapshot } from 'firebase/firestore';
import { db } from "../firebase/firebase";

export const useCandidates = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const candidatesQuery = query(collection(db, 'candidates'));
    const unsubscribe = onSnapshot(candidatesQuery, (snapshot) => {
      const newCandidates = snapshot.docs.map((doc) => ({
        email: doc.data().candidatEmail,
        id: doc.id
      }));
      setCandidates(newCandidates);
    });

    return unsubscribe;
  }, []);

  return candidates;
};