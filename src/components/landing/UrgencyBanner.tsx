import { Clock, Users } from "lucide-react";

const UrgencyBanner = () => {
  return (
    <div className="bg-primary text-primary-foreground py-3">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>
              <strong>3 slots remaining</strong> this month
            </span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-primary-foreground/30"></div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Average delivery: 5 business days</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;