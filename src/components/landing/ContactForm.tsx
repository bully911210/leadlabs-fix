import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Check } from "lucide-react";
import { sendEmail, type EmailData } from "@/utils/email";

interface ContactFormProps {
  onClose?: () => void;
}

const ContactForm = ({ onClose }: ContactFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    hasWebsite: "yes",
    websiteUrl: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using Resend API
      const emailData: EmailData = {
        businessName: formData.businessName,
        contactName: formData.contactName,
        email: formData.email,
        phone: formData.phone,
        hasWebsite: formData.hasWebsite,
        websiteUrl: formData.websiteUrl,
        notes: formData.notes,
      };

      const result = await sendEmail(emailData);

      if (result.success) {
        setIsSubmitted(true);
        toast({
          title: "Form submitted successfully",
          description: "We'll be in touch within 24 hours.",
        });
      } else {
        // Handle email sending failure
        toast({
          variant: "destructive",
          title: "Failed to send message",
          description: result.message,
        });
      }
    } catch (error) {
      // Handle unexpected errors
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Please try again or contact us directly.",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Thank you</h3>
        <p className="text-muted-foreground mb-6">
          We've received your details and will be in touch within 24 hours.
        </p>
        {onClose && (
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="businessName">Business Name *</Label>
          <Input
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            required
            placeholder="Your business name"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="contactName">Your Name *</Label>
          <Input
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            required
            placeholder="Full name"
            className="mt-1.5"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@company.com"
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Your phone number"
              className="mt-1.5"
            />
          </div>
        </div>

        <div>
          <Label className="mb-3 block">Do you have an existing website?</Label>
          <RadioGroup
            value={formData.hasWebsite}
            onValueChange={(value) => setFormData(prev => ({ ...prev, hasWebsite: value }))}
            className="flex gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes" className="font-normal cursor-pointer">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no" className="font-normal cursor-pointer">No</Label>
            </div>
          </RadioGroup>
        </div>

        {formData.hasWebsite === "yes" && (
          <div>
            <Label htmlFor="websiteUrl">Current Website URL</Label>
            <Input
              id="websiteUrl"
              name="websiteUrl"
              type="url"
              value={formData.websiteUrl}
              onChange={handleChange}
              placeholder="https://yourwebsite.com"
              className="mt-1.5"
            />
          </div>
        )}

        <div>
          <Label htmlFor="notes">Additional Notes (Optional)</Label>
          <Textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Anything else we should know?"
            className="mt-1.5 min-h-[100px]"
          />
        </div>
      </div>

      <Button 
        type="submit" 
        variant="cta" 
        size="xl" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
        {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        By submitting, you agree to be contacted about your website project.
      </p>
    </form>
  );
};

export default ContactForm;