import { ref, remove } from "firebase/database"
import { FC, useState } from "react"
import { db } from "../Authentication/firebase"
import { LinkType } from "../Types/types"
import styles from '../Styles/MyLink.module.sass'
import { UpdateLinkForm } from "./UpdateLinkForm"


type Props = {
  linkData: LinkType
  userId: string
  handleGetLink: () => void;
  redirectTo: boolean
}

export const MyLink: FC<Props> = ({
  linkData,
  userId,
  handleGetLink,
  redirectTo
}) => {

  const [update, setUpdate] = useState<boolean>(false)

  const handleRedirect = () => {
    if (redirectTo) window.open(linkData.link.includes('http') ? linkData.link : `//` + linkData.link, '_blank')
  }

  const handleDeleteLink = () => {
    remove(ref(db, `links/${userId}/${linkData.linkId}`))
    handleGetLink()
  }

  return (
    <div
      className={update ?
        [styles.link_container, styles.update].join(' ') :
        styles.link_container
      }
      onClick={() => handleRedirect()}
    >
      <div className={styles.link}>
        <img className={styles.img} />
        <span className={styles.title}>
          {linkData.title}
        </span>
        {
          redirectTo ?
            null
            :
            <div className={styles.button_container}>
              <button
                className={styles.delete}
                onClick={() => setUpdate(prev => !prev)}
              >
                {update ? 'Close' : 'Update'}
              </button>
              <button
                className={styles.delete}
                onClick={() => handleDeleteLink()}
              >
                Delete
              </button>
            </div>
        }
      </div>
      <div className={styles.update_link}>
        {
          update ?
            <UpdateLinkForm
              userId={userId}
              handleGetLink={handleGetLink}
              linkData={linkData}
            />
            :
            null
        }
      </div>
    </div>
  )
}