import { useNavigate } from "react-router-dom";
import Overlay from "../common/Overlay";
import ButtonPrimary from "../common/ButtonPrimary";
import OrderConfirmationSummary from "./OrderConfirmationSummary";
import iconOrderConfirmation from "../../assets/icons/icon-order-confirmation.svg";

function OrderConfirmationModal({
  isOpen,
  order,
  onClose,
  onConfirm,
}) {
  const navigate = useNavigate();

  if (!isOpen || !order) return null;

  function handleBackHome() {
    onConfirm();
    onClose();
    navigate("/");
  }

  return (
    <>
      <Overlay isOpen={isOpen} onClick={() => {}} className="z-40" />

      <div className="fixed left-6 right-6 top-1/2 z-50 max-h-[90vh] -translate-y-1/2 overflow-y-auto rounded-lg bg-white p-8 md:left-1/2 md:right-auto md:w-[540px] md:-translate-x-1/2 md:p-12">
        <img
          src={iconOrderConfirmation}
          alt=""
          className="h-16 w-16"
        />

        <h2 className="mt-6 text-[24px] font-bold uppercase leading-[28px] tracking-[0.86px] md:text-[32px] md:leading-[36px] md:tracking-[1.14px]">
          Thank you
          <br />
          for your order
        </h2>

        <p className="body-text mt-4 text-black/50">
          You will receive an email confirmation shortly.
        </p>

        <div className="mt-6">
          <OrderConfirmationSummary
            items={order.items}
            grandTotal={order.grandTotal}
          />
        </div>

        <ButtonPrimary onClick={handleBackHome} className="mt-6 w-full">
          Back to Home
        </ButtonPrimary>
      </div>
    </>
  );
}

export default OrderConfirmationModal;