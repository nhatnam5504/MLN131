// Types cho trò chơi học thuật

export type QuestionType = 'multiple-choice' | 'true-false';

export interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface SocialImpact {
  doanKet?: number;    // Đoàn kết
  onDinh?: number;     // Ổn định
  congBang?: number;   // Công bằng
  nhanThuc?: number;   // Nhận thức
}

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  answers: Answer[];
  explanation: string;
  correctImpact: SocialImpact;
  wrongImpact: SocialImpact;
}

export interface Stage {
  id: number;
  title: string;
  description: string;
  objective: string;
  questions: Question[];
}

export interface SocialIndicators {
  doanKet: number;    // Đoàn kết
  onDinh: number;     // Ổn định
  congBang: number;   // Công bằng
  nhanThuc: number;   // Nhận thức
}

export interface GameState {
  currentStage: number;
  currentQuestion: number;
  score: number;
  consecutiveCorrect: number;
  socialIndicators: SocialIndicators;
  answers: {
    stageId: number;
    questionId: string;
    selectedAnswerId: string;
    isCorrect: boolean;
  }[];
  gamePhase: 'intro' | 'playing' | 'stage-complete' | 'finished';
  showExplanation: boolean;
  lastAnswerCorrect: boolean | null;
}

export interface GameResult {
  totalScore: number;
  correctAnswers: number;
  totalQuestions: number;
  socialIndicators: SocialIndicators;
  resultLevel: 'excellent' | 'average' | 'needs-improvement';
}
