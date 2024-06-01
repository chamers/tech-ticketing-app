// "use client";
import dynamic from "next/dynamic";
const TicketForm = dynamic(() => import("@/components/TicketForm"), {
  ssr: false,
});

//import TicketForm from "@/components/TicketForm";

const NewTicket = () => {
  return <TicketForm />;
};

export default NewTicket;
