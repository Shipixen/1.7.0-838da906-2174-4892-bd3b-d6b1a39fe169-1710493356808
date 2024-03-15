import {
  PricingTier,
  PricingTierFrequency,
} from '@/data/config/pricingDataInterface';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    id: 'tier-1',
    href: '/subscribe',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '$0', '2': '$0' },
    description: 'Get all goodies for free, no credit card required.',
    features: [
      'Multi-platform compatibility',
      'Real-time notification system',
      'Advanced user permissions',
    ],
    featured: false,
    highlighted: false,
    cta: 'Sign up',
  },
  {
    name: 'Pro',
    id: 'tier-2',
    href: '/subscribe',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '$3.99', '2': '$49.99' },
    description: 'When you grow, need more power and flexibility.',
    features: [
      'All in the free plan plus',
      'Customizable templates',
      'Integration with third-party apps',
    ],
    featured: false,
    highlighted: true,
    cta: 'Get started',
  },
  {
    name: 'Scaler',
    id: 'tier-3',
    href: '/contact-us',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '$14.99', '2': '$179.88' },
    description: 'When you grow, need more power and flexibility.',
    features: [
      'All in the pro plan plus',
      'Priority support',
      'Enterprise-grade security',
    ],
    featured: true,
    highlighted: true,
    cta: 'Get started',
  },
];

export const pricingFrequencies: PricingTierFrequency[] = [
  {
    id: '1b949463-1398-4b8b-b367-1df5919b75b6',
    value: '1',
    label: 'Monthly',
    priceSuffix: '/month',
  },
  {
    id: '29003ccb-92b3-408c-b9de-01a1b2459835',
    value: '2',
    label: 'Annually',
    priceSuffix: '/year',
  },
];
