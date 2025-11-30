import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {get} from "./utils/api";
import { useQuote } from "./QuoteContext";


export default function ProductDetailPage() {
  const { slug } = useParams();
  const { addToQuote } = useQuote();
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

      {/* Breadcrumb (optional) */}
      {/* Example: Home > Products > Collection > Product */}
      
      {/* <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href="/products">Products</a></li>
          {/*  <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
        </ol>
      </nav> */}

      {/* Product title */}
      <h1 className="fw-bold mb-4">{product.name}</h1>

      <div className="row">
        {/* Left: image gallery */}
        <div className="col-md-6">
          {product.images && product.images.length > 0 && (
            <div className="mb-3">
              <img
                src={product.images[0].url}
                alt={product.name}
                className="img-fluid rounded"
              />
            </div>
          )}

          {/* Thumbnail list */}
          <div className="d-flex flex-wrap gap-2">
            {product.images.map((img) => (
              <img
                key={img.id}
                src={img.url}
                alt={product.name}
                className="img-thumbnail"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
            ))}
          </div>
        </div>

        {/* Right: details */}
        <div className="col-md-6">

          <p className="lead mb-4">{product.description}</p>

          {/* Attributes / variants table */}
          {product.attributes && (
            <div className="table-responsive mb-4">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Description</th>
                    <th>SKU</th>
                    <th>UPC</th>
                    <th>Case Pack</th>
                    <th>Quote</th>
                  </tr>
                </thead>
                <tbody>
                  {product.attributes.map((attr) => (
                    <tr key={attr.id}>
                      <td>
                        {attr.image && <img src={attr.image} alt={attr.description} style={{ width: "60px", height: "60px", objectFit: "cover" }} />}
                      </td>
                      <td>{attr.description}</td>
                      <td>{attr.sku}</td>
                      <td>{attr.upc}</td>
                      <td>{attr.casePack}</td>
                      <td>
                        {attr.addToQuote ? (
                          <button className="btn btn-sm btn-success"
                          onClick={() => addToQuote(attr, product)}>Add to Quote</button>
                        ) : (
                          <span className="text-muted">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Recommended spaces (tags/categories) */}
          {product.spaces && (
            <div className="mb-4">
              <strong>Recommended For:</strong>
              <ul>
                {product.spaces.map((space) => (
                  <li key={space.id}>{space.name}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Add more sections if needed (e.g. add to cart, related products) */}
        </div>
      </div>

      {/* Related products or other footer details can go below */}
    </div>
  );
}
