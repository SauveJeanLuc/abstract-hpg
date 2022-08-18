import services from '../data/services'
import Service from './atoms/Service';

export default function ServicePage() {
  return (
    <div className='flex flex-row flex-wrap items-center justify-evenly m-auto lg:ml-[240px]'>
        {services.map((service) => {
            const {imageUrl, title, description} = service;
            return(
                <Service imageUrl={imageUrl} title={title} description={description} serviceStyle={"basis-1/2 py-8"}/>
            )
        })}

    </div>
  )
}