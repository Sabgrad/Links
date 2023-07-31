import { FC, useState } from "react"
import { ref, update } from 'firebase/database'
import { db } from "../Authentication/firebase"
import styles from '../Styles/LinkForm.module.sass'
import { LinkType } from "../Types/types"

type Props = {
  userId: string | null
  handleGetLink: () => void
  linkData: LinkType
}

export const UpdateLinkForm: FC<Props> = ({
  userId,
  handleGetLink,
  linkData,
}) => {

  const [title, setTitle] = useState<string>(linkData.title)
  const [link, setLink] = useState<string>(linkData.link)

  const handleUpdateLink = () => {
    update(ref(db, `links/${userId}/${linkData.linkId}`), {
      title: title,
      link: link
    })
    handleGetLink()
  }


  return (
    <div className={styles.link_worker_form}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Link to page"
      />
      <button onClick={() => handleUpdateLink()}>
        {'Update Link'}
      </button>
    </div>
  )
}