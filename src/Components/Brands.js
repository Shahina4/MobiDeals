import { Link } from "react-router-dom";
const Brands = ()=>{
    return(
        <>
        <div style={{display:'flex',flexDirection:'column',width:'100%',marginTop:'2rem'}}>
        <div className='row' style={{textAlign:'center'}}>
        <div className='col-4'>
            <Link to='/apple'><img src="https://tse3.mm.bing.net/th/id/OIP.9-LAyVpX8-NONiMfKvW90gHaGB?pid=Api&P=0&h=180" alt="Apple" width='200px'/></Link>
        </div>         
        <div className='col-4'>
            <Link to='/samsung'><img src="https://tse3.mm.bing.net/th/id/OIP.8BhbP3CbnIbuWOTaD-cXTAHaHa?pid=Api&P=0&h=180" alt="Samsung"  width='200px'/></Link>
        </div>
        <div className='col-4'>
            <Link to='/xiaomi'><img src="https://tse2.mm.bing.net/th/id/OIP.mwzN6Riv3BvUJC3Kung4DgHaHa?pid=Api&P=0&h=180" alt="Xiaomi"  width='200px'/></Link></div>
        </div>
        <div className='row' style={{textAlign:'center'}}>
        <div className='col-4'>
            <Link to='/huawei'><img src="https://tse3.mm.bing.net/th/id/OIP.ESmR14G9agagz8EEQK2bugHaHa?pid=Api&P=0&h=180" alt="Huawei"  width='200px'/></Link></div>
        <div className='col-4'>
            <Link to='/oneplus'><img src="https://tse4.mm.bing.net/th/id/OIP.WKzQcBKlMIA-R3KfkozGsgHaFj?pid=Api&P=0&h=180" alt="Oneplus"  width='280px'/></Link></div>
        <div className='col-4'>
            <Link to='/realme'><img src="https://tse3.mm.bing.net/th/id/OIP.IbpVqOXIfhUBQVsfVPI2MQHaHa?pid=Api&P=0&h=180" alt="Realme"  width='150px'/></Link></div>
        </div>
        <div className='row' style={{textAlign:'center',marginTop:'5rem'}}>
        <div className='col-4'>
            <Link to='/vivo'><img src="https://tse2.mm.bing.net/th/id/OIP.q4K-bo7Wfy4yDle-wOMLJgHaEc?pid=Api&P=0&h=180" alt="Vivo"  width='150px'/></Link></div>
        <div className='col-4'>
            <Link to='/infinix'><img src="https://tse2.mm.bing.net/th/id/OIP.s5zNSxs-ty1LU0DrmaJb5AHaCG?pid=Api&P=0&h=180" alt="Infinix"  width='200px'/></Link></div>
        <div className='col-4'>
            <Link to='/itel'><img src="https://tse2.mm.bing.net/th/id/OIP.PZpqoRyoGwnxE3w0Ja1eUAHaEK?pid=Api&P=0&h=180" alt="Itel"  width='160px'/></Link></div>
        </div>
        <div className='row' style={{textAlign:'center',margin:'7rem auto'}}>
        <div className='col-12'>
            <Link to='/oppo'><img src="https://tse1.mm.bing.net/th/id/OIP.Q1gcOGqTZEQoQ-kQnGDJewHaD6?pid=Api&P=0&h=180" alt="Oppo"  width='180px'/></Link></div>
        </div>
        </div>
        </>
    )
}
export default Brands;