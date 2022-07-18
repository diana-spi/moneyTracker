import "./TotalBlock.scss";

function TotalBlock() {
  return (
    <div className="total-block">
      <div className="total-block__income">
        <div className="total-block__income-sum"></div>
        <div className="total-block__income-title"></div>
      </div>
      <div className="total-block__outcome"></div>
      <div className="total-block__outcome-sum"></div>
      <div className="total-block__outcome-title"></div>
    </div>
  );
}
