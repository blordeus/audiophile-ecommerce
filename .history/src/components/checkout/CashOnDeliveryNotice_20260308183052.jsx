import iconCashOnDelivery from "../../assets/icons/icon-cash-on-delivery.svg";

function CashOnDeliveryNotice() {
  return (
    <div className="grid gap-8 md:grid-cols-[48px_1fr] md:items-start">
      <img
        src={iconCashOnDelivery}
        alt="Cash on Delivery"
        className="h-12 w-12"
      />

      <p className="body-text text-black/50">
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your address
        is correct so that your order will not be cancelled.
      </p>
    </div>
  );
}

export default CashOnDeliveryNotice;