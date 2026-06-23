import { Star, Quote } from "lucide-react";

export type Review = {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  source?: string;
};

// ⬇ Replace this array with actual reviews fetched from your backend / API
const sampleReviews: Review[] = [
  {
    id: "1",
    name: "Amit Sharma",
    rating: 5,
    text: "The best place to find authentic Nepali spices and momos in Tokyo! The owners are incredibly welcoming and the quality is unmatched. Highly recommend the handmade chutney.",
    date: "2026-05-15",
    source: "Google",
  },
  {
    id: "2",
    name: "Yuki Tanaka",
    rating: 5,
    text: "I stumbled upon Manakamana while looking for Himalayan ingredients and I'm so glad I did. The dal, rice, and pickles taste just like home. A hidden gem in Shin-Okubo!",
    date: "2026-05-28",
    source: "Google",
  },
  {
    id: "3",
    name: "Priya Gurung",
    rating: 4,
    text: "Great selection of Nepali staples — from ghee and beaten rice to puja items. The staff goes out of their way to help you find what you need. Parking can be tricky though!",
    date: "2026-06-02",
    source: "Google",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < count
              ? "fill-amber-400 dark:fill-[hsl(48_100%_50%)] text-amber-400 dark:text-[hsl(48_100%_50%)]"
              : "fill-stone-200 dark:fill-[hsl(224_30%_18%)] text-stone-200 dark:text-[hsl(224_30%_18%)]"
          }`}
        />
      ))}
    </div>
  );
}

export default function Reviews({ reviews = sampleReviews }: { reviews?: Review[] }) {
  return (
    <section className="py-20 bg-transparent" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
            Real reviews from people who love bringing the taste of Nepal into their homes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-[hsl(224_40%_9%)] rounded-2xl p-8 border border-stone-100 dark:border-[hsl(224_30%_18%)] shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-6 flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="border-t border-stone-100 dark:border-[hsl(224_30%_18%)] pt-4 mt-auto">
                <Stars count={review.rating} />
                <div className="flex items-center justify-between mt-3">
                  <span className="font-semibold text-stone-900 dark:text-stone-100">{review.name}</span>
                  {review.source && (
                    <span className="text-xs text-stone-400 dark:text-stone-500">{review.source}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: placeholder for future review count / CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-stone-400 dark:text-stone-500">
            Reviews shown are samples &mdash; replace <code className="text-primary bg-primary/5 px-1.5 py-0.5 rounded text-xs dark:bg-[hsl(224_80%_65%)]/10">sampleReviews</code> in <code className="text-primary bg-primary/5 px-1.5 py-0.5 rounded text-xs dark:bg-[hsl(224_80%_65%)]/10">components/Reviews.tsx</code> with API data.
          </p>
        </div>
      </div>
    </section>
  );
}