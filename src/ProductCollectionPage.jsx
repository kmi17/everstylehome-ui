import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {get} from "./utils/api";
import { Link } from "react-router-dom";


export default function ProductCollectionPage() {
  const { slug } = useParams();
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await get(`/collections/${slug}`);
        setCollection(data);
      } catch (error) {
        console.error("Failed to load collection:", error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [slug]);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (!collection) {
    return <div className="p-4">Collection not found.</div>;
  }

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">{collection.name}</h2>

      <div className="row">
        {collection.products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              
              {product.images?.[0]?.url && (
                <img
                  src={product.images[0].url}
                  alt={product.name}
                  className="card-img-top"
                />
              )}

              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="text-muted">${product.price}</p>
                <p className="card-text small">{product.description}</p>

<Link className="btn btn-primary" to={`/products/${product.slug}`}>
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
