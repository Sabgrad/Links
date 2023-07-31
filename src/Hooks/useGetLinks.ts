import { child, get, ref } from "firebase/database";
import { db } from "../Authentication/firebase";
import { useEffect, useState } from "react";
import { LinkType } from "../Types/types";


export const useGetLinks = (userId: string): {links: LinkType[], error: string} => {

  const [links, setLinks] = useState<LinkType[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const dbRef = ref(db)
    const newLocal = 'links/' + userId;
    get(child(dbRef, newLocal))
      .then((snapshot) => {
        const data = snapshot.val();
        data ? setLinks(Object.values(data)) : setLinks([])
      })
      .catch((error) => setError(error))
  }, [userId])

  return {links, error}
}