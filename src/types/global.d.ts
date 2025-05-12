type Note = {
  id: string;
  title: string;
  description: string;
  labels: Label[];
  created_by: User;
  created_at: string;
  updated_at: string;
};

type Label = {
  id: string;
  name: string;
  hex_code: string;
  created_at: string;
  updated_at: string;
};

type User = {
  id: string;
  ip: string;
  note: Note[];
  created_at: string;
  updated_at: string;
};
