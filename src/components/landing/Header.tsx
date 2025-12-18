import { Button } from "@/components/ui/button";

interface HeaderProps {
  onCtaClick: () => void;
}

const Header = ({ onCtaClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">LL</span>
            </div>
            <span className="text-xl font-bold text-foreground">LeadLabs</span>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-sm text-muted-foreground">
              R2999 once-off
            </span>
            <Button variant="cta" size="default" onClick={onCtaClick}>
              Fix My Website
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;