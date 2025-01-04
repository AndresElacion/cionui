export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      feedback: {
        Row: {
          id: number;
          name: string;
          message: string;
          created_at: string;
        };
        Insert: {
          name: string;
          message: string;
        };
        Update: {
          name: string;
          message: string;
        };
      };
    };
  };
}
