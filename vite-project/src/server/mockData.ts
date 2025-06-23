import type { SearchEntry, SearchEntryLessonInfo } from './types';
import { LessonIcon } from './types';

function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function createMockSearchEntry(): SearchEntry {
  return {
    lesson: {
      id: generateUUID(),
      icon: LessonIcon.THEORY,
      type: "theory",
      name: "Dummy lesson name"
    } as SearchEntryLessonInfo,
    breadcrumbs: ["Module name", "Chapter name"],
    text: (
      "# Theory header\nSome theory here." +
      "This will be visible in search result.\n" +
      "> Something important.\n---\nAnd a bit more text"
    )
  };
} 
