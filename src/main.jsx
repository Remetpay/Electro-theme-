import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Search,
  User,
  ShoppingBag,
  Heart,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  BadgeCheck,
  Zap,
  SlidersHorizontal,
  ChevronDown,
  Plus,
  Minus,
  Lock,
  Sparkles,
  Gamepad2,
  Home,
  Watch,
  BatteryCharging,
  Smartphone,
  Wifi,
  X,
} from 'lucide-react';
import './styles.css';

const categories = [
  { title: 'Phone Accessories', icon: Smartphone, copy: 'Cases, lenses, mounts, stands, and everyday mobile upgrades.' },
  { title: 'Smart Gadgets', icon: Zap, copy: 'Useful mini tech for work, travel, comfort, and productivity.' },
  { title: 'Wireless Audio', icon: Headphones, copy: 'Earbuds, speakers, microphones, and immersive audio essentials.' },
  { title: 'Gaming Accessories', icon: Gamepad2, copy: 'Controllers, lighting, docks, grips, and performance add-ons.' },
  { title: 'Smart Home', icon: Home, copy: 'Connected lighting, sensors, plugs, cameras, and automation tools.' },
  { title: 'Wearables', icon: Watch, copy: 'Trackers, bands, smartwatch accessories, and wellness tech.' },
  { title: 'Charging Essentials', icon: BatteryCharging, copy: 'Fast chargers, power banks, cables, hubs, and wireless docks.' },
];

