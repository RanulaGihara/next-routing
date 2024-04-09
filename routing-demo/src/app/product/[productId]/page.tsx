interface Params{
    productId:string
}


export default function Product(params:Params) {
  return (
    <>
      <h1>new value {params.productId}</h1>
    </>
  );
}
