
import { Product } from './types';
import { UI_IMAGES } from './imageRegistry';

/**
 * LIMITED EDITION COLLECTION
 * Unique premium products using specific high-end visuals.
 * Names and Descriptions optimized for a luxury feel (one-word descriptions).
 */
export const LIMITED_EDITION_PRODUCTS: Product[] = [
  { id: "le_01", name: "Aurelian Link Chain", price: 2499, design: "Avant-Garde", material: "Nappa", description: "Radiant", img: UI_IMAGES.limitedEditionThumbs[0], rating: "5.0", category: "Limited" },
  { id: "le_02", name: "Alabaster Casual Drapery", price: 1899, design: "Circular", material: "Vegan", description: "Effortless", img: UI_IMAGES.limitedEditionThumbs[1], rating: "4.9", category: "Limited" },
  { id: "le_03", name: "Architectural Evening Ensemble", price: 3200, design: "Bauhaus", material: "Titanium", description: "Commanding", img: UI_IMAGES.limitedEditionThumbs[2], rating: "5.0", category: "Limited" },
  { id: "le_04", name: "Heritage Archive Chrono", price: 1599, design: "Fluid", material: "Silk", description: "Timeless", img: UI_IMAGES.limitedEditionThumbs[3], rating: "4.8", category: "Limited" },
  { id: "le_05", name: "Lustrous Mineral Studs", price: 1299, design: "Modular", material: "Canvas", description: "Refined", img: UI_IMAGES.limitedEditionThumbs[4], rating: "4.7", category: "Limited" },
  { id: "le_06", name: "Aerodynamic Precision Model", price: 2100, design: "Aero", material: "Recycled", description: "Futuristic", img: UI_IMAGES.limitedEditionThumbs[5], rating: "4.9", category: "Limited" },
  { id: "le_07", name: "Vanguard Sculpted Runners", price: 1950, design: "Sculptural", material: "Fine", description: "Dynamic", img: UI_IMAGES.limitedEditionThumbs[6], rating: "4.8", category: "Limited" },
  { id: "le_08", name: "Majestic Silk Silhouette", price: 3500, design: "Geometric", material: "Gold", description: "Exquisite", img: UI_IMAGES.limitedEditionThumbs[7], rating: "5.0", category: "Limited" },
  { id: "le_09", name: "Executive Wool Archive", price: 1750, design: "Asymmetric", material: "Merino", description: "Structured", img: UI_IMAGES.limitedEditionThumbs[8], rating: "4.9", category: "Limited" },
  { id: "le_10", name: "Infinity Obsidian Band", price: 2899, design: "Statement", material: "Cashmere", description: "Substantial", img: UI_IMAGES.limitedEditionThumbs[9], rating: "5.0", category: "Limited" }
];

