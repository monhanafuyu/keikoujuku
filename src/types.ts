export interface StudyPlanItem {
  subject: string;
  material: string;
  scope: string;
  dailyDetail: string;
  tag: string;
  progressPercent: number;
}

export interface DaySchedule {
  day: string;
  label: string;
  focus: string;
  tasks: {
    subject: string;
    task: string;
    estimatedMinutes: number;
    completed: boolean;
  }[];
}

export interface PricingPlan {
  id: 'light' | 'standard' | 'premium';
  name: string;
  price: number;
  badge?: string;
  isPopular?: boolean;
  description: string;
  features: { text: string; included: boolean; highlight?: boolean }[];
  targetAudience: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ConsultationFormData {
  name: string;
  grade: string;
  targetUniversity: string;
  currentDeviation?: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  concerns: string[];
  message?: string;
  isParent: boolean;
}
