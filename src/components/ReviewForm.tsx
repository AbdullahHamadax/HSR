import { AnimatePresence, motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface ReviewFormProps {
  productName?: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ productName = "HSR" }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [errors, setErrors] = useState<{ comment?: string; rating?: string }>(
    {}
  );
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const savedComment = localStorage.getItem("review_comment");
    const savedRating = localStorage.getItem("review_rating");
    const savedSubmitted = localStorage.getItem("review_submitted");

    if (savedComment) setComment(savedComment);
    if (savedRating) setRating(parseInt(savedRating));
    if (savedSubmitted === "true") setSubmitted(true);
  }, []);

  const handleRatingClick = (selectedRating: number) => {
    setRating(selectedRating);
    localStorage.setItem("review_rating", selectedRating.toString());

    if (errors.rating) {
      setErrors({ ...errors, rating: undefined });
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setComment(value);
    localStorage.setItem("review_comment", value);

    if (errors.comment && value.length >= 10) {
      setErrors({ ...errors, comment: undefined });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { comment?: string; rating?: string } = {};
    if (comment.length < 10) {
      newErrors.comment = t("reviewForm.commentRequired");
    }
    if (rating === 0) {
      newErrors.rating = t("reviewForm.ratingRequired");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await fetch("https://formspree.io/f/xvgarpaz", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: `New Review for ${productName}`,
          comment,
          rating,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        localStorage.setItem("review_submitted", "true");
      }
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  const ratingLabels = t("reviewForm.ratingLabels", { returnObjects: true }) as string[];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`w-full p-6 mb-12 border rounded-lg shadow-lg bg-[#1C1C1C] border-zinc-800 ${isRTL ? 'text-right' : ''}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <h2 className="mb-6 text-2xl font-bold text-[#FFD700]">
        {t("reviewForm.title", { productName })}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-3 font-medium text-white">
            {t("reviewForm.yourRating")}
          </label>
          <div className={`flex items-center ${isRTL ? 'justify-end' : ''}`}>
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                type="button"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleRatingClick(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className={`${isRTL ? 'ml-1' : 'mr-1'} focus:outline-none`}
                aria-label={t("reviewForm.yourRating") + ` ${star}`}
              >
                <Star
                  className={`w-8 h-8 transition-all duration-200 cursor-pointer ${
                    star <= (hoveredRating || rating)
                      ? "text-[#FFD700] fill-[#FFD700]"
                      : "text-zinc-600"
                  }`}
                />
              </motion.button>
            ))}
            {rating > 0 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className={`${isRTL ? 'mr-3' : 'ml-3'} text-white`}
              >
                {ratingLabels[rating - 1]}
              </motion.span>
            )}
          </div>
          {errors.rating && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.2 }}
              className="mt-1 text-sm text-[#B22222]"
            >
              {errors.rating}
            </motion.p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="comment"
            className="block mb-2 font-medium text-white"
          >
            {t("reviewForm.yourReview")}
          </label>
          <textarea
            id="comment"
            name="comment"
            value={comment}
            onChange={handleCommentChange}
            placeholder={t("reviewForm.placeholder")}
            required
            minLength={10}
            className={`w-full p-3 min-h-24 border rounded-md bg-black/50 text-white placeholder-zinc-500 
              ${errors.comment ? "border-[#B22222]" : "border-zinc-700"} 
              focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50`}
          />
          <div className="flex justify-between mt-1">
            {errors.comment ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-sm text-[#B22222]"
              >
                {errors.comment}
              </motion.p>
            ) : (
              <p className="text-sm text-zinc-500">{t("reviewForm.minChars")}</p>
            )}
            <p className="text-sm text-zinc-500">{t("reviewForm.charCount", { count: comment.length })}</p>
          </div>
        </div>

        <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
          <motion.button
            type="submit"
            disabled={submitted}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`px-6 py-2 font-medium text-white rounded-md transition-colors
              ${
                submitted
                  ? "bg-zinc-700 cursor-not-allowed"
                  : "bg-[#B22222] hover:bg-[#FFD700] hover:text-black"
              }`}
          >
            {submitted ? (
              <span className="flex items-center">
                <Check className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t("reviewForm.submitted")}
              </span>
            ) : (
              t("reviewForm.submit")
            )}
          </motion.button>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm font-medium text-[#FFD700]"
              >
                {t("reviewForm.thanks")}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </motion.div>
  );
};

export default ReviewForm;
