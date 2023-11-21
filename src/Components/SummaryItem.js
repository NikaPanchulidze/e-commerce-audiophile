export default function SummaryItem({item}) {
  return (
    <div className="summary-item">
      <img src={item?.image?.desktop.slice(1)} alt="product" />
      <div>
        <p className="summary-item-name">{item.name}</p>
        <p className="summary-item-price">$ {parseFloat(item.price).toLocaleString()}</p>
      </div>
      <p>x{item.quantity}</p>
    </div>  
  );
}