import { Link } from "react-router-dom";
import { urlImage } from "../../../config.js";
import { useEffect, useState } from "react";
import CategoryService from "../../../services/CategoryService.js";
import BrandService from "../../../services/BrandService.js";
import Cross from "../../../assets/images/cross.svg";
import Pro1 from "../../../assets/images/product-1.png";

const ProductItem = (props) => {
  const product = props.product;
  const [insertId, setInsertId] = useState(0);
  const [brands, setBrands] = useState([]);
  const [categorys, setCategorys] = useState([]);
  useEffect(
    function () {
      (async () => {
        const result = await CategoryService.getAll();
        if (result.status === true) {
          setCategorys(result.categorys);
          console.log(result.categorys);
        }
      })();
    },
    [insertId]
  );

  // brand
  useEffect(
    function () {
      (async () => {
        const result = await BrandService.getAll();
        if (result.status === true) {
          setBrands(result.brands);
          console.log(result.brands);
        }
      })();
    },
    [insertId]
  );
  const getCategoryName = (categoryId) => {
    const category = categorys.find((cat) => cat.id === categoryId);
    return category ? category.name : "Unknown";
  };

  const getBrandName = (brandId) => {
    const brand = brands.find((b) => b.id === brandId);
    return brand ? brand.name : "Unknown";
  };
  return (
    <div class="untree_co-section product-section before-footer-section">
    <div class="container">
      <div class="row">
        <div class="">
          <Link class="product-item" to={"/shop/" + product.slug}>
            <img src={urlImage + "products/" + product.image}
            alt={product.image}
             class="img-fluid product-thumbnail" />
            <h3 class="product-title">{product.name}</h3>
                <div className="row">
            <div className="col">
              <span className="card-text fs-5 text-primary">Category</span>

              <p className="card-text fs-5 fw-light text-black">
                {getCategoryName(product.category_id)}
              </p>
            </div>
            <div className="col">
              <span className="card-text fs-5 text-primary">Brand</span>
              <p className="card-text fs-5 fw-light text-center text-black">
                {getBrandName(product.brand_id)}
              </p>
            </div>
          </div>
            <strong class="product-price">
            {new Intl.NumberFormat("de-DE").format(product.price)}đ
            </strong>

            <span class="icon-cross">
              <img src={Cross} class="img-fluid" />
            </span>
          </Link>
        </div>
        </div>
    </div>
    </div>
  );
};

export default ProductItem;
