export const products = [
  // CATEGORY 1: LAPTOPS (6 Products)
  { id: 1, name: "Zenith Blade 14", price: 1499, category: "Laptops", rating: 4.8, image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&q=80", description: "Ultra-slim gaming laptop." },
  { id: 2, name: "MacBook Pro M3", price: 1999, category: "Laptops", rating: 4.9, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80", description: "The ultimate power house." },
  { id: 3, name: "Dell XPS 15", price: 1299, category: "Laptops", rating: 4.7, image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80", description: "Perfect for creators." },
  { id: 4, name: "HP Spectre x360", price: 1150, category: "Laptops", rating: 4.6, image: "https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?w=500&q=80", description: "Versatile 2-in-1 laptop." },
  { id: 5, name: "Asus ROG Strix", price: 1599, category: "Laptops", rating: 4.8, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80", description: "Pro-level gaming machine." },
  { id: 6, name: "Lenovo ThinkPad", price: 999, category: "Laptops", rating: 4.5, image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&q=80", description: "Business reliability." },

  // CATEGORY 2: SMARTPHONES (6 Products)
  { id: 7, name: "iPhone 15 Pro", price: 999, category: "Smartphones", rating: 4.9, image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&q=80", description: "Titanium design." },
  { id: 8, name: "Samsung S24 Ultra", price: 1199, category: "Smartphones", rating: 4.8, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&q=80", description: "AI-integrated mobile." },
  { id: 9, name: "Google Pixel 8", price: 799, category: "Smartphones", rating: 4.7, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80", description: "Pure Android experience." },
  { id: 10, name: "OnePlus 12", price: 699, category: "Smartphones", rating: 4.6, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80", description: "Fastest charging phone." },
  { id: 11, name: "Nothing Phone (2)", price: 599, category: "Smartphones", rating: 4.5, image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=500&q=80", description: "Unique glyph interface." },
  { id: 12, name: "Xiaomi 14 Pro", price: 899, category: "Smartphones", rating: 4.4, image: "https://images.unsplash.com/photo-1512054834149-420a7a3c0643?w=500&q=80", description: "Leica optics camera." },

  // CATEGORY 3: AUDIO (6 Products)
  { id: 13, name: "Sony WH-1000XM5", price: 349, category: "Audio", rating: 4.9, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", description: "Best noise canceling." },
  { id: 14, name: "Bose QuietComfort", price: 299, category: "Audio", rating: 4.8, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80", description: "Legendary comfort." },
  { id: 15, name: "AirPods Max", price: 549, category: "Audio", rating: 4.7, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80", description: "High-fidelity audio." },
  { id: 16, name: "JBL Boombox 3", price: 449, category: "Audio", rating: 4.6, image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80", description: "Massive sound for outdoors." },
  { id: 17, name: "Sennheiser Momentum", price: 279, category: "Audio", rating: 4.8, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80", description: "Premium sound quality." },
  { id: 18, name: "Marshall Major IV", price: 149, category: "Audio", rating: 4.5, image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=500&q=80", description: "80+ hours of playtime." },

  // CATEGORY 4: GAMING (6 Products)
  { id: 19, name: "PlayStation 5", price: 499, category: "Gaming", rating: 4.9, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&q=80", description: "Next-gen console." },
  { id: 20, name: "Xbox Series X", price: 499, category: "Gaming", rating: 4.8, image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=500&q=80", description: "Fastest Xbox ever." },
  { id: 21, name: "Nintendo Switch OLED", price: 349, category: "Gaming", rating: 4.7, image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=500&q=80", description: "Vibrant OLED screen." },
  { id: 22, name: "Razer DeathAdder", price: 69, category: "Gaming", rating: 4.6, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80", description: "Iconic gaming mouse." },
  { id: 23, name: "Logitech G Pro Keyboard", price: 129, category: "Gaming", rating: 4.8, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80", description: "Built for pros." },
  { id: 24, name: "Steam Deck", price: 399, category: "Gaming", rating: 4.7, image: "https://images.unsplash.com/photo-1643904812674-89737590f230?w=500&q=80", description: "Portable PC gaming." },

  // CATEGORY 5: WEARABLES (6 Products)
  { id: 25, name: "Apple Watch Ultra", price: 799, category: "Wearables", rating: 4.9, image: "https://images.unsplash.com/photo-1544117518-30df578096a4?w=500&q=80", description: "Rugged and capable." },
  { id: 26, name: "Samsung Galaxy Watch 6", price: 299, category: "Wearables", rating: 4.7, image: "https://images.unsplash.com/photo-1508685096489-7aac296839c8?w=500&q=80", description: "Advanced health tracking." },
  { id: 27, name: "Garmin Fenix 7", price: 649, category: "Wearables", rating: 4.8, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80", description: "For the outdoorsman." },
  { id: 28, name: "Fitbit Charge 6", price: 159, category: "Wearables", rating: 4.5, image: "https://images.unsplash.com/photo-1557438159-51eec7ad6c9e?w=500&q=80", description: "Track your fitness." },
  { id: 29, name: "Oura Ring Gen3", price: 299, category: "Wearables", rating: 4.6, image: "https://images.unsplash.com/photo-1603981323958-81ab286e4483?w=500&q=80", description: "Smart ring tech." },
  { id: 30, name: "Pixel Watch 2", price: 349, category: "Wearables", rating: 4.4, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80", description: "Help by Google." }
];