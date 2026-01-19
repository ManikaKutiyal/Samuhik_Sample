import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Plus, Check } from "lucide-react";
import { useCart } from "../../contexts/CartContext";

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  memberPrice,
  image,
  hoverImage,
  variants
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(variants?.[0] || "");
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: id || name,
      name,
      price,
      originalPrice,
      memberPrice,
      image,
      variant: selectedVariant
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <motion.div
      className="
        bg-[hsl(0_0%_98%)]
        border border-[hsl(0_0%_83%)]
        rounded-2xl overflow-hidden
        shadow-sm hover:shadow-xl
        transition-all group

        w-full
        sm:max-w-[260px]
        md:max-w-[280px]
        lg:max-w-[300px]
      "
    >
      {/* IMAGE */}
      <div className="relative w-full aspect-[4/5] overflow-hidden">

        <img
          src={image}
          alt={name}
          className="
            w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-105
            bg-[#f8f7f7]
          "
        />

        {hoverImage && (
          <img
            src={hoverImage}
            alt={name}
            className="
              absolute inset-0
              w-full h-full object-cover
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-500
              bg-[#f8f7f7]
            "
          />
        )}

        {/* WISHLIST */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className={`
            absolute top-2 right-2
            sm:top-3 sm:right-3
            w-7 h-7 sm:w-8 sm:h-8
            rounded-full
            flex items-center justify-center
            shadow-sm transition-all
            ${
              isWishlisted
                ? "bg-red-500 text-white"
                : "bg-white/80 backdrop-blur-sm text-gray-400 hover:text-red-500"
            }
          `}
        >
          <Heart size={14} className="sm:hidden" fill={isWishlisted ? "currentColor" : "none"} />
          <Heart size={16} className="hidden sm:block" fill={isWishlisted ? "currentColor" : "none"} />
        </button>

        {/* DISCOUNT */}
        {originalPrice && (
          <div
            className="
              absolute top-2 left-2
              sm:top-3 sm:left-3
              bg-[hsl(152_45%_25%)]
              text-white text-[9px] sm:text-[10px]
              font-bold px-2 py-1
              rounded-md shadow-sm
            "
          >
            {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">

        <h3
          className="
            font-bold
            text-xs sm:text-sm
            h-9 sm:h-10
            line-clamp-2
            text-[hsl(0_0%_9%)]
            group-hover:text-[hsl(71_56%_47%)]
            transition-colors
          "
        >
          {name}
        </h3>

        {/* PRICE */}
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="text-base sm:text-lg font-black text-[hsl(0_0%_9%)]">
              ₹{price}
            </span>

            {originalPrice && (
              <span className="text-[10px] sm:text-xs text-gray-400 line-through">
                ₹{originalPrice}
              </span>
            )}
          </div>

          <p
            className="
              text-[9px] sm:text-[10px]
              font-bold uppercase tracking-tighter
              text-[hsl(71_56%_47%)]
            "
          >
            ₹{memberPrice} for Co-Op Members*
          </p>
        </div>

        {/* VARIANTS */}
        {variants && variants.length > 0 && (
          <div className="flex flex-wrap gap-1 sm:gap-1.5 py-1">
            {variants.map((variant) => (
              <button
                key={variant}
                onClick={() => setSelectedVariant(variant)}
                className={`
                  px-2 py-1
                  text-[9px] sm:text-[10px]
                  font-bold
                  rounded-md border transition-all
                  ${
                    selectedVariant === variant
                      ? "border-[hsl(71_56%_47%)] bg-[hsl(71_56%_47%/0.1)] text-[hsl(71_56%_47%)]"
                      : "border-gray-200 text-gray-500 hover:border-[hsl(71_56%_47%/0.5)]"
                  }
                `}
              >
                {variant}
              </button>
            ))}
          </div>
        )}

        {/* ADD BUTTON */}
        <button
          onClick={handleAddToCart}
          className={`
            w-full py-2 sm:py-2.5
            rounded-xl
            font-bold text-xs sm:text-sm
            flex items-center justify-center gap-2
            transition-all
            ${
              isAdded
                ? "bg-green-600 text-white"
                : "bg-[hsl(71_56%_47%)] text-white hover:bg-[hsl(71_56%_47%/0.9)] shadow-md active:scale-95"
            }
          `}
        >
          {isAdded ? (
            <>
              <Check size={14} className="sm:hidden" strokeWidth={3} />
              <Check size={16} className="hidden sm:block" strokeWidth={3} />
              Added
            </>
          ) : (
            <>
              <Plus size={14} className="sm:hidden" strokeWidth={3} />
              <Plus size={16} className="hidden sm:block" strokeWidth={3} />
              Add
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
