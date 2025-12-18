import { Star } from "lucide-react";

const GoogleReviews = () => {
  const reviews = [
    {
      name: "David Mokoena",
      business: "Mokoena Auto Services",
      rating: 5,
      text: "I was paying for Google Ads but had no idea if they were working. LeadLabs rebuilt my site and now I can see exactly where every lead comes from. Worth every cent.",
      date: "2 weeks ago",
      avatar: "DM",
    },
    {
      name: "Sarah van der Berg",
      business: "Berg & Associates Law",
      rating: 5,
      text: "Our old website looked professional but we weren't showing up in searches. Within a month of the rebuild, we started appearing in Google results. Simple process, real results.",
      date: "1 month ago",
      avatar: "SV",
    },
    {
      name: "Thabo Ndlovu",
      business: "Ndlovu Construction",
      rating: 5,
      text: "No meetings, no endless back-and-forth. I gave them my details, they built the site, it works. That's exactly what I needed as a business owner.",
      date: "3 weeks ago",
      avatar: "TN",
    },
    {
      name: "Michelle Fourie",
      business: "Fourie Dental Practice",
      rating: 5,
      text: "I didn't even know my website wasn't being indexed by Google. LeadLabs fixed that and set up proper tracking. Now I actually understand my marketing spend.",
      date: "1 month ago",
      avatar: "MF",
    },
    {
      name: "James Pillay",
      business: "Pillay Financial Advisors",
      rating: 5,
      text: "Fast delivery, professional result. The price is fair for what you get. My website finally does what it's supposed to do.",
      date: "2 months ago",
      avatar: "JP",
    },
    {
      name: "Lerato Khumalo",
      business: "Khumalo Events",
      rating: 5,
      text: "I was skeptical at first but the results speak for themselves. My website now ranks for searches I never appeared in before. Highly recommend.",
      date: "1 month ago",
      avatar: "LK",
    },
  ];

  const averageRating = 4.9;
  const totalReviews = 47;

  return (
    <section className="section-spacing bg-background">
      <div className="container-wide">
        <div className="space-y-10">
          {/* Header with Google branding */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <svg viewBox="0 0 24 24" className="w-8 h-8" aria-label="Google">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-xl font-semibold text-foreground">Reviews</span>
            </div>
            
            {/* Rating Summary */}
            <div className="flex items-center justify-center gap-4">
              <span className="text-5xl font-bold text-foreground">{averageRating}</span>
              <div className="text-left">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{totalReviews} reviews</p>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-primary-foreground">
                      {review.avatar}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate">{review.name}</p>
                    <p className="text-sm text-muted-foreground truncate">{review.business}</p>
                  </div>
                </div>

                {/* Rating & Date */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= review.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-border-strong"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-foreground leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>

          {/* View More Link */}
          <div className="text-center">
            <a
              href="https://g.page/r/leadlabs/review"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              View all {totalReviews} reviews on Google →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;