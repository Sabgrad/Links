import { useParams } from "react-router-dom"
import { useGetLinks } from "../Hooks/useGetLinks"
import { MyLink } from "../Components/MyLink"
import styles from '../Styles/LinksPage.module.sass'

export const LinksPage = () => {

  const params = useParams()

  const { links, error } = useGetLinks(params.id)

  return (
    <div className={styles.links_page}>
      {
        links && links.length ?
          <>
            {
              links.map((link) =>
                <MyLink
                  key={link.linkId}
                  linkData={link}
                  redirectTo={true}
                  userId={params.id}
                />
              )
            }
          </>
          :
          <>
            {error || 'none found'}
          </>
      }

    </div>
  )
}