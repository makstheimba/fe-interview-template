export enum LessonIcon {
  THEORY = 'theory',
  PRACTICE = 'practice',
  PROJECT = 'project'
}

export interface SearchEntryLessonInfo {
  id: string;
  icon: LessonIcon;
  type: string;
  name: string;
}

export interface SearchEntry {
  lesson: SearchEntryLessonInfo;
  breadcrumbs: string[];
  text: string;
}

export interface SearchResponse {
  results: SearchEntry[];
} 
