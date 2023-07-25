
import Title,{TourInfo} from './Title'
import { tours } from '../data'


function Tours() {
  return (
    <section className="section" id="tours">
      <Title title='Featured' tag='Tours' />

      <div className="section-center featured-center">
        {tours.map((obj)=>{
          return(
            <TourInfo pic={obj.pic} tourDate={obj.tourDate} title={obj.title} text={obj.text} country={obj.country} days={obj.days} cost = {obj.cost}/>
          )
        })}
      </div>
    </section>
  )
}

export default Tours