import hh1 from '../assets/Human_hair/IMG-20260304-WA0083.jpg'
import hh2 from '../assets/Human_hair/IMG-20260304-WA0081.jpg'
import hh3 from '../assets/Human_hair/IMG-20260304-WA0082.jpg'
import hh4 from '../assets/Human_hair/IMG-20260304-WA0084.jpg'

import bl1 from '../assets/Blends/IMG-20260304-WA0085.jpg'
import bl2 from '../assets/Blends/IMG-20260304-WA0086.jpg'
import bl3 from '../assets/Blends/IMG-20260304-WA0093.jpg'
import bl4 from '../assets/Blends/IMG-20260304-WA0094.jpg'
import bl5 from '../assets/Blends/IMG-20260304-WA0095.jpg'
import bl6 from '../assets/Blends/IMG-20260304-WA0096.jpg'
import bl7 from '../assets/Blends/IMG-20260304-WA0097.jpg'

import kit1 from '../assets/Hair_maintainance_kit_and_tools/IMG-20260304-WA0089.jpg'
import kit2 from '../assets/Hair_maintainance_kit_and_tools/IMG-20260304-WA0090.jpg'

export const categories = ['All', 'Human Hair', 'Blends', 'Maintenance Kits & Tools']

export const products = [
    // ── Human Hair ──
    {
        id: 1,
        name: 'Ginger Body Wave Wig',
        category: 'Human Hair',
        badge: 'Best Seller',
        image: hh1,
        description: '100% human hair. Rich ginger body wave with a gorgeous, voluminous curl pattern. Pre-plucked HD lace.',
        lengths: ['14"', '16"', '18"', '20"', '22"'],
    },
    {
        id: 2,
        name: 'Platinum Blonde Straight Bob',
        category: 'Human Hair',
        badge: 'Hot',
        image: hh2,
        description: 'Silky #613 platinum blonde straight bob. Undetectable HD lace. Minimal shedding and tangle-free.',
        lengths: ['10"', '12"', '14"'],
    },
    {
        id: 3,
        name: 'Burgundy Kinky Curly Wig',
        category: 'Human Hair',
        badge: 'New',
        image: hh3,
        description: 'Lush, tight kinky curls in a stunning deep burgundy. 100% virgin hair, 5x5 lace closure, 180% density.',
        lengths: ['14"', '16"', '18"', '20"'],
    },
    {
        id: 4,
        name: 'Ginger Straight Bob Wig',
        category: 'Human Hair',
        badge: null,
        image: hh4,
        description: 'Sleek, vibrant ginger straight bob. Blunt cut, full ends, perfect for a bold and chic look.',
        lengths: ['10"', '12"', '14"'],
    },
    // ── Blends ──
    {
        id: 5,
        name: 'Jet Black Straight Wig',
        category: 'Blends',
        badge: 'Best Seller',
        image: bl1,
        description: 'Natural jet black straight blend wig. Smooth and sleek with a natural-looking hairline.',
        lengths: ['16"', '18"', '20"', '22"'],
    },
    {
        id: 6,
        name: 'Natural Black Body Wave',
        category: 'Blends',
        badge: null,
        image: bl2,
        description: 'Classic natural black body wave blend. Full, luscious waves that hold beautifully all day.',
        lengths: ['16"', '18"', '20"', '22"', '24"'],
    },
    {
        id: 7,
        name: 'Blonde Highlight Waves',
        category: 'Blends',
        badge: 'New',
        image: bl3,
        description: 'Short wavy blend with stunning blonde highlights on a dark root. Glamorous and full of volume.',
        lengths: ['12"', '14"', '16"'],
    },
    {
        id: 8,
        name: 'Burgundy Curly Bob',
        category: 'Blends',
        badge: null,
        image: bl4,
        description: 'Deep burgundy curly bob blend. Tight, bouncy curls with a beautiful rich wine tone.',
        lengths: ['12"', '14"'],
    },
    {
        id: 9,
        name: 'Purple Straight Long Wig',
        category: 'Blends',
        badge: 'Hot',
        image: bl5,
        description: 'Striking dark purple straight blend. Pin-straight, super smooth, and floor-length drama.',
        lengths: ['20"', '22"', '24"', '26"'],
    },
    {
        id: 10,
        name: 'Brown Highlight Body Wave',
        category: 'Blends',
        badge: null,
        image: bl6,
        description: 'Rich brown body wave blend with warm orange highlights. Soft, bouncy, and effortlessly glam.',
        lengths: ['14"', '16"', '18"'],
    },
    {
        id: 11,
        name: 'Dark Chocolate Straight',
        category: 'Blends',
        badge: null,
        image: bl7,
        description: 'Deep dark chocolate straight blend wig. Ultra-smooth, high shine, and naturally elegant.',
        lengths: ['18"', '20"', '22"', '24"'],
    },
    // ── Maintenance Kits & Tools ──
    {
        id: 12,
        name: 'Wig Holder Stand Set',
        category: 'Maintenance Kits & Tools',
        badge: 'Essential',
        image: kit1,
        description: 'Foldable wig holder stands in 4 colours. Keeps your wigs perfectly shaped when not in use.',
        lengths: [],
    },
    {
        id: 13,
        name: 'Pro Hot Comb Straightener',
        category: 'Maintenance Kits & Tools',
        badge: 'New',
        image: kit2,
        description: 'SONAR professional electric hot comb. EU/US/UK plug compatible. Straightens and smooths with salon precision.',
        lengths: [],
    },
]
