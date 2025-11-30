import { createContext, useContext, useState, useEffect } from "react";

const QuoteContext = createContext();

export function QuoteProvider({ children }) {
  const [quoteItems, setQuoteItems] = useState(() => {
    try {
      const saved = localStorage.getItem("quoteCart");
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("quoteCart", JSON.stringify(quoteItems));
  }, [quoteItems]);

  const addToQuote = (attribute, product) => {
    setQuoteItems((prev) => {
      const exists = prev.find((q) => q.attributeId === attribute.id);
      if (exists) {
        return prev.map((q) =>
          q.attributeId === attribute.id ? { ...q, qty: q.qty + 1 } : q
        );
      }
      return [
        ...prev,
        {
          attributeId: attribute.id,
          productName: product.name,
          sku: attribute.sku,
          upc: attribute.upc,
          casePack: attribute.casePack,
          image: attribute.image,
          qty: 1,
        },
      ];
    });
  };

  const updateQty = (attributeId, qty) => {
    setQuoteItems((prev) =>
      prev.map((q) =>
        q.attributeId === attributeId ? { ...q, qty: Math.max(1, qty) } : q
      )
    );
  };

  const removeItem = (attributeId) => {
    setQuoteItems((prev) =>
      prev.filter((q) => q.attributeId !== attributeId)
    );
  };

  const clearQuote = () => setQuoteItems([]);

  return (
    <QuoteContext.Provider
      value={{ quoteItems, addToQuote, updateQty, removeItem, clearQuote }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  return useContext(QuoteContext);
}