const products = [
  { id: 1, title: 'AeroMag Pro Wireless Charging Stand', category: 'Charging Essentials', type: 'Wireless Charger', price: 39, compare: 59, rating: 4.9, reviews: 428, badge: 'Save 34%', tag: 'Best Seller', img: 'https://images.unsplash.com/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&w=900&q=80' },
  { id: 2, title: 'NebulaPods ANC Wireless Earbuds', category: 'Wireless Audio', type: 'Earbuds', price: 79, compare: 119, rating: 4.8, reviews: 731, badge: 'Hot Deal', tag: 'Trending', img: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=900&q=80' },
  { id: 3, title: 'FluxGrip RGB Gaming Controller Dock', category: 'Gaming Accessories', type: 'Gaming Dock', price: 49, compare: 69, rating: 4.7, reviews: 214, badge: 'New', tag: 'Gaming', img: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=900&q=80' },
  { id: 4, title: 'PulseTrack Smart Fitness Band', category: 'Wearables', type: 'Wearable', price: 64, compare: 89, rating: 4.8, reviews: 382, badge: 'Save 28%', tag: 'Premium Pick', img: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=900&q=80' },
  { id: 5, title: 'LumaSync Smart LED Light Bar Kit', category: 'Smart Home', type: 'Smart Lighting', price: 45, compare: 65, rating: 4.6, reviews: 189, badge: 'Under $50', tag: 'Smart Home', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80' },
  { id: 6, title: 'TitanShield MagSafe Armor Case', category: 'Phone Accessories', type: 'Phone Case', price: 29, compare: 44, rating: 4.9, reviews: 516, badge: 'Top Rated', tag: 'Everyday Carry', img: 'https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=900&q=80' },
  { id: 7, title: 'VoltMax 20K Compact Power Bank', category: 'Charging Essentials', type: 'Power Bank', price: 55, compare: 79, rating: 4.7, reviews: 298, badge: 'Save 30%', tag: 'Travel Ready', img: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=80' },
  { id: 8, title: 'OrbitCam Mini Smart Security Camera', category: 'Smart Gadgets', type: 'Smart Camera', price: 88, compare: 129, rating: 4.8, reviews: 156, badge: 'Limited', tag: 'New Arrival', img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80' },
];

const reviews = [
  ['Maya R.', 'The site feels premium and the product cards make it easy to compare quickly. My charger arrived fast and looked exactly as described.'],
  ['Jordan K.', 'Bought earbuds and a power bank. Clean checkout-style flow, strong support cues, and the products feel curated instead of random.'],
  ['Anika S.', 'Gadget GRV looks like a real high-end tech store. The deal section and trust badges gave me confidence to add more to cart.'],
  ['Leo T.', 'The under-$50 discovery section is excellent for gifting. I found accessories I actually wanted in under two minutes.'],
];

const paymentMarks = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

function Stars({ rating = 5 }) {
  return <span className="stars" aria-label={`${rating} out of 5 stars`}>{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}</span>;
}

function ProductCard({ product }) {
  return (
    <article className="product-card glass-card">
      <div className="product-media">
        <img src={product.img} alt={product.title} />
        <span className="sale-badge">{product.badge}</span>
        <button className="wishlist" aria-label={`Add ${product.title} to wishlist`}><Heart size={18} /></button>
      </div>
      <div className="product-info">
        <span className="eyebrow">{product.tag}</span>
        <h3>{product.title}</h3>
        <div className="rating-row"><Stars rating={product.rating} /><span>{product.rating} ({product.reviews})</span></div>
        <div className="price-row"><strong>${product.price}</strong><s>${product.compare}</s></div>
        <button className="quick-add">Quick Add</button>
      </div>
    </article>
  );
}

function Header({ onCartOpen }) {
  return (
    <header className="site-header">
      <a className="logo" href="#top" aria-label="Gadget GRV home"><span>G</span>Gadget GRV</a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {['Shop', 'New Arrivals', 'Best Sellers', 'Deals', 'Track Order', 'Contact'].map((item) => <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>{item}</a>)}
      </nav>
      <div className="header-actions">
        <button aria-label="Search"><Search size={20} /></button>
        <button aria-label="Account"><User size={20} /></button>
        <button aria-label="Cart" onClick={onCartOpen}><ShoppingBag size={20} /><span className="cart-count">3</span></button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <span className="pill"><Sparkles size={15} /> Futuristic tech, curated for daily life</span>
        <h1>Upgrade Your Everyday Tech</h1>
        <p>Discover smart gadgets, premium accessories, and next-gen electronics built for convenience, performance, and style.</p>
        <div className="hero-ctas"><a href="#best-sellers" className="btn primary">Shop Best Sellers</a><a href="#new-arrivals" className="btn secondary">Explore New Arrivals</a></div>
        <div className="microtrust"><span>Free shipping on eligible orders</span><span>Secure checkout</span><span>Easy returns</span></div>
      </div>
      <div className="hero-visual" aria-label="Premium gadget visual with blue glow">
        <div className="device-shell"><div className="device-screen"><div className="orb"></div><span>GRV OS</span><strong>Smart Tech Hub</strong><small>Connected • Charged • Ready</small></div></div>
        <div className="floating-chip chip-a">ANC Audio</div><div className="floating-chip chip-b">30W Fast Charge</div><div className="floating-chip chip-c">Smart Home Ready</div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [[Truck, 'Fast Worldwide Shipping'], [Lock, 'Secure Checkout'], [RotateCcw, 'Easy Returns'], [Headphones, 'Premium Support'], [BadgeCheck, 'Quality Checked Products']];
  return <section className="trust-bar">{items.map(([Icon, label]) => <div key={label}><Icon size={20} /><span>{label}</span></div>)}</section>;
}

function CategoryGrid() {
  return (
    <section className="section" id="shop">
      <div className="section-heading"><span className="eyebrow">Shop By Category</span><h2>Find the right upgrade faster.</h2><p>Focused collections prevent the generic marketplace feel and help buyers self-segment instantly.</p></div>
      <div className="category-grid">{categories.map(({ title, icon: Icon, copy }) => <article className="category-card glass-card" key={title}><Icon size={26} /><h3>{title}</h3><p>{copy}</p><a href="#collection">Explore <span>→</span></a></article>)}</div>
    </section>
  );
}

function DealBanner() {
  return (
    <section className="deal-banner" id="deals">
      <div><span className="eyebrow">Limited Time Deals</span><h2>Save up to 30% on trending gadgets and tech essentials.</h2><p>Conversion warning: urgency only works when it is specific, believable, and not abused. This banner uses a restrained countdown-style cue.</p></div>
      <div className="countdown" aria-label="Deal countdown"><span><strong>02</strong>Days</span><span><strong>18</strong>Hrs</span><span><strong>42</strong>Min</span></div>
      <a className="btn primary" href="#collection">Shop Deals</a>
    </section>
  );
}

function WhyShop() {
  const benefits = [
    ['Curated Tech Essentials', 'Products are grouped by real use cases, not random catalog stuffing.'],
    ['Quality Checked Products', 'Clear product specs, visible ratings, and realistic comparison pricing.'],
    ['Secure Payments', 'Checkout language and trust badges are present without pretending to process payment.'],
    ['Responsive Customer Support', 'Support cues reduce anxiety before purchase and after delivery.'],
    ['Easy Returns', 'Return reassurance is repeated near high-intent actions.'],
    ['Fast Order Processing', 'Operational promises are concise and visible at decision points.'],
  ];
  return <section className="section why"><div className="section-heading"><span className="eyebrow">Why Shop Gadget GRV</span><h2>Premium trust signals without the dropship noise.</h2></div><div className="benefit-grid">{benefits.map(([title, copy]) => <article className="glass-card benefit" key={title}><ShieldCheck size={24} /><h3>{title}</h3><p>{copy}</p></article>)}</div></section>;
}

function Discovery() {
  const cards = [
    ['New Arrivals', 'Fresh launches and newly stocked gadget upgrades.', 'OrbitCam Mini, FluxGrip RGB Dock, LumaSync Kit'],
    ['Trending Now', 'Products gaining traction across audio, charging, and gaming.', 'NebulaPods, VoltMax 20K, TitanShield Case'],
    ['Under $50', 'Giftable upgrades that keep impulse buying friction low.', 'LED Light Bar, Armor Case, Wireless Stand'],
    ['Premium Picks', 'Higher-margin bundles and elevated everyday tech.', 'Smart Band, ANC Audio, Smart Camera'],
  ];
  return <section className="section" id="new-arrivals"><div className="section-heading"><span className="eyebrow">Product Discovery</span><h2>Multiple paths to purchase.</h2></div><div className="discovery-grid">{cards.map(([title, copy, list]) => <article className="discovery-card glass-card" key={title}><h3>{title}</h3><p>{copy}</p><small>{list}</small><a href="#collection">View edit →</a></article>)}</div></section>;
}

function Reviews() {
  return <section className="section"><div className="section-heading"><span className="eyebrow">Customer Reviews</span><h2>Social proof with enough specificity to feel credible.</h2></div><div className="review-grid">{reviews.map(([name, body]) => <article className="review-card glass-card" key={name}><Stars /><p>“{body}”</p><strong>{name}</strong></article>)}</div></section>;
}

function Newsletter() {
  return <section className="newsletter"><span className="eyebrow">Stay Ahead of the Next Drop</span><h2>Get exclusive deals, product launches, and gadget updates delivered to your inbox.</h2><form><input type="email" placeholder="Enter your email" aria-label="Email address" /><button className="btn primary" type="button">Join the List</button></form></section>;
}

function ProductTemplate() {
  const product = products[1];
  const recommendations = products.slice(0, 4);
  return (
    <section className="section product-template" id="product">
      <div className="section-heading"><span className="eyebrow">Product Page Template</span><h2>High-intent detail page layout.</h2></div>
      <div className="pdp-grid">
        <div className="gallery glass-card"><img src={product.img} alt={product.title} /><div className="thumbs">{products.slice(0, 4).map((p) => <img key={p.id} src={p.img} alt="Product thumbnail" />)}</div></div>
        <div className="pdp-info">
          <span className="sale-badge inline">Limited stock available — order soon.</span>
          <h2>{product.title}</h2><div className="rating-row"><Stars /><span>4.8 from 731 verified reviews</span></div>
          <div className="price-row large"><strong>$79</strong><s>$119</s><span>Save 34%</span></div>
          <ul className="benefit-list"><li>Hybrid active noise cancellation and low-latency mode.</li><li>Compact charging case with USB-C quick top-up.</li><li>Premium matte finish designed for everyday carry.</li></ul>
          <div className="qty"><button><Minus size={16} /></button><span>1</span><button><Plus size={16} /></button></div>
          <div className="buy-actions"><button className="btn primary">Add to Cart</button><button className="btn secondary">Buy Now</button></div>
          <div className="badge-row"><span><Truck size={16}/> Shipping</span><span><RotateCcw size={16}/> Returns</span><span><ShieldCheck size={16}/> Warranty</span><span><Lock size={16}/> Secure</span></div>
          {['Description', 'Specifications', 'Shipping & Delivery', 'Returns & Refunds', 'Warranty'].map((item, i) => <details key={item} open={i === 0}><summary>{item}<ChevronDown size={16}/></summary><p>{item === 'Description' ? 'A polished template for a Shopify-ready product detail page with product clarity, risk reversal, urgency, and strong purchase actions.' : 'Placeholder content ready to be replaced with final Shopify metafields, policy copy, and product-specific specs.'}</p></details>)}
        </div>
      </div>
      <h3 className="subsection-title">Recommended Products</h3><div className="product-grid mini">{recommendations.map((p) => <ProductCard key={p.id} product={p} />)}</div>
    </section>
  );
}

function CollectionTemplate() {
  const [category, setCategory] = useState('All');
  const visible = useMemo(() => category === 'All' ? products : products.filter((p) => p.category === category), [category]);
  const filters = ['All', 'Phone Accessories', 'Smart Gadgets', 'Wireless Audio', 'Gaming Accessories', 'Smart Home', 'Wearables', 'Charging Essentials'];
  return (
    <section className="section collection-template" id="collection">
      <div className="collection-hero"><span className="eyebrow">Collection Page Template</span><h2>Trending Electronics & Smart Gadgets</h2><p>Shop curated premium tech essentials with fast filtering, clear ratings, sale badges, and mobile-friendly product discovery.</p></div>
      <div className="collection-layout">
        <aside className="filters glass-card"><h3><SlidersHorizontal size={18}/> Filters</h3><label>Price<select><option>All prices</option><option>Under $50</option><option>$50–$100</option><option>$100+</option></select></label><label>Availability<select><option>In stock</option><option>Sale items</option><option>New arrivals</option></select></label><label>Product Type<select><option>All product types</option><option>Chargers</option><option>Audio</option><option>Gaming</option></select></label>{filters.map((f) => <button key={f} className={category === f ? 'active-filter' : ''} onClick={() => setCategory(f)}>{f}</button>)}</aside>
        <div className="collection-products"><div className="sort-row"><span>{visible.length} products</span><label>Sort <select><option>Featured</option><option>Best selling</option><option>Price, low to high</option><option>Newest</option></select></label></div><div className="product-grid">{visible.map((p) => <ProductCard key={p.id} product={p} />)}</div></div>
      </div>
    </section>
  );
}

function CartDrawer({ open, onClose }) {
  return <div className={`cart-overlay ${open ? 'open' : ''}`} aria-hidden={!open}><aside className="cart-drawer"><button className="close-cart" onClick={onClose} aria-label="Close cart"><X size={20}/></button><h2>Your Cart</h2><div className="shipping-progress"><span>Free shipping unlocked</span><div><i style={{ width: '82%' }}></i></div><small>$18 away from premium accessory bonus.</small></div>{products.slice(0, 3).map((p) => <div className="cart-line" key={p.id}><img src={p.img} alt={p.title}/><div><strong>{p.title}</strong><span>${p.price}</span></div></div>)}<div className="addon glass-card"><span className="eyebrow">Recommended Add-on</span><strong>USB-C Braided Cable Pack</strong><p>Add for $14 and improve average order value without clutter.</p><button>Quick Add</button></div><div className="summary"><div><span>Subtotal</span><strong>$167</strong></div><div><span>Estimated shipping</span><strong>Free</strong></div><button className="btn primary checkout">Checkout Prototype</button><p><Lock size={15}/> No real payments are processed in this frontend prototype.</p><div className="payment-row">{paymentMarks.map((p) => <span key={p}>{p}</span>)}</div></div></aside></div>;
}

function Footer() {
  const columns = {
    Shop: ['Best Sellers', 'New Arrivals', 'Deals', 'Gift Ideas'],
    Categories: ['Phone Accessories', 'Wireless Audio', 'Smart Home', 'Wearables'],
    'Customer Care': ['Track Order', 'Shipping', 'Returns', 'Support'],
    Company: ['About Gadget GRV', 'Contact', 'Privacy', 'Terms'],
  };
  return <footer><div><a className="logo" href="#top"><span>G</span>Gadget GRV</a><p>Luxury dark-tech storefront concept for premium electronics, smart gadgets, and high-converting product discovery.</p></div>{Object.entries(columns).map(([title, links]) => <div key={title}><h3>{title}</h3>{links.map((l) => <a key={l} href="#top">{l}</a>)}</div>)}<div className="footer-payments">{paymentMarks.map((p) => <span key={p}>{p}</span>)}</div></footer>;
}

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  return <><Header onCartOpen={() => setCartOpen(true)} /><main><Hero /><TrustBar /><CategoryGrid /><section className="section" id="best-sellers"><div className="section-heading"><span className="eyebrow">Best Sellers</span><h2>Premium gadgets with visible reasons to buy.</h2><p>Each card includes rating, review volume, price anchoring, sale labeling, wishlist, and quick add.</p></div><div className="product-grid">{products.map((p) => <ProductCard key={p.id} product={p} />)}</div></section><DealBanner /><WhyShop /><Discovery /><ProductTemplate /><CollectionTemplate /><Reviews /><Newsletter /></main><Footer /><CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} /></>;
}

createRoot(document.getElementById('root')).render(<App />);
