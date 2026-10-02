export interface ChatMessage {
  id: string;
  sender: 'client' | 'agent' | 'system';
  text: string;
  time: string;
  isAudio?: boolean;
  audioDuration?: string;
  meta?: string;
}

export interface DemoNiche {
  id: string;
  name: string;
  category: string;
  avatarLetter: string;
  messages: ChatMessage[];
  quickReplies: string[];
}

export interface DiagnosticFormState {
  fullName: string;
  phone: string;
  companyName: string;
  productType: string;
  dailyLeads: string;
  currentAttendant: string;
}
