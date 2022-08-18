export default function FooterItem({title, links}) {
  return (
    <div className="flex flex-col">
        <h1 className="text-3xl text-white">{title}</h1>
        {links.map((link)=>{
            return(
                <a href={`${link.url}`} className='text-white'>{link.title}</a>
            )
        })}
    </div>
  )
}