const ReportDisplay = ({
  product_description,
  status,
  classification,
  reason_for_recall,
}) => {
  // product_description is a comma separated string with product name, description and class
  const productName = /[^,]*/g.exec(product_description)?.[0]

  return (
    <div className="ReportDisplay-container">
      <h2>{productName}</h2>
      <div className="ReportDisplay-content">
        <b>{status}</b>
        <div>{reason_for_recall}</div>
        <strong>{classification}</strong>
      </div>
    </div>
  );
};

export default ReportDisplay;
