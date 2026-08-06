import { format, isValid, parseISO } from 'date-fns';

export const formatCurrency = (amount, currency = 'USD') => {
  if (isNaN(amount)) return '$0.00';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};

export const formatDate = (dateString, formatStr = 'MMM dd, yyyy') => {
  if (!dateString) return 'N/A';
  
  // Handle both string ISO dates and Date objects
  const date = typeof dateString === 'string' ? parseISO(dateString) : dateString;
  
  if (!isValid(date)) return 'Invalid Date';
  return format(date, formatStr);
};
