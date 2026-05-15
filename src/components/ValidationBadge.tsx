import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { siteConfig } from "../config/site-config";

interface ValidationBadgeProps {
  status: "verified" | "review" | "official" | "citizen";
  showTooltip?: boolean;
}

export function ValidationBadge({
  status,
  showTooltip = true,
}: ValidationBadgeProps) {
  const badge = siteConfig.validation.badges.find((b) => b.id === status);

  if (!badge) return null;

  const colorClasses = {
    green: "bg-green-100 text-green-700 border-green-300",
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-300",
    blue: "bg-blue-100 text-blue-700 border-blue-300",
    purple: "bg-purple-100 text-purple-700 border-purple-300",
  };

  const BadgeContent = (
    <Badge
      variant="outline"
      className={`${colorClasses[badge.color as keyof typeof colorClasses]} gap-1`}
    >
      <span>{badge.icon}</span>
      <span>{badge.label}</span>
    </Badge>
  );

  if (!showTooltip) {
    return BadgeContent;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{BadgeContent}</TooltipTrigger>
        <TooltipContent>
          <p className="text-sm">{badge.description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
