import { useParams, Link} from "react-router-dom";
import { useEffect, useState } from "react";
import {get} from "./utils/api";

export default function ProductBrandDetailPage() {
  const { slug } = useParams();
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBrand() {
      try {
        const data = await get(`/brands/${slug}`);
        setBrand(data);
      } catch (error) {
        console.error("Failed to load brand:", error);
      } finally {
        setLoading(false);
      }
    }

    loadBrand();
  }, [slug]);

  if (loading) return <div className="p-4">Loading brand...</div>;
  if (!brand) return <div className="p-4">Brand not found.</div>;

  return (
    <div className="container py-4">

      {/* Breadcrumb */}
      
      {/* <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/brands">Brands</Link></li>
          <li className="breadcrumb-item active" aria-current="page">
            {brand.name}
          </li>
        </ol>
      </nav> */}

      {/* Brand Name */}
      <h1 className="fw-bold mb-4">{brand.name}</h1>

      {/* Products grid */}
      <div className="row">
        {brand.products?.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">

              {/* Product Image */}
              {product.images && product.images.length > 0 && (
                <img
                  src={product.images[0].url}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
              )}

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>

                <p className="card-text small flex-grow-1">
                  {product.description}
                </p>

                <Link
                  to={`/products/${product.slug}`}
                  className="btn btn-primary mt-auto"
                >
                  View Product
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}