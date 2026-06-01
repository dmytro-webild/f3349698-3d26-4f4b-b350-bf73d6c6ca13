"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Building2, Globe, Rocket, Users, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="largeSmallSizeMediumTitles"
        background="none"
        cardStyle="glass-depth"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "Menu",          id: "#products"},
        {
          name: "About Us",          id: "#about"},
        {
          name: "Reviews",          id: "#testimonials"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/view-3d-delicious-looking-burger_23-2150914749.jpg"
      logoAlt="McDonald's Logo"
      brandName="McDonald's"
      button={{
        text: "Order Now",        href: "#products"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      imagePosition="right"
      title="Taste the Golden Arches, Feel the Happiness"
      description="Serving up smiles with classic burgers, crispy fries, and delicious treats since 1955. Your favorite meal is just a click away."
      testimonials={[
        {
          name: "Sarah J.",          handle: "@HappyEater",          testimonial: "Always fresh and delicious! My go-to for a quick and satisfying meal. The service is incredibly fast.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/crazy-sports-man-funny-expression_1194-3317.jpg",          imageAlt: "Sarah J."},
        {
          name: "Mark L.",          handle: "@BurgerFan",          testimonial: "The Big Mac never disappoints! Consistently good quality and friendly staff. Love coming here.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-man-sitting-down-with-food-his-hands_23-2148322100.jpg",          imageAlt: "Mark L."},
        {
          name: "Emily R.",          handle: "@FryLover",          testimonial: "World-famous fries are truly world-class! Hot, crispy, and perfectly salted every time.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-pleased-attractive-smiling-female-dressed-fashionable-denim-jacket-sees-something-appealing-shop-isolated-pink-studio_273609-3858.jpg",          imageAlt: "Emily R."},
        {
          name: "David K.",          handle: "@FamilyMeals",          testimonial: "Great place for family meals. The kids love their Happy Meals, and I enjoy the new seasonal items.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-cartoon-like-business-persons_23-2150797678.jpg",          imageAlt: "David K."},
        {
          name: "Jessica M.",          handle: "@FastFoodie",          testimonial: "Quick service and always gets my order right. A reliable choice for delicious fast food. Highly recommend the McFlurry!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/hungry-young-woman-eating-tasty-burger_1140-17.jpg",          imageAlt: "Jessica M."},
      ]}
      buttons={[
        {
          text: "Order Now",          href: "#products"},
        {
          text: "View Menu",          href: "#features"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/crazy-man-funny-expression_1194-3203.jpg",          alt: "Customer 1"},
        {
          src: "http://img.b2bpic.net/free-photo/pretty-woman-blue-clothes-smiling_23-2148055977.jpg",          alt: "Customer 2"},
        {
          src: "http://img.b2bpic.net/free-photo/front-view-young-female-holding-chips-drink-watching-movie-blue-surface_140725-69648.jpg",          alt: "Customer 3"},
        {
          src: "http://img.b2bpic.net/free-photo/senior-woman-looking-camera-successful-mature-business-woman-happy-old-professor-standing-office-with-gray-hair_657921-1221.jpg",          alt: "Customer 4"},
        {
          src: "http://img.b2bpic.net/free-photo/crazy-sports-man-funny-expression_1194-3317.jpg",          alt: "Customer 5"},
      ]}
      avatarText="Join millions of happy customers"
      imageSrc="http://img.b2bpic.net/free-photo/cheeseburger-with-fresh-vegetables-pickles-dark-background_84443-94664.jpg"
      imageAlt="Delicious McDonald's Big Mac burger with fries"
      mediaAnimation="slide-up"
      marqueeItems={[
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/cheeseburger-with-fresh-vegetables-pickles-dark-background_84443-94664.jpg",          alt: "Delicious Burger"},
        {
          type: "text",          text: "Freshly Prepared"},
        {
          type: "text-icon",          text: "Speedy Service",          icon: Rocket,
        },
        {
          type: "text",          text: "Quality Ingredients"},
        {
          type: "text-icon",          text: "Global Favorites",          icon: Globe,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="More Than Just a Meal"
      description="At McDonald's, we're committed to quality ingredients, exceptional service, and being a valued part of your community. Discover our story and our commitment to you."
      metrics={[
        {
          value: "65+",          title: "Years of Service"},
        {
          value: "100K+",          title: "Happy Customers Daily"},
        {
          value: "100+",          title: "Countries Served"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-women-wearing-embroidered-shirts_23-2149394280.jpg"
      imageAlt="Friendly McDonald's team members smiling behind the counter"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "big-mac",          title: "The Iconic Big Mac",          description: "Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.",          tag: "Classic",          imageSrc: "http://img.b2bpic.net/free-photo/freshly-baked-burger-bun-sprinkled-with-sesame_140725-8726.jpg",          imageAlt: "Big Mac burger"},
        {
          id: "fries",          title: "World-Famous Fries",          description: "Hot, crispy, and perfectly golden. Our fries are an unbeatable side for any meal.",          tag: "Favorite",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-tasty-ham-sandwiches-with-french-fries-dark-surface_179666-34654.jpg",          imageAlt: "McDonald's French Fries"},
        {
          id: "mcnuggets",          title: "Crispy McNuggets",          description: "Made with 100% white meat chicken, our tender and juicy McNuggets are perfect for dipping.",          tag: "Chicken",          imageSrc: "http://img.b2bpic.net/free-photo/delicious-frozen-fish-nuggets_114579-49206.jpg",          imageAlt: "Chicken McNuggets"},
      ]}
      title="Our Delicious Favorites"
      description="From the iconic Big Mac to our world-famous fries, explore the menu items that have captured hearts worldwide."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "strawberry-refresher",          brand: "McDonald's",          name: "Strawberry Watermelon Refresher",          price: "$3.29",          rating: 5,
          reviewCount: "120",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-foods-cocktails-tall-glass_23-2149064133.jpg",          imageAlt: "Strawberry Watermelon Refresher"},
        {
          id: "mcflurry",          brand: "McDonald's",          name: "Oreo McFlurry",          price: "$3.79",          rating: 5,
          reviewCount: "210",          imageSrc: "http://img.b2bpic.net/free-photo/wooden-board-sweet-round-cookies-with-glass-cup-tasty-hot-coffee-marble-background_114579-91300.jpg",          imageAlt: "Oreo McFlurry"},
        {
          id: "spicy-mcchicken",          brand: "McDonald's",          name: "Spicy McChicken",          price: "$2.49",          rating: 4,
          reviewCount: "85",          imageSrc: "http://img.b2bpic.net/free-photo/cheese-pork-hamburger_1339-8477.jpg",          imageAlt: "Spicy McChicken"},
        {
          id: "seasonal-burger",          brand: "McDonald's",          name: "Limited-Time Special Burger",          price: "$6.99",          rating: 5,
          reviewCount: "150",          imageSrc: "http://img.b2bpic.net/free-photo/delicious-burger-with-emojis_23-2151848653.jpg",          imageAlt: "Seasonal Special Burger"},
        {
          id: "donut-sticks",          brand: "McDonald's",          name: "Donut Sticks (Breakfast)",          price: "$2.29",          rating: 4,
          reviewCount: "70",          imageSrc: "http://img.b2bpic.net/free-photo/front-close-view-tasty-toast-sandwiches-with-cheese-ham-inside-plate-with-french-fries-sour-cream_140725-20021.jpg",          imageAlt: "Donut Sticks"},
        {
          id: "iced-mocha",          brand: "McCafé",          name: "McCafé Iced Mocha",          price: "$4.19",          rating: 5,
          reviewCount: "95",          imageSrc: "http://img.b2bpic.net/free-photo/iced-coffee_1388-803.jpg",          imageAlt: "McCafé Iced Mocha"},
      ]}
      title="What's New on the Menu?"
      description="Always something exciting! Try our latest seasonal specials and limited-time offerings before they're gone."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      animationType="slide-up"
      metrics={[
        {
          id: "restaurants",          value: "38,000+",          title: "Restaurants Globally",          description: "Serving communities in over 100 countries.",          icon: Building2,
        },
        {
          id: "employees",          value: "2M+",          title: "Dedicated Team Members",          description: "Our global workforce delivers smiles daily.",          icon: Users,
        },
        {
          id: "served",          value: "69M+",          title: "Customers Served Daily",          description: "Making happy moments for millions every day.",          icon: Utensils,
        },
      ]}
      title="Our Commitment by the Numbers"
      description="We're proud of the impact we make, from swift service to community support, every day."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          title: "Amazing Service & Fresh Food!",          quote: "I always have an amazing experience at McDonald's. The service is incredibly kind, and the food is consistently fresh and delicious. A perfect spot for a quick and satisfying meal.",          name: "Sarah Johnson",          role: "Local Customer",          imageSrc: "http://img.b2bpic.net/free-photo/woman-looking-goodies-local-producer_23-2149110825.jpg",          imageAlt: "Sarah Johnson"},
        {
          id: "2",          title: "Consistently Great Value",          quote: "McDonald's is my go-to for great value. Even with complex orders, they get it right every time. The fries are always crispy, and the burgers hit the spot.",          name: "Michael Chen",          role: "Loyal Patron",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-with-delicious-taco_23-2151047994.jpg",          imageAlt: "Michael Chen"},
        {
          id: "3",          title: "Family Favorite Spot",          quote: "My family loves McDonald's! The Happy Meals keep the kids happy, and I appreciate the variety for adults. It’s a convenient and enjoyable experience for everyone.",          name: "Emily Rodriguez",          role: "Parent",          imageSrc: "http://img.b2bpic.net/free-photo/young-stylish-attractive-woman-yellow-blouse-blue_285396-1858.jpg",          imageAlt: "Emily Rodriguez"},
        {
          id: "4",          title: "Reliable and Delicious",          quote: "When I need a quick and tasty meal, McDonald's never disappoints. The new Strawberry Watermelon Refresher is fantastic, and the classic menu items are always reliable.",          name: "David Kim",          role: "Commuter",          imageSrc: "http://img.b2bpic.net/free-photo/enjoying-street-food-fest_23-2151543812.jpg",          imageAlt: "David Kim"},
        {
          id: "5",          title: "Excellent Drive-Through Experience",          quote: "The drive-through is always efficient and friendly, even during busy hours. It's a lifesaver on my way to work, providing a quick and easy breakfast.",          name: "Jessica Lee",          role: "Morning Customer",          imageSrc: "http://img.b2bpic.net/free-photo/smiley-boy-holding-glazed-doughnut_23-2148244738.jpg",          imageAlt: "Jessica Lee"},
        {
          id: "6",          title: "Best Place for a Treat",          quote: "I love coming to McDonald's for a treat! The McFlurry is divine, and there's always something new to try. It's a little piece of happiness.",          name: "Chris Adams",          role: "Dessert Enthusiast",          imageSrc: "http://img.b2bpic.net/free-photo/friends-having-crowded-party-home_23-2149203559.jpg",          imageAlt: "Chris Adams"},
      ]}
      title="What Our Customers Say"
      description="Hear directly from our happy customers about their favorite McDonald's moments and experiences."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Happy Families",        "Food Lovers",        "Daily Commuters",        "Students On The Go",        "Global Communities",        "Taste Seekers",        "Convenience Fans",        "Quality Advocates",        "Value Shoppers"]}
      title="A Taste of Global Trust"
      description="Loved by communities worldwide, McDonald's has been a trusted brand for generations. Join the millions who choose happiness."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get in Touch with Us"
      description="Have a question, feedback, or a suggestion? We'd love to hear from you! Fill out the form below."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
        {
          name: "subject",          type: "text",          placeholder: "Subject"},
      ]}
      textarea={{
        name: "message",        placeholder: "Your Message",        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-barista-with-protection-globes_23-2148630776.jpg"
      imageAlt="McDonald's exterior with a friendly staff member"
      mediaPosition="right"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="McDonald's"
      columns={[
        {
          title: "Explore",          items: [
            {
              label: "Home",              href: "#hero"},
            {
              label: "Menu",              href: "#products"},
            {
              label: "About Us",              href: "#about"},
            {
              label: "Careers",              href: "#"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "Contact Us",              href: "#contact"},
            {
              label: "FAQs",              href: "#"},
            {
              label: "Feedback",              href: "#contact"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
            {
              label: "Cookie Policy",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 McDonald's. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