export const XYZ_STORE_RAW: Record<string, Record<string, any[]>> = {
  men: {
    shirts: [
      { name: "Black Linen Shirt", price: 599, design: "Linen Casual", material: "100% Cotton", description: "Breathable linen blend for warm weather comfort.", img: "https://images.unsplash.com/photo-1644483878392-2d7e7c00eb3f?q=80&w=800" },
      { name: "White Slim T-Shirt", price: 699, design: "Slim Fit", material: "Cotton Blend", description: "Clean silhouette tailored for a modern minimalist look.", img: "https://images.unsplash.com/photo-1659592987637-c766206e72b8?q=80&w=800" },
      { name: "Navy Blue Shirt", price: 749, design: "Formal", material: "Cotton Rich", description: "Sharp tailored lines perfect for professional settings.", img: "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=800" },
      { name: "Green Utility Shirt", price: 899, design: "Utility", material: "Canvas Cotton", description: "Rugged durability with multiple functional pockets.", img: "https://images.unsplash.com/photo-1579592610812-49855d94db0d?q=80&w=800" },
      { name: "Checked Casual Shirt", price: 649, design: "Checkered", material: "Soft Cotton", description: "Classic patterns for effortless weekend layering.", img: "https://plus.unsplash.com/premium_photo-1763205310143-22898e78f9e8?q=80&w=800" },
      { name: "Red Printed Shirt", price: 799, design: "Print Casual", material: "Cotton Blend", description: "Vibrant motifs printed on a high-quality knit base.", img: "https://images.unsplash.com/photo-1716946861089-199f9635351d?q=80&w=800" },
      { name: "Grey Classic Shirt", price: 559, design: "Classic Fit", material: "Cotton", description: "A timeless wardrobe staple with a comfortable standard fit.", img: "https://images.unsplash.com/photo-1722926628555-252c1c0258bf?q=80&w=800" },
      { name: "Beige Summer Shirt", price: 499, design: "Casual", material: "Cotton Mix", description: "Lightweight fabric with a relaxed, airy silhouette.", img: "https://images.unsplash.com/photo-1660983414551-b3758336be15?q=80&w=800" },
      { name: "Blue Striped Shirt", price: 699, design: "Striped", material: "Cotton", description: "Fine nautical stripes for a fresh, sophisticated aesthetic.", img: "https://images.unsplash.com/photo-1609360075696-72d2fb9da98e?q=80&w=800" },
      { name: "Black Oversized Tee", price: 899, design: "Oversized", material: "Cotton Jersey", description: "Contemporary volume with dropped shoulders for maximum comfort.", img: "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?q=80&w=800" }
    ],
    trousers: [
      { name: "Classic Black Pants", price: 899, design: "Formal", material: "Poly-Cotton", description: "Durable and crease-resistant for daily corporate wear.", img: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=800" },
      { name: "Brown Straight Pants", price: 799, design: "Straight Fit", material: "Cotton Twill", description: "Versatile neutral color in a sturdy straight-cut weave.", img: "https://images.unsplash.com/photo-1601561446301-fecc99036f4b?q=80&w=800" },
      { name: "Navy Slim Fit Pants", price: 999, design: "Slim Fit", material: "Stretch Cotton", description: "Flexible comfort combined with a sharp tailored finish.", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800" },
      { name: "Grey Formal Trousers", price: 899, design: "Formal", material: "Polyester Blend", description: "Structured fit designed for professional business silhouettes.", img: "https://images.unsplash.com/photo-1653825874067-d5f0ffe0294e?q=80&w=800" },
      { name: "Beige Casual Trousers", price: 759, design: "Casual", material: "Cotton", description: "Soft-brushed cotton fabric for relaxed weekend comfort.", img: "https://images.unsplash.com/photo-1714423297888-a7feda3773c6?q=80&w=800" },
      { name: "Dark Brown Trousers", price: 849, design: "Straight Fit", material: "Twill", description: "Rich earthy tones with a durable rugged finish.", img: "https://images.unsplash.com/photo-1586973644827-9f7cbacd0b85?q=80&w=800" },
      { name: "Black Stretch Trousers", price: 999, design: "Stretch Fit", material: "Elastane Mix", description: "Maximum flexibility for urban movement and travel.", img: "https://images.unsplash.com/photo-1624809806634-3c9a20aca768?q=80&w=800" },
      { name: "Olive Green Cargo", price: 1099, design: "Cargo", material: "Canvas", description: "High-capacity storage meets utilitarian singular design.", img: "https://images.unsplash.com/photo-1625622885449-eb5f44a84794?q=80&w=800" },
      { name: "Blue Stone-Wash Pants", price: 899, design: "Casual", material: "Cotton Heavy", description: "Textured vintage finish for an effortless casual look.", img: "https://images.unsplash.com/photo-1602585198422-d795fa9bfd6f?q=80&w=800" },
      { name: "Solid Black Tapered", price: 849, design: "Slim Fit", material: "Stretch Cotton", description: "Deep obsidian tones for versatile evening wardrobe edits.", img: "https://images.unsplash.com/photo-1715833002251-64a42ab16fdc?q=80&w=800" }
    ],
    hoodies: [
      { name: "Basic Black Hoodie", price: 1199, design: "Solid", material: "Fleece", description: "Heavyweight premium fleece for ultimate thermal warmth.", img: "https://images.unsplash.com/photo-1614214191247-5b2d3a734f1b?q=80&w=800" },
      { name: "Grey Zip-Up Hoodie", price: 1299, design: "Zip-Up", material: "Fleece", description: "Versatile layering piece for transitioning between seasons.", img: "https://images.unsplash.com/photo-1580159851546-833dd8f26318?q=80&w=800" },
      { name: "Maroon Winter Hoodie", price: 1399, design: "Winter", material: "Heavy Fleece", description: "Extra insulation designed for cold weather silhouettes.", img: "https://images.unsplash.com/photo-1706264129770-822540331b9a?q=80&w=800" },
      { name: "Olive Casual Hoodie", price: 1150, design: "Casual", material: "Soft Fleece", description: "Everyday luxury comfort with a subtle matte color.", img: "https://images.unsplash.com/photo-1678869520694-c561b6f5066e?q=80&w=800" },
      { name: "White Minimal Hoodie", price: 1299, design: "Minimal", material: "Premium Fleece", description: "Bright optical white for a sharp, high-contrast aesthetic.", img: "https://images.unsplash.com/photo-1738486260590-23c954cf29b8?q=80&w=800" },
      { name: "Navy Blue Sport Hoodie", price: 1399, design: "Sport", material: "Poly Fleece", description: "Moisture-wicking performance blend for active movement.", img: "https://images.unsplash.com/photo-1654360067259-d836aae5ffe0?q=80&w=800" },
      { name: "Dark Grey Hoodie", price: 1499, design: "Oversized", material: "Thick Fleece", description: "Bold voluminous silhouette for maximum lounge comfort.", img: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?q=80&w=800" },
      { name: "Beige Soft Hoodie", price: 1350, design: "Minimal", material: "Cotton Fleece", description: "Understated luxury fabric for premium lounge edits.", img: "https://images.unsplash.com/photo-1602956280248-66d6efd0ba7d?q=80&w=800" },
      { name: "Blue Graphic Hoodie", price: 1499, design: "Graphic", material: "PolyCotton", description: "Artistic statement print on high-density premium fleece.", img: "https://images.unsplash.com/photo-1616233726332-2f7bd2514cff?q=80&w=800" },
      { name: "Pure Black Sportswear", price: 1399, design: "Sportswear", material: "Sport Fleece", description: "Engineered specifically for training movement and style.", img: "https://images.unsplash.com/photo-1586973644827-9f7cbacd0b85?q=80&w=800" }
    ],
    shoes: [
      { name: "Black Urban Sneakers", price: 1599, design: "Sneaker", material: "Synthetic", description: "Durable urban footwear featuring high-traction grip soles.", img: "https://images.unsplash.com/photo-1684351045483-b6c486fa979a?q=80&w=800" },
      { name: "White Casual Shoes", price: 1699, design: "Casual", material: "PU Leather", description: "Clean, minimalist lines for daily outfit versatility.", img: "https://images.unsplash.com/photo-1761972693261-57adf95011d6?q=80&w=800" },
      { name: "Blue Running Shoes", price: 1899, design: "Running", material: "Mesh", description: "Lightweight performance mesh for the long distance path.", img: "https://images.unsplash.com/photo-1661605813204-8c7662c1a5f8?q=80&w=800" },
      { name: "Grey Training Shoes", price: 1599, design: "Training", material: "Mesh", description: "Breathable arch support for intensive daily gym use.", img: "https://images.unsplash.com/photo-1632765259206-2ee43d1dbfc7?q=80&w=800" },
      { name: "Brown Casual Loafers", price: 1799, design: "Loafers", material: "Faux Leather", description: "Refined heritage aesthetic for smart casual events.", img: "https://images.unsplash.com/photo-1616663308968-58162d332720?q=80&w=800" },
      { name: "Black Formal Shoes", price: 1999, design: "Formal", material: "Synthetic", description: "Classic high-gloss formal wear for special occasion archives.", img: "https://images.unsplash.com/photo-1668069226492-508742b03147?q=80&w=800" },
      { name: "White Sport Sneakers", price: 1899, design: "Sport", material: "Mesh & PU", description: "Modern sport silhouette with advanced cushioning technology.", img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800" },
      { name: "Beige Soft Loafers", price: 1799, design: "Casual", material: "PU Leather", description: "Neutral earth tones with a comfortable singular fit.", img: "https://images.unsplash.com/photo-1726200334449-5381bf713721?q=80&w=800" },
      { name: "Navy Blue Runners", price: 1899, design: "Running", material: "Mesh", description: "Pro-grade structural support for intense city runs.", img: "https://images.unsplash.com/photo-1625515922308-56dcaa45351c?q=80&w=800" },
      { name: "Dual tone Shoes", price: 1999, design: "Casual", material: "Mixed", description: "Bold high-contrast variable design for street edits.", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800" }
    ]
  },
  women: {
    tops: [
{ name: "Pink Floral Top", price: 499, design: "Floral", material: "Rayon", description: "Light and airy fabric perfect for summer transitions.", img: "https://images.unsplash.com/photo-1765958317162-1ce88e48ed0d?q=80&w=800" },
{ name: "Basic Crop Tank", price: 399, design: "Casual", material: "Cotton", description: "Essential layering foundation for any contemporary look.", img: "https://plus.unsplash.com/premium_photo-1691622501112-5b93fb3dcdd2?q=80&w=800" },
{ name: "Simple White Tee", price: 449, design: "Minimal", material: "Cotton", description: "The definitive high-quality white shirt for daily wear.", img: "https://plus.unsplash.com/premium_photo-1690406382707-16d9cc7a83d5?q=80&w=800" },
{ name: "Green Solid Top", price: 550, design: "Solid", material: "Poly Cotton", description: "Muted earthy tones for a balanced fashion silhouette.", img: "https://images.unsplash.com/photo-1707302342660-33371f11f79e?q=80&w=800" },
{ name: "Blue Ruffle Blouse", price: 650, design: "Ruffle", material: "Chiffon", description: "Delicate feminine textures designed for evening edits.", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800" },
{ name: "Red Party Top", price: 699, design: "Partywear", material: "Silk Blend", description: "Vibrant and sharp cut for special celebratory occasions.", img: "https://images.unsplash.com/photo-1765730597290-7c7992d745fc?q=80&w=800" },
{ name: "Peach Casual Top", price: 399, design: "Basic", material: "Cotton", description: "Soft pastel hues for a gentle seasonal transition.", img: "https://plus.unsplash.com/premium_photo-1705969326477-3cddc1a48f84?q=80&w=800" },
{ name: "Yellow Floral Blouse", price: 499, design: "Floral", material: "Rayon", description: "Bright hand-drawn motifs on a fluid rayon silhouette.", img: "https://images.unsplash.com/photo-1757870125674-eb1dac151c28?q=80&w=800" },
{ name: "Cream Sleeve Top", price: 599, design: "Bell Sleeve", material: "Polyester", description: "Dramatic sleeve volume for a modern architectural aesthetic.", img: "https://images.unsplash.com/photo-1580309399923-2f40e96bf180?q=80&w=800" },
{ name: "Black Silk Top", price: 650, design: "Elegant", material: "Silk Mix", description: "The ultimate understated luxury staple for modern women.", img: "https://plus.unsplash.com/premium_photo-1690038783640-960d24344604?q=80&w=800" }

    ],
    dresses: [
     { name: "Red Bodycon Dress", price: 999, design: "Bodycon", material: "Polyester", description: "Sleek and perfectly fitted for evening social events.", img: "https://images.unsplash.com/photo-1606480192262-e3b6a9f37142?q=80&w=800" },
{ name: "Black A-Line Dress", price: 1199, design: "A-Line", material: "Crepe", description: "Classic structured flow for a timeless silhouette.", img: "https://images.unsplash.com/photo-1735220984784-e364aff56143?q=80&w=800" },
{ name: "Blue Maxi Gown", price: 1299, design: "Maxi", material: "Chiffon", description: "Elegant fluid motion captured in a deep navy hue.", img: "https://images.unsplash.com/photo-1617027228277-5f15a5634bc7?q=80&w=800" },
{ name: "Pink Floral Dress", price: 1099, design: "Floral", material: "Rayon", description: "Soft botanical patterns for a fresh, romantic aesthetic.", img: "https://plus.unsplash.com/premium_photo-1693266694391-97b55a5d3b6c?q=80&w=800" },
{ name: "Green Wrap Dress", price: 999, design: "Wrap", material: "Rayon", description: "Highly adaptable wrap fit designed for any body type.", img: "https://images.unsplash.com/photo-1635359365207-c79f5d93ef38?q=80&w=800" },
{ name: "White Summer Dress", price: 900, design: "Casual", material: "Cotton", description: "Breathable natural fabric perfect for bright city days.", img: "https://plus.unsplash.com/premium_photo-1670444605883-f3fbf4fcfac8?q=80&w=800" },
{ name: "Beige Linen Dress", price: 1100, design: "Midi", material: "Linen", description: "Textured sustainable fiber for sophisticated quiet luxury.", img: "https://images.unsplash.com/photo-1730838199493-19d469f7ee62?q=80&w=800" },
{ name: "Yellow Print Dress", price: 950, design: "Print", material: "Rayon", description: "Vibrant canary yellow patterns for a bold silhouette.", img: "https://images.unsplash.com/photo-1578858600608-f3f4108187c3?q=80&w=800" },
{ name: "Purple Flare Dress", price: 1050, design: "Fit & Flare", material: "Polyester", description: "Playful skirt volume with a soft, ethereal color palette.", img: "https://images.unsplash.com/photo-1650817268809-0dc807b39d4a?q=80&w=800" },
{ name: "Classic Black Gown", price: 1300, design: "Elegant", material: "Silk Blend", description: "Understated statement black for formal evening archives.", img: "https://images.unsplash.com/photo-1663428119031-b138fbf86c8d?q=80&w=800" }
],
    handbags: [
       { name: "Black Sling Bag", price: 799, design: "Sling", material: "PU Leather", description: "Essential compact storage for the modern woman.", img: "https://images.unsplash.com/photo-1668435734515-2396649c7cb4?q=80&w=800" },
{ name: "Brown Shoulder Bag", price: 999, design: "Shoulder", material: "Faux Leather", description: "Structured minimalist design for professional edits.", img: "https://images.unsplash.com/photo-1760624294469-550753ec203a?q=80&w=800" },
{ name: "Small White Clutch", price: 650, design: "Mini", material: "PU", description: "Compact architectural aesthetic for evening essentials.", img: "https://images.unsplash.com/photo-1683921470299-b8f0f3331657?q=80&w=800" },
{ name: "Pink Casual Bag", price: 850, design: "Casual", material: "PU", description: "Playful pastel hue applied to a classic silhouette.", img: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?q=80&w=800" },
{ name: "Grey Work Tote", price: 1050, design: "Tote", material: "Synthetic", description: "High-capacity durable storage for busy urban days.", img: "https://images.unsplash.com/photo-1617713211981-4e64ca81bdad?q=80&w=800" },
{ name: "Beige Shoulder Bag", price: 950, design: "Shoulder", material: "PU", description: "Neutral earth tones for versatile wardrobe pairing.", img: "https://plus.unsplash.com/premium_photo-1723826751056-6523b0b7c47c?q=80&w=800" },
{ name: "Luxury Black Tote", price: 1200, design: "Premium", material: "Faux Leather", description: "Deep black finish featuring premium metallic hardware.", img: "https://plus.unsplash.com/premium_photo-1671028547411-12a7fb233ddd?q=80&w=800" },
{ name: "Blue Casual Sling", price: 850, design: "Casual", material: "PU", description: "Durable daily carrier in a classic deep blue.", img: "https://plus.unsplash.com/premium_photo-1693222144142-bf72bdbf748c?q=80&w=800" },
{ name: "Red Urban Bag", price: 950, design: "Stylish", material: "Synthetic", description: "Bold accent red for modern city transitions.", img: "https://images.unsplash.com/photo-1548978023-71dc39a284c3?q=80&w=800" },
{ name: "Large Maroon Tote", price: 1100, design: "Tote", material: "PU Leather", description: "Maximum utility with a refined high-gloss finish.", img: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=800" }
],
    footwear: [
       { name: "Classic Black Heels", price: 999, design: "Heels", material: "Synthetic", description: "Classic vertical lift for formal fashion silhouettes.", img: "https://images.unsplash.com/photo-1596702876489-9d11e5806161?q=80&w=800" },
{ name: "Simple White Sandals", price: 899, design: "Sandals", material: "PU", description: "Minimalist strap design for effortless summer ease.", img: "https://images.unsplash.com/photo-1702413094780-4bfd4b0d873c?q=80&w=800" },
{ name: "Pink Flat Shoes", price: 699, design: "Flats", material: "PU", description: "Soft cushion comfort for smooth daily movement.", img: "https://images.unsplash.com/photo-1706980592027-8ec24dcc3441?q=80&w=800" },
{ name: "Grey Mesh Sneakers", price: 1299, design: "Sneakers", material: "Mesh", description: "High athletic performance with a tailored feminine cut.", img: "https://images.unsplash.com/photo-1632765259214-9afeef8669e2?q=80&w=800" },
{ name: "Brown Block Heels", price: 999, design: "Heels", material: "Synthetic", description: "Stable heel support for all-day professional elegance.", img: "https://plus.unsplash.com/premium_photo-1671469874953-6df5019681eb?q=80&w=800" },
{ name: "Blue Casual Step", price: 1199, design: "Casual", material: "Mesh", description: "Cool oceanic tones for a fresh modern aesthetic.", img: "https://images.unsplash.com/photo-1620288091141-71640b6cd6f4?q=80&w=800" },
{ name: "Beige Flat Sandals", price: 699, design: "Casual", material: "PU", description: "Understated beige for effortless seasonal pairing.", img: "https://images.unsplash.com/photo-1628182982016-e8c2216670f2?q=80&w=800" },
{ name: "Black Arch Sandals", price: 800, design: "Sandals", material: "Synthetic", description: "Sculptural black lines designed for evening wear.", img: "https://images.unsplash.com/photo-1625318880107-49baad6765fd?q=80&w=800" },
{ name: "Maroon Pumps", price: 999, design: "Heels", material: "PU Leather", description: "Professional chic finish in a deep burgundy maroon.", img: "https://images.unsplash.com/photo-1554062097-69c634085c6d?q=80&w=800" },
{ name: "Silver Party Heels", price: 1100, design: "Party", material: "Synthetic", description: "Sparkling metallic finish for the evening spotlight.", img: "https://images.unsplash.com/photo-1525753609950-724d3715874d?q=80&w=800" }
]
  },
  kids: {
    boys: [
      { name: "Blue Junior Tee", price: 299, design: "Casual", material: "Cotton", description: "Soft, breathable and highly durable for daily play.", img: "https://plus.unsplash.com/premium_photo-1762456151036-58024a74294c?q=80&w=800" },
      { name: "Red Sport Top", price: 350, design: "Sports", material: "Polyester", description: "High-performance breathable fabric for active boys.", img: "https://images.unsplash.com/photo-1618681867507-6a51ed8719ec?q=80&w=800" },
      { name: "Black School Shirt", price: 450, design: "Formal", material: "Cotton", description: "Clean sharp look tailored for formal school events.", img: "https://plus.unsplash.com/premium_photo-1723802463463-519a55440c14?q=80&w=800" },
      { name: "Green Print Tee", price: 320, design: "Print", material: "Cotton", description: "Fun character motifs for a young, playful silhouette.", img: "https://images.unsplash.com/photo-1636247640166-d57998dacfd6?q=80&w=800" },
      { name: "Yellow Casual Top", price: 370, design: "Casual", material: "Cotton", description: "Bright sun-yellow for a happy, energetic look.", img: "https://images.unsplash.com/photo-1750508719905-c843b82dde8c?q=80&w=800" },
      { name: "Basic White Tee", price: 300, design: "Basic", material: "Cotton", description: "The essential high-quality base layer for active kids.", img: "https://plus.unsplash.com/premium_photo-1663104626815-a8f62395d6d2?q=80&w=800" },
      { name: "Blue Button Shirt", price: 340, design: "Solid", material: "Cotton", description: "Classic, sophisticated formal wear for young boys.", img: "https://images.unsplash.com/photo-1758782213781-7fc7c2c33155?q=80&w=800" },
      { name: "Grey Print Tee", price: 330, design: "Casual", material: "Cotton", description: "Cool charcoal grey for modern kids' street style.", img: "https://images.unsplash.com/photo-1693443688057-85f57b872a3c?q=80&w=800" },
      { name: "Striped Kids Tee", price: 299, design: "Striped", material: "Cotton", description: "Classic nautical lines for a daily wardrobe archive.", img: "https://images.unsplash.com/photo-1761615676196-f519281e10d6?q=80&w=800" },
      { name: "Dark Junior Shirt", price: 380, design: "Formal", material: "Cotton", description: "Deep obsidian shades for smart evening celebrations.", img: "https://plus.unsplash.com/premium_photo-1691367782367-2bd37f646abc?q=80&w=800" }
    ],
    girls: [
     { name: "Floral Summer Frock", price: 499, design: "Floral", material: "Rayon", description: "Pretty botanical patterns in an airy summer cut.", img: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=800" },
{ name: "Beige Cotton Dress", price: 450, design: "Casual", material: "Cotton", description: "Soft beige hues for quiet luxury inspired kids.", img: "https://images.unsplash.com/photo-1667695411499-16a610daecb6?q=80&w=800" },
{ name: "Blue Sky Dress", price: 550, design: "Maxi", material: "Chiffon", description: "Bright sky blue for cheerful seasonal transitions.", img: "https://images.unsplash.com/photo-1625634749703-932bd5ceca4f?q=80&w=800" },
{ name: "Grey Minimal Frock", price: 480, design: "Minimal", material: "Linen", description: "Structured grey linen for a modern youthful style.", img: "https://images.unsplash.com/photo-1761615676196-f519281e10d6?q=80&w=800" },
{ name: "Pink Silk Dress", price: 699, design: "Elegant", material: "Silk Blend", description: "Luxury fabric finish for refined young silhouettes.", img: "https://plus.unsplash.com/premium_photo-1661497509874-d7d53fa52334?q=80&w=800" },
{ name: "Red Party Frock", price: 650, design: "Party", material: "Polyester", description: "Bold celebratory red for festive family archives.", img: "https://images.unsplash.com/photo-1578461271674-31b0b7c036b2?q=80&w=800" },
{ name: "Yellow Star Dress", price: 599, design: "Graphic", material: "Cotton", description: "Shining celestial details for daily playful wear.", img: "https://images.unsplash.com/photo-1700751615484-6b4427a1dacd?q=80&w=800" },
{ name: "Clean White Dress", price: 420, design: "Basic", material: "Cotton", description: "Pure white summer look for sophisticated girls.", img: "https://images.unsplash.com/photo-1653686933150-aa0c80478c56?q=80&w=800" },
{ name: "Purple Lace Dress", price: 550, design: "Lace", material: "Chiffon", description: "Soft delicate textures for graceful movement.", img: "https://images.unsplash.com/photo-1707530042525-a5f250b13ca4?q=80&w=800" },
{ name: "Simple Black Dress", price: 600, design: "Elegant", material: "Crepe", description: "The definitive minimal black dress for active kids.", img: "https://plus.unsplash.com/premium_photo-1723867407829-60796c2eddcf?q=80&w=800" }
 ],
    toys: [
     { name: "Soft Plush Bear", price: 399, design: "Plush", material: "Soft Fiber", description: "The definitive soft companion for childhood play.", img: "https://plus.unsplash.com/premium_photo-1725075087109-5ee07f242436?q=80&w=800" },
{ name: "Wooden Building Blocks", price: 450, design: "Educational", material: "Eco Wood", description: "Singular architectural building for young minds.", img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800" },
{ name: "Blue Model Car", price: 299, design: "Model", material: "Plastic", description: "Sleek aerodynamic miniature for high-speed play.", img: "https://images.unsplash.com/photo-1532330393533-443990a51d10?q=80&w=800" },
{ name: "Space Robot Toy", price: 499, design: "Plush", material: "Fabric", description: "An intergalactic archive piece for future astronauts.", img: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800" },
{ name: "Canvas Doll", price: 350, design: "Dolls", material: "Canvas", description: "Traditional craft applied to modern childhood play.", img: "https://images.unsplash.com/photo-1612506001235-f0d0892aa11b?q=80&w=800" },
{ name: "Simple Logic Puzzle", price: 199, design: "Puzzle", material: "Cardboard", description: "Critical thinking developed in quiet luxury tones.", img: "https://images.unsplash.com/photo-1594035176751-80fb39dc82aa?q=80&w=800" },
{ name: "Bead Activity Maze", price: 250, design: "Activity", material: "Wood & Metal", description: "Tactile exploration designed for little growing hands.", img: "https://plus.unsplash.com/premium_photo-1755534835088-2c576e7cc0e2?q=80&w=800" },
{ name: "Art & Color Kit", price: 599, design: "Creative", material: "Mixed", description: "The ultimate creative tool for junior architects.", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800" },
{ name: "Junior Tea Set", price: 450, design: "Roleplay", material: "Ceramic Finish", description: "Sophisticated social archives for young hosts.", img: "https://images.unsplash.com/photo-1758272267310-d068386fe19a?q=80&w=800" },
{ name: "Wooden Train Set", price: 899, design: "Track", material: "Wood", description: "Modular transit system for any high-end playroom.", img: "https://plus.unsplash.com/premium_photo-1723708910982-9b16181c373b?q=80&w=800" }
],
    footwear: [
     { name: "Blue Junior Shoes", price: 650, design: "Shoes", material: "Mesh", description: "Highly supportive comfort for active little feet.", img: "https://images.unsplash.com/photo-1759040655848-60ac4a7906b4?q=80&w=800" },
{ name: "White Kids Runners", price: 799, design: "Sport", material: "Synthetic", description: "Bright and durable for energetic playground speed.", img: "https://images.unsplash.com/photo-1594454073577-63f22e76bf1d?q=80&w=800" },
{ name: "Blue Casual Shoes", price: 550, design: "Casual", material: "PU", description: "Easy wardrobe transition for daily school archives.", img: "https://images.unsplash.com/photo-1591130901943-3abb6287460d?q=80&w=800" },
{ name: "Beige Soft Sandals", price: 499, design: "Sandals", material: "Soft PU", description: "Highly breathable neutral for relaxed summer play.", img: "https://images.unsplash.com/photo-1732708862549-714f7478ca31?q=80&w=800" },
{ name: "Black Formal Shoes", price: 850, design: "Formal", material: "Faux Leather", description: "Polished classic look for young academy scholars.", img: "https://plus.unsplash.com/premium_photo-1723662042141-b5c257f83072?q=80&w=800" },
{ name: "Blue Sport Shoes", price: 899, design: "Sport", material: "Mesh", description: "High-traction durable soles for very active kids.", img: "https://images.unsplash.com/photo-1705329585004-92ce6c257f46?q=80&w=800" },
{ name: "Strong Black Boots", price: 999, design: "Boots", material: "Synthetic", description: "Rugged durability for outdoor forest adventures.", img: "https://images.unsplash.com/photo-1472212475008-54945bdab411?q=80&w=800" },
{ name: "Pink Archive Sneakers", price: 699, design: "Sneaker", material: "Cotton Canvas", description: "Playful pastel tones on a soft cotton silhouette.", img: "https://images.unsplash.com/photo-1572293276811-1f27592be0a8?q=80&w=800" },
{ name: "White Slip-On Shoes", price: 599, design: "Casual", material: "PU Leather", description: "Effortless high comfort for everyday household use.", img: "https://images.unsplash.com/photo-1685362336393-3583f87c3933?q=80&w=800" },
{ name: "Silver Party Shoes", price: 750, design: "Party", material: "Synthetic", description: "Shining metallic finish for junior evening events.", img: "https://images.unsplash.com/photo-1524565012000-3bb6703925fe?q=80&w=800" }
]
  },
  accessories: {
    watches: [
  {name:"Classic Steel Watch",price:1299,design:"Analog",material:"Stainless Steel",description:"Highly precise timing with a deep obsidian finish.",img:"https://images.unsplash.com/photo-1684823026928-a4c4e160bec2?w=600&auto=format&fit=crop&q=60"},
{name:"Grey Formal Watch",price:1399,design:"Classic",material:"Steel",description:"Pure elegance for the modern professional archive.",img:"https://images.unsplash.com/photo-1717605383877-df15664051e8?w=600&auto=format&fit=crop&q=60"},
{name:"Gold Premium Watch",price:1599,design:"Premium",material:"Metal",description:"Ultimate luxury finish for high-end statement wear.",img:"https://images.unsplash.com/photo-1638872726444-0579101a60e7?w=600&auto=format&fit=crop&q=60"},
{name:"Black Leather Watch",price:999,design:"Leather",material:"Faux Leather",description:"Quiet sophisticated style with a soft-touch strap.",img:"https://images.unsplash.com/photo-1752896596082-166c5685e74d?w=600&auto=format&fit=crop&q=60"},
{name:"Blue Sport Watch",price:1199,design:"Sport",material:"Rubber",description:"Durable tactical design for intense active use.",img:"https://images.unsplash.com/photo-1764243910471-4161c42fd29c?w=600&auto=format&fit=crop&q=60"},
{name:"Brown Leather Watch",price:1100,design:"Formal",material:"Leather",description:"Rich mahogany brown leather for executive edits.",img:"https://images.unsplash.com/photo-1667854785342-1cfc64f20404?w=600&auto=format&fit=crop&q=60"},
{name:"Mesh Strap Watch",price:1200,design:"Mesh",material:"Steel",description:"Fine mesh metallic strap for modern tech wrists.",img:"https://images.unsplash.com/photo-1760532467646-b9e466403862?w=600&auto=format&fit=crop&q=60"},
{name:"Minimalist Black Watch",price:1300,design:"Minimal",material:"Stainless Steel",description:"Zero visual noise, just singular luxury substance.",img:"https://images.unsplash.com/photo-1611541120102-a91162413dd4?w=600&auto=format&fit=crop&q=60"},
{name:"Rose Gold Watch",price:1500,design:"Luxury",material:"Metal",description:"Exquisite rose gold tones for a feminine touch.",img:"https://images.unsplash.com/photo-1726981407933-06fe96c4cefa?w=600&auto=format&fit=crop&q=60"},
{name:"Steel Silver Watch",price:1400,design:"Bicolor",material:"Steel",description:"Sophisticated two-tone design for a variable look.",img:"https://images.unsplash.com/photo-1657235895095-e043ce2ebf41?w=600&auto=format&fit=crop&q=60"}
 ],
    bags: [
     {name:"Basic Backpack",price:799,design:"Backpack",material:"Polyester",description:"Your reliable companion for every daily journey.",img:"https://images.unsplash.com/photo-1649813616320-9cdf5a2cd1d9?q=80&w=800"},
{name:"Grey Laptop Bag",price:999,design:"Laptop",material:"Polyester",description:"Safe reinforced storage for your modern tech archive.",img:"https://images.unsplash.com/photo-1708447135262-850979354fcf?q=80&w=800"},
{name:"Beige Messenger Bag",price:850,design:"Messenger",material:"Canvas",description:"Effortless crossbody transit for daily urban edits.",img:"https://plus.unsplash.com/premium_photo-1681233752586-6d52f3e83427?w=600&auto=format&fit=crop&q=60"},
{name:"Black Travel Duffel",price:1200,design:"Travel",material:"PU Leather",description:"Maximum storage capacity for global archive travel.",img:"https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800"},
{name:"White Camera Bag",price:750,design:"Utility",material:"Ripstop",description:"Specialized padded storage for essential creative tools.",img:"https://plus.unsplash.com/premium_photo-1663054826013-da028c3735ec?w=600&auto=format&fit=crop&q=60"},
{name:"Canvas Tote Bag",price:699,design:"Casual",material:"Cotton Canvas",description:"Simple functional volume for daily market visits.",img:"https://images.unsplash.com/photo-1542957057-debadce4ce81?w=600&auto=format&fit=crop&q=60"},
{name:"Executive Business Case",price:1500,design:"Professional",material:"Faux Leather",description:"The definitive executive carrier for professionals.",img:"https://images.unsplash.com/photo-1748814373074-483fc4f1eeab?w=600&auto=format&fit=crop&q=60"},
{name:"Mini Grey Backpack",price:650,design:"Compact",material:"Polyester",description:"Minimalist ultra-light carry for quick city days.",img:"https://plus.unsplash.com/premium_photo-1723649902660-66643962d57b?w=600&auto=format&fit=crop&q=60"},
{name:"Blue Tech Backpack",price:899,design:"Urban",material:"Nylon",description:"High-performance tech fabric for the modern city.",img:"https://images.unsplash.com/photo-1637999434283-96584b45ddc5?w=600&auto=format&fit=crop&q=60"},
{name:"Suede Weekend Bag",price:1100,design:"Travel",material:"Suede Finish",description:"Tactile high-end luxury for short weekend escapes.",img:"https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=800"}
],
    caps: [
      {name:"Basic Black Cap",price:299,design:"Baseball",material:"Cotton",description:"The definitive finishing touch to any urban street edit.",img:"https://images.unsplash.com/photo-1680455084452-94ff3fd6209d?q=80&w=800"},
{name:"Black Winter Beanie",price:350,design:"Winter",material:"Wool Blend",description:"Soft insulating warmth in a singular obsidian hue.",img:"https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=800"},
{name:"Straw Sun Hat",price:499,design:"Summer",material:"Straw",description:"Natural sun protection for sophisticated coastal archives.",img:"https://images.unsplash.com/photo-1601634757806-fa236c453dee?w=600&auto=format&fit=crop&q=60"},
{name:"White Sport Cap",price:399,design:"Performance",material:"Polyester",description:"Highly breathable tech fabric for active transitions.",img:"https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&auto=format&fit=crop&q=60"},
{name:"Red Trucker Cap",price:320,design:"Retro",material:"Mesh & Cotton",description:"Classic retro silhouette combined with modern color.",img:"https://images.unsplash.com/photo-1733127547242-42a2e7ac12bb?w=600&auto=format&fit=crop&q=60"},
{name:"Grey Flat Peak",price:350,design:"Modern",material:"Cotton",description:"Bold architectural lines for the contemporary crown.",img:"https://plus.unsplash.com/premium_photo-1679634979822-4d1041fcd0f9?w=600&auto=format&fit=crop&q=60"},
{name:"Brown Corduroy Cap",price:450,design:"Textured",material:"Corduroy",description:"Rich ribbed fabric for textured seasonal archives.",img:"https://plus.unsplash.com/premium_photo-1673818515838-20c84a2d520a?w=600&auto=format&fit=crop&q=60"},
{name:"Blue Casual Cap",price:299,design:"Relaxed",material:"Washed Cotton",description:"The ultimate casual staple for a relaxed head look.",img:"https://plus.unsplash.com/premium_photo-1739801197686-0a0e3684f1f4?w=600&auto=format&fit=crop&q=60"},
{name:"Black Bucket Hat",price:499,design:"Street",material:"Cotton Canvas",description:"360-degree coverage in a deep obsidian black.",img:"https://images.unsplash.com/photo-1652025105339-c2aade6d1077?w=600&auto=format&fit=crop&q=60"},
{name:"Simple White Cap",price:350,baseDesign:"Clean",material:"Premium Cotton",description:"Pure alabaster white for a sharp, high-end finish.",img:"https://images.unsplash.com/photo-1656166229825-8bb5c3214111?w=600&auto=format&fit=crop&q=60"}
 ],
    jewellery: [
     {name:"Steel Link Chain",price:450,design:"Chain",material:"Alloy",description:"Refined metallic detail for a layered aesthetic look.",img:"https://plus.unsplash.com/premium_photo-1673285096761-79e49ff5b760?q=80&w=800"},
{name:"Silver Minimal Ring",price:299,design:"Ring",material:"Silver Finish",description:"Subtle silver circle for the singular modern hand.",img:"https://images.unsplash.com/photo-1736520500693-714a0ed52560?w=600&auto=format&fit=crop&q=60"},
{name:"Stone Beaded Wrap",price:350,design:"Bracelet",material:"Stone & Cord",description:"Earthy natural textures for a balanced silhouette.",img:"https://images.unsplash.com/photo-1707222610367-d5b39d18a150?w=600&auto=format&fit=crop&q=60"},
{name:"Polished Cuff Bracelet",price:599,design:"Cuff",material:"Polished Steel",description:"A bold modern statement of high-end quiet luxury.",img:"https://images.unsplash.com/photo-1681091637777-7b5c49bf9691?w=600&auto=format&fit=crop&q=60"},
{name:"Gold Pendant Necklace",price:650,design:"Pendant",material:"Gold Finish",description:"Elevated focal point for the central wardrobe archive.",img:"https://plus.unsplash.com/premium_photo-1681276170092-446cd1b5b32d?w=600&auto=format&fit=crop&q=60"},
{name:"Brown Leather Band",price:399,design:"Bracelet",material:"Leather",description:"Rugged urban elegance for the sophisticated wrist.",img:"https://images.unsplash.com/photo-1559555698-cc683c339bdb?w=600&auto=format&fit=crop&q=60"},
{name:"Simple Steel Studs",price:250,design:"Earrings",material:"Steel",description:"Minimal metallic points of singular focused light.",img:"https://images.unsplash.com/photo-1708389828173-5a48bedeb62f?w=600&auto=format&fit=crop&q=60"},
{name:"Rose Gold Chain",price:799,design:"Necklace",material:"Rose Gold Mix",description:"Warm copper tones for delicate feminine transitions.",img:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800"},
{name:"Silver Twist Ring",price:350,design:"Ring",material:"Sterling Silver",description:"Structural complexity captured in a simple form.",img:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800"},
{name:"Mixed Bangle Set",price:899,design:"Bangles",material:"Mixed Metal",description:"Melodic metallic layering for the active modern arm.",img:"https://images.unsplash.com/photo-1721103418981-0ee59b80592e?w=600&auto=format&fit=crop&q=60"}
]
  }
};

export const PRODUCTS: Product[] = [];
for (const catKey in XYZ_STORE_RAW) {
  for (const subKey in XYZ_STORE_RAW[catKey]) {
    const arr = XYZ_STORE_RAW[catKey][subKey];
    arr.forEach((p, i) => {
      PRODUCTS.push({
        ...p,
        id: `${catKey.toLowerCase()}_${subKey.toLowerCase()}_${i + 1}`,
        category: catKey,
        subcategory: subKey,
        rating: (Math.random() * (5 - 4.5) + 4.5).toFixed(1)
      });
    });
  }
}

// Add Limited Edition to general searchable products as well
LIMITED_EDITION_PRODUCTS.forEach(p => PRODUCTS.push(p));

export const CATEGORIES = Object.keys(XYZ_STORE_RAW);
export const getSubcategories = (cat: string) => XYZ_STORE_RAW[cat] ? Object.keys(XYZ_STORE_RAW[cat]) : [];
