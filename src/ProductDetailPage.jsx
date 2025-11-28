import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {get} from "./utils/api";


export default function ProductDetailPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await get(`/products/${slug}`);
        setProduct(data);
      } catch (error) {
        console.error("Failed to load product:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [slug]);

  if (loading) return <div className="p-4">Loading product...</div>;
  if (!product) return <div className="p-4">Product not found.</div>;

  return (
    <div className="container py-4">

      {/* NAME + PRICE */}
      <h2 className="fw-bold">{product.name}</h2>
      <p className="text-muted fs-5">${product.price}</p>

      {/* IMAGE GALLERY */}
      <div className="d-flex gap-3 mb-4">
        {product.images?.map((img) => (
          <img
            key={img.id}
            src={img.url}
            alt={product.name}
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px"
            }}
          />
        ))}
      </div>

      {/* DESCRIPTION */}
      <p className="mb-4">{product.description}</p>

      <hr />

      {/* ATTRIBUTES */}
      <h4 className="fw-bold mt-4">Attributes</h4>
      <div className="row mt-3">
        {product.attributes?.map((attr) => (
          <div key={attr.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              {attr.image && (
                <img
                  src={attr.image}
                  alt={attr.description}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}
              <div className="card-body">
                <h6 className="fw-bold">{attr.description}</h6>
                <p className="mb-1">SKU: {attr.sku}</p>
                <p className="mb-1">UPC: {attr.upc}</p>
                <p className="mb-2">Case Pack: {attr.casePack}</p>

                {attr.addToQuote ? (
                  <button className="btn btn-success w-100">
                    Add to Quote
                  </button>
                ) : (
                  <button className="btn btn-secondary w-100" disabled>
                    Not Available for Quote
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr />

      {/* SPACES */}
      <h4 className="fw-bold mt-4">Recommended For</h4>
      <ul className="mt-2">
        {product.spaces?.map((space) => (
          <li key={space.id}>{space.name}</li>
        ))}
      </ul>
    </div>
  );
}
