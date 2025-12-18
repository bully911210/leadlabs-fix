import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm";

interface FormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FormDialog = ({ open, onOpenChange }: FormDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Fix My Website
          </DialogTitle>
          <p className="text-center text-muted-foreground mt-2">
            5-page website. R2999 once-off.
          </p>
        </DialogHeader>
        <ContactForm onClose={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;