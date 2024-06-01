import { Status } from "@prisma/client";
import { Badge } from "./ui/badge";

interface Props {
  status: Status;
}
//The statusMap object provides a mapping from status values (such as OPEN, IN_PROGRESS, and CLOSED) to corresponding labels and color classes used for UI purposes. This makes it easy to look up the appropriate label and color for any given status, facilitating consistent styling and labeling across the application.
const statusMap: Record<
  Status,
  { label: string; color: "bg-red-400" | "bg-blue-400" | "bg-green-400" }
> = {
  OPEN: { label: "Open", color: "bg-red-400" },
  STARTED: { label: "Started", color: "bg-blue-400" },
  CLOSED: { label: "Closed", color: "bg-green-400" },
};

const TicketStatusBadge = ({ status }: Props) => {
  return (
    <Badge
      className={`${statusMap[status].color} text-background hover:${statusMap[status].color}`}
    >
      {statusMap[status].label}
    </Badge>
  );
};

export default TicketStatusBadge;
