import phoneSpecs from './PhoneData';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';
const PhoneInfo = ()=>{
  const {brand} = useParams();
  const phones = phoneSpecs[brand]; 
  return(
    <>
       <table style={{width:'100%',margin:'auto',alignItems:'center'}}>
        <tr style={{display: 'flex', justifyContent:'space-around',
            flexWrap: 'wrap', padding: '20px',marginTop:'6rem'}}>
         {phones.map((phone) => (
          <ProductCard key={phone.id} brand={brand} phone={phone}/>
        ))}
        </tr>
       </table>
    </>
  );
}
export default PhoneInfo;