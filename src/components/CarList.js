import {useSelector, useDispatch} from 'react-redux';
import { removeCar } from '../store';

function CarList(){
    const dispatch = useDispatch();
    const {cars, name} = useSelector(({form, cars: {data, searchTerm}})=>{
        const filteredcars= data.filter((car)=>{
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        return{
            cars: filteredcars,
            name: form.name
        }
    });
    const handleCarDelete = (car)=>{
        dispatch(removeCar(car.id));
    }
    const renderedcars = cars.map((car)=>{
        //decide if the car should be bold
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
        return(
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button onClick={()=>handleCarDelete(car)} className="button is-danger">Delete</button>
            </div>
        );
    });
    return(
        <div className="car-list">
            {renderedcars}
        </div>
    )
}
export default CarList;