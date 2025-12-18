import { Play, Quote } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const VideoTestimonial = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="section-spacing bg-background">
      <div className="container-narrow">
        <div className="bg-foreground rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Video Thumbnail */}
            <div className="relative aspect-video md:aspect-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <button
                  onClick={() => setVideoOpen(true)}
                  className="w-20 h-20 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
                  aria-label="Play testimonial video"
                >
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="text-xs text-muted-foreground">2:34 • Client Testimonial</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <blockquote className="text-xl md:text-2xl font-medium text-background leading-relaxed mb-6">
                "I spent R40,000 on a website that looked beautiful but generated zero leads. LeadLabs rebuilt it for R2999 and within two weeks I was getting enquiries from Google."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">DM</span>
                </div>
                <div>
                  <p className="font-semibold text-background">David Mokoena</p>
                  <p className="text-sm text-background/60">Owner, Mokoena Auto Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="sm:max-w-4xl p-0 bg-foreground border-none">
          <div className="aspect-video bg-foreground flex items-center justify-center">
            <p className="text-background/60 text-sm">Video testimonial placeholder</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoTestimonial;