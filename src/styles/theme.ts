'use client';

import { createTheme, CSSVariablesResolver, Card, Paper } from '@mantine/core';
import { paperClasses, cardClasses } from './components';

export const theme = createTheme({
  primaryColor: 'warmOrange',
  defaultRadius: 'xl',

  colors: {
    warmOrange: [
      '#FFF4E6', // 0
      '#FFE8CC', // 1
      '#FFDBAD', // 2
      '#FFCE8F', // 3
      '#FFC170', // 4
      '#F8B259', // 5
      '#E6A04D', // 6
      '#D96F32', // 7
      '#C75D2C', // 8
      '#B54A20', // 9
    ],
    warmBeige: [
      '#FAF7F2', // 0
      '#F3E9DC', // 1
      '#EDD9C7', // 2
      '#E7C9B2', // 3
      '#E1B99D', // 4
      '#DBA988', // 5
      '#D59973', // 6
      '#CF895E', // 7
      '#C97949', // 8
      '#C36934', // 9
    ],
  },

  other: {
    lightBackground: '#F3E9DC',
    lightSecondary: '#FAF7F2',
    lightAccent: '#F8B259',
    lightDark: '#C75D2C',

    darkBackground: '#1A1612',
    darkSecondary: '#2A2218',
    darkAccent: '#E6A04D',
    darkLight: '#8B4513',

    lightSurface: '#FFFFFF',
    lightBorder: '#D59973',
    lightMuted: '#8B7355',

    darkSurface: '#2A2218',
    darkBorder: '#4A4238',
    darkMuted: '#8B7355',
  },

  components: {
    Card: Card.extend({
      defaultProps: {
        withBorder: true,
        shadow: 'sm',
      },
      classNames: {
        root: cardClasses.card,
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        withBorder: true,
      },
      classNames: {
        root: paperClasses.paper,
      },
    }),
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--mantine-line-height': '1.55',
    '--mantine-font-family':
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    '--mantine-font-family-headings':
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    '--mantine-heading-font-weight': '700',

    // Spacing variables
    '--mantine-spacing-xs': '0.625rem',
    '--mantine-spacing-sm': '0.75rem',
    '--mantine-spacing-md': '1rem',
    '--mantine-spacing-lg': '1.25rem',
    '--mantine-spacing-xl': '2rem',

    // Font size variables
    '--mantine-font-size-xs': '0.75rem',
    '--mantine-font-size-sm': '0.875rem',
    '--mantine-font-size-md': '1rem',
    '--mantine-font-size-lg': '1.125rem',
    '--mantine-font-size-xl': '1.25rem',

    '--mantine-shadow-xs':
      '0 0.0625rem 0.1875rem rgba(139, 83, 37, 0.05), 0 0.0625rem 0.125rem rgba(139, 83, 37, 0.1)',
    '--mantine-shadow-sm':
      '0 0.0625rem 0.1875rem rgba(139, 83, 37, 0.05), rgba(139, 83, 37, 0.05) 0 0.625rem 0.9375rem -0.3125rem, rgba(139, 83, 37, 0.04) 0 0.4375rem 0.4375rem -0.3125rem',
    '--mantine-shadow-md':
      '0 0.0625rem 0.1875rem rgba(139, 83, 37, 0.05), rgba(139, 83, 37, 0.05) 0 1.25rem 1.5625rem -0.3125rem, rgba(139, 83, 37, 0.04) 0 0.625rem 0.625rem -0.3125rem',
    '--mantine-shadow-lg':
      '0 0.0625rem 0.1875rem rgba(139, 83, 37, 0.05), rgba(139, 83, 37, 0.05) 0 1.75rem 1.4375rem -0.4375rem, rgba(139, 83, 37, 0.04) 0 0.75rem 0.75rem -0.4375rem',
    '--mantine-shadow-xl':
      '0 0.0625rem 0.1875rem rgba(139, 83, 37, 0.05), rgba(139, 83, 37, 0.05) 0 2.25rem 1.75rem -0.4375rem, rgba(139, 83, 37, 0.04) 0 1.0625rem 1.0625rem -0.4375rem',
  },

  light: {
    // Core theme variables
    '--mantine-color-body': theme.other.lightBackground,
    '--mantine-color-text': '#2D1B0F',
    '--mantine-color-dimmed': '#8B7355',
    '--mantine-color-bright': theme.other.lightAccent,

    // Default button/input styles
    '--mantine-color-default': theme.other.lightSecondary,
    '--mantine-color-default-hover': '#EDD9C7',
    '--mantine-color-default-color': '#2D1B0F',
    '--mantine-color-default-border': '#D59973',

    // Primary color variants
    '--mantine-primary-color-filled': 'var(--mantine-color-warmOrange-6)',
    '--mantine-primary-color-filled-hover': 'var(--mantine-color-warmOrange-7)',
    '--mantine-primary-color-light': 'rgba(248, 178, 89, 0.1)',
    '--mantine-primary-color-light-hover': 'rgba(248, 178, 89, 0.12)',
    '--mantine-primary-color-light-color': 'var(--mantine-color-warmOrange-6)',
    '--mantine-primary-color-contrast': '#FFFFFF',

    // WarmOrange color variants
    '--mantine-color-warmOrange-text': '#FFFFFF',
    '--mantine-color-warmOrange-filled': 'var(--mantine-color-warmOrange-6)',
    '--mantine-color-warmOrange-filled-hover':
      'var(--mantine-color-warmOrange-7)',
    '--mantine-color-warmOrange-light': 'rgba(248, 178, 89, 0.1)',
    '--mantine-color-warmOrange-light-hover': 'rgba(248, 178, 89, 0.12)',
    '--mantine-color-warmOrange-light-color':
      'var(--mantine-color-warmOrange-6)',
    '--mantine-color-warmOrange-outline': 'var(--mantine-color-warmOrange-6)',
    '--mantine-color-warmOrange-outline-hover': 'rgba(248, 178, 89, 0.05)',

    // WarmBeige color variants
    '--mantine-color-warmBeige-text': '#2D1B0F',
    '--mantine-color-warmBeige-filled': 'var(--mantine-color-warmBeige-6)',
    '--mantine-color-warmBeige-filled-hover':
      'var(--mantine-color-warmBeige-7)',
    '--mantine-color-warmBeige-light': 'rgba(213, 153, 115, 0.1)',
    '--mantine-color-warmBeige-light-hover': 'rgba(213, 153, 115, 0.12)',
    '--mantine-color-warmBeige-light-color': 'var(--mantine-color-warmBeige-6)',
    '--mantine-color-warmBeige-outline': 'var(--mantine-color-warmBeige-6)',
    '--mantine-color-warmBeige-outline-hover': 'rgba(213, 153, 115, 0.05)',

    // State colors
    '--mantine-color-error': '#DC2626',
    '--mantine-color-success': '#16A34A',
    '--mantine-color-warning': '#F59E0B',
    '--mantine-color-info': '#3B82F6',

    // Interactive states
    '--mantine-color-anchor': theme.other.lightDark,
    '--mantine-color-placeholder': '#A0A0A0',

    // Disabled states
    '--mantine-color-disabled': '#E5E5E5',
    '--mantine-color-disabled-color': '#A0A0A0',
    '--mantine-color-disabled-border': '#D1D5DB',

    // Surface colors
    '--mantine-color-surface': theme.other.lightSurface,
  },

  dark: {
    // Core theme variables
    '--mantine-color-body': theme.other.darkBackground,
    '--mantine-color-text': '#F5F1EB',
    '--mantine-color-dimmed': '#C4A484',
    '--mantine-color-bright': theme.other.darkAccent,

    // Default button/input styles
    '--mantine-color-default': theme.other.darkSecondary,
    '--mantine-color-default-hover': '#3A3228',
    '--mantine-color-default-color': '#F5F1EB',
    '--mantine-color-default-border': '#4A4238',

    // Primary color variants
    '--mantine-primary-color-filled': 'var(--mantine-color-warmOrange-6)',
    '--mantine-primary-color-filled-hover': 'var(--mantine-color-warmOrange-5)',
    '--mantine-primary-color-light': 'rgba(230, 160, 77, 0.15)',
    '--mantine-primary-color-light-hover': 'rgba(230, 160, 77, 0.2)',
    '--mantine-primary-color-light-color': 'var(--mantine-color-warmOrange-4)',
    '--mantine-primary-color-contrast': '#FFFFFF',

    // WarmOrange color variants
    '--mantine-color-warmOrange-text': '#FFFFFF',
    '--mantine-color-warmOrange-filled': 'var(--mantine-color-warmOrange-6)',
    '--mantine-color-warmOrange-filled-hover':
      'var(--mantine-color-warmOrange-5)',
    '--mantine-color-warmOrange-light': 'rgba(230, 160, 77, 0.15)',
    '--mantine-color-warmOrange-light-hover': 'rgba(230, 160, 77, 0.2)',
    '--mantine-color-warmOrange-light-color':
      'var(--mantine-color-warmOrange-4)',
    '--mantine-color-warmOrange-outline': 'var(--mantine-color-warmOrange-4)',
    '--mantine-color-warmOrange-outline-hover': 'rgba(255, 193, 112, 0.05)',

    // WarmBeige color variants
    '--mantine-color-warmBeige-text': 'var(--mantine-color-warmBeige-4)',
    '--mantine-color-warmBeige-filled': 'var(--mantine-color-warmBeige-8)',
    '--mantine-color-warmBeige-filled-hover':
      'var(--mantine-color-warmBeige-9)',
    '--mantine-color-warmBeige-light': 'rgba(213, 153, 115, 0.15)',
    '--mantine-color-warmBeige-light-hover': 'rgba(213, 153, 115, 0.2)',
    '--mantine-color-warmBeige-light-color': 'var(--mantine-color-warmBeige-3)',
    '--mantine-color-warmBeige-outline': 'var(--mantine-color-warmBeige-4)',
    '--mantine-color-warmBeige-outline-hover': 'rgba(225, 185, 157, 0.05)',

    // State colors
    '--mantine-color-error': '#EF4444',
    '--mantine-color-success': '#22C55E',
    '--mantine-color-warning': '#F59E0B',
    '--mantine-color-info': '#60A5FA',

    // Interactive states
    '--mantine-color-anchor': theme.other.darkAccent,
    '--mantine-color-placeholder': '#6B5B47',

    // Disabled states
    '--mantine-color-disabled': '#374151',
    '--mantine-color-disabled-color': '#6B5B47',
    '--mantine-color-disabled-border': '#4B5563',

    // Surface colors
    '--mantine-color-surface': theme.other.darkSurface,
  },
});