import type { SearchResponse } from './types';
import { createMockSearchEntry } from './mockData';

function getRandomDelay(): number {
  return Math.floor(Math.random() * (1000 - 200 + 1)) + 200;
}

export async function mockSearchApi(): Promise<SearchResponse> {
  // Simulate random delay between 200-1000ms
  const delay = getRandomDelay();
  
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = Array.from({ length: 5 }, () => createMockSearchEntry());
      
      resolve({
        results
      });
    }, delay);
  });
}

export async function fetchMockSearchResults(): Promise<SearchResponse> {
  try {
    const response = await mockSearchApi();
    return response;
  } catch (error) {
    console.error('Mock API error:', error);
    throw error;
  }
} 
