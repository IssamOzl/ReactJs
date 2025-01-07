import React, { memo, useMemo } from "react";
import PromoEndCountDown from "./PromoEndCountDown";

// Define the props interface
interface VisitorsStockBoxProps {
  stock: number | undefined;
  endDate: Date;
}

// VisitorsStockBox component
  const VisitorsStockBoxMemo = memo(

 function VisitorsStockBox({ stock, endDate }: VisitorsStockBoxProps) {
  const visitorsNum = useMemo(()=>{return Math.trunc(Math.random() * (500 - 1) + 1);},[stock])

  const today = new Date();

  return (
    <div className="review-no">
      {endDate > today && <PromoEndCountDown endDate={endDate} />}
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ fontSize: "16px", textAlign: "left" }}>
              <span id="count">{stock && visitorsNum}</span>
              <span>{stock && ` visiteurs actuelles`}</span>
            </td>

            <td style={{ fontSize: "16px" }}>
              <span id="count">{stock && stock}</span>
              <span>{stock && ` En stock`}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
} )


 
export default VisitorsStockBoxMemo;