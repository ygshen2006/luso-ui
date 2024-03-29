import { useParams } from "react-router";

const ProductComponent = () => {
  var params = useParams();

  return (
    <>
      Product id:
      {params.id}
    </>
  );
};

export default ProductComponent;
