import React, { useEffect, useState } from "react";
import { BackendService, Ticket } from "../backend";
import { useParams } from "react-router-dom";

interface TicketDetailsProps {
  backend: BackendService;
}
interface RouteParams {
  id: string;
}

const TicketDetails = ({ backend }: TicketDetailsProps) => {
  const [ticket, setTicket] = useState<null|Ticket>(null);
  const { id } = useParams<RouteParams>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await backend.ticket(parseInt(id)).toPromise();
      setTicket(result);
    };
    fetchData();

    // Example of use observables directly
    // const sub = backend.tickets().subscribe(result => {
    //   setTickets(result);
    // });
    // return () => sub.unsubscribe(); // clean up subscription
  }, [backend]);

  return (
    <div className="details">
      <h2>Details</h2>
      {ticket ? ticket.id : 'no ticket'}
    </div>
  );
};

export default TicketDetails;
