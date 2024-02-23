import { useEffect, useState } from 'react';
import { query, collection, onSnapshot } from 'firebase/firestore';
import { db } from "../firebase/firebase";

export const useSubjects = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const subjectsQuery = query(collection(db, 'subjects'));
    const unsubscribe = onSnapshot(subjectsQuery, (snapshot) => {
      const newSubjects = snapshot.docs.map((doc) => ({
        subject: doc.data().SubjectName,
        id: doc.id
      }));
      setSubjects(newSubjects);
    });

    return unsubscribe;
  }, []);

  return subjects;
};