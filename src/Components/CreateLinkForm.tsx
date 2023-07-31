import { FC, useState } from "react"
import { uid } from "uid"
import { ref, set } from 'firebase/database'
import { db } from "../Authentication/firebase"
import styles from '../Styles/LinkForm.module.sass'

type Props = {
  userId: string | null
  handleGetLink: () => void
  amountLinks?: number
}

export const CreateLinkForm: FC<Props> = ({
  userId,
  handleGetLink,
  amountLinks,
}) => {

  const [title, setTitle] = useState<string>('')
  const [link, setLink] = useState<string>('')

  const handleCreateLink = () => {
    if(!title || !link) {alert('title and link cant be empty'); return}
    const linkId = uid(15)
    set(ref(db, `links/${userId}/${linkId}`), {
      title: title,
      link: link,
      linkId: linkId,
      number: amountLinks
    })

    setTitle('')
    setLink('')
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
      <button onClick={() => handleCreateLink()}>
        {'Create Link'}
      </button>
    </div>
  )
}