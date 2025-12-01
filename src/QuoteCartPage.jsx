import { useQuote } from "./QuoteContext";
import { Link } from "react-router-dom";

export default function QuoteCartPage() {
  const { quoteItems, updateQty, removeItem } = useQuote();

  if (quoteItems.length === 0)
    return <div className="container py-4">No quote items added.</div>;

  return (
    <div className="container py-4">
      <h2 className="mb-4">Quote Cart</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>SKU</th>
            <th>UPC</th>
            <th>Case Pack</th>
            <th>Qty</th>
            
            <th></th>
          </tr>
        </thead>
        <tbody>
          {quoteItems.map((item) => (
            <tr key={item.attributeId}>
              <td>
                <img
                  src={item.image}
                  alt=""
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
              </td>
              <td>{item.productName}</td>
              <td>{item.sku}</td>
              <td>{item.upc}</td>
              <td>{item.casePack}</td>
              <td>
                <input
                  type="number"
                  value={item.qty}
                  min="1"
                  onChange={(e) =>
                    updateQty(item.attributeId, Number(e.target.value))
                  }
                  className="form-control"
                  style={{ width: "80px" }}
                />
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItem(item.attributeId)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/request-quote" className="btn btn-primary">
        Proceed to Quote Request
      </Link>
    </div>
  );
}
