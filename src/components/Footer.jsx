import links from '../data/links'
import FooterItem from './atoms/FooterItem'

export default function Footer() {
  return (
    <div className="bg-black p-20 flex flex-row justify-evenly">
        {links.map((link) => {
            console.log('Going to See Title')
            console.log(link.title);
            console.log(link.links);
            return(
                <FooterItem title={link.title} links={link.links}/>             
            )

        })}
    </div>
  )
}