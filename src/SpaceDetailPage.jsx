import { useParams, Link} from "react-router-dom";
import { useEffect, useState } from "react";
import {get} from "./utils/api";

export default function SpaceDetailPage() {
  const { slug } = useParams();
  const [space, setSpace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSpace() {
      try {
        const data = await get(`/spaces/${slug}`);
        setSpace(data);
      } catch (error) {
        console.error("Failed to load space:", error);
      } finally {
        setLoading(false);
      }
    }

    loadSpace();
  }, [slug]);

  if (loading) return <div className="p-4">Loading space...</div>;
  if (!space) return <div className="p-4">Space not found.</div>;

  return (
    <div className="container py-4">

      {/* Breadcrumb */}
      
      {/* <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/spaces">Spaces</Link></li>
          <li className="breadcrumb-item active" aria-current="page">
            {space.name}
          </li>
        </ol>
      </nav> */}

      {/* Space Name */}
      <h1 className="fw-bold mb-4">{space.name}</h1>

      {/* Products grid */}
      <div className="row">
        {space.products?.map((product) => (
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

                <p className="text-muted mb-2">${product.price}</p>

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
