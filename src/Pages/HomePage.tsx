import { useEffect, useState } from 'react'
import { CreateLinkForm } from '../Components/CreateLinkForm'
import { useAuth } from '../Hooks/useAuth'
import { child, get, ref } from 'firebase/database'
import { db } from '../Authentication/firebase'
import { MyLink } from '../Components/MyLink'
import { LinkType } from '../Types/types'
import styles from '../Styles/HomePage.module.sass'

export const HomePage = () => {

  const { email, userId } = useAuth()

  const [links, setLinks] = useState<LinkType[]>([])

  const handleGetLink = () => {
    const dbRef = ref(db)
    get(child(dbRef, 'links/' + userId))
      .then((snapshot) => {
        const data: LinkType[] = Object.values(snapshot.val() || []);
        if (data) {
          const sortData = data.sort((a, b) => a.number > b.number ? -1 : 1)
          setLinks(sortData)
        } else { setLinks([]) }
      })
      .catch((error) => console.log(error))
  }

  const handleViewLinks = () => {
    window.open(`http://localhost:5173/${userId}`, '_blank')
  }

  useEffect(() => {
    handleGetLink()
  }, [])

  return (
    <div className={styles.homepage}>
      {
        userId ?
          <>
            <div className={styles.createlink_container}>
              <span onClick={() => handleViewLinks()}>
                {email} look at links you'r links
              </span>
              <CreateLinkForm
                userId={userId}
                handleGetLink={handleGetLink}
                amountLinks={links.length}
              />
            </div>
            <div className={styles.links_container}>
              {links.map((link) =>
                <MyLink
                  key={link.linkId}
                  linkData={link}
                  userId={userId}
                  handleGetLink={handleGetLink}
                  redirectTo={false}
                />
              )}
            </div>
          </>
          :
          <>
            Щоб створювати свої силки зареєструйтесь
          </>
      }
    </div>
  )
}